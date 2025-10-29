import React from "react";
import {
  ContentList,
  DragHandle,
  ElementType,
  ItemIcon,
  ItemLabel,
} from "../../styles";
import { defaultComponents } from "../../../../defaultComponents";
import { useApplicationState } from "../../../../providers/StateProvider";
import { useDrag } from "react-dnd";

const DraggableElementType = ({ item, onClick, canDrag = true }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(
    () => ({
      // "type" is required. It is used by the "accept" specification of drop targets.
      type: item.name,
      item,
      canDrag: () => {
        return canDrag;
      },
      // The collect function utilizes a "monitor" instance (see the Overview for what this is)
      // to pull important pieces of state from the DnD system.
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [canDrag]
  );

  return (
    <ElementType key={item.id} onClick={onClick} ref={dragPreview}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          opacity: canDrag ? 1 : 0.2,
        }}
      >
        <ItemIcon>{item.icon}</ItemIcon>
        <ItemLabel>{item.label}</ItemLabel>
      </div>
      <DragHandle ref={drag}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="6" cy="4" r="1" fill="currentColor" />
          <circle cx="10" cy="4" r="1" fill="currentColor" />
          <circle cx="6" cy="8" r="1" fill="currentColor" />
          <circle cx="10" cy="8" r="1" fill="currentColor" />
          <circle cx="6" cy="12" r="1" fill="currentColor" />
          <circle cx="10" cy="12" r="1" fill="currentColor" />
        </svg>
      </DragHandle>
    </ElementType>
  );
};

export const Elements = () => {
  const selectedComponent = useApplicationState(
    ({ selectedComponent }) => selectedComponent
  );
  return (
    <div>
      <ContentList>
        {defaultComponents.map((item) => {
          const canDrag = !!selectedComponent
            ? selectedComponent.accept.includes(item.name)
            : true;
          return (
            <DraggableElementType
              key={item.id}
              item={item}
              canDrag={canDrag}
              onClick={() => {
                // onSelectElement(item.id)
              }}
            />
          );
        })}
      </ContentList>
    </div>
  );
};
