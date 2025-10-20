import { getArticleElement } from "./getArticleElement";
import styled from "styled-components";

const ElementOverlay = styled.div`
  position: absolute;
  inset: 0;

  &:hover {
    border: 3px solid #6366f1;
    border-radius: 8px;
  }
`;

export const ArticleElement = ({ id, type, elements, ...rest }) => {
  const Elem = getArticleElement(type);
  return (
    <div
      id={id}
      style={{
        position: "relative",
        padding: "0 0 10px 0",
      }}
    >
      <ElementOverlay
        onClick={() => {
          console.log(id);
        }}
      />
      <Elem {...rest}>
        {elements &&
          Object.entries(elements).map(([t, data]) => (
            <ArticleElement
              id={`${id}.elements.${t}`}
              key={`${id}.${t}`}
              type={t}
              {...data}
            />
          ))}
      </Elem>
    </div>
  );
};
