import { useState } from "react";
import {
  SidebarContainer,
  TabsContainer,
  Tab,
  TabUnderline,
  SectionHeader,
  SectionTitle,
  CollapseIcon,
  ContentList,
  ContentItem,
  ItemIcon,
  ItemLabel,
  DragHandle,
  ElementType,
} from "./styles";
import { useDrag } from "react-dnd";

const components = [
  {
    id: "header",
    label: "Header",
    icon: "",
    type: "Component",
    name: "header",
    children: [],
  },
  {
    id: "footer",
    label: "Footer",
    icon: "",
    type: "Component",
    name: "footer",
    children: [],
  },
  {
    id: "main",
    label: "Main",
    icon: "",
    type: "Component",
    name: "main",
    children: [],
  },
  {
    id: "toc",
    label: "Toc",
    icon: "",
    type: "Component",
    name: "toc",
    children: [],
  },
  {
    id: "content",
    label: "Content",
    icon: "",
    type: "Component",
    name: "content",
    children: [],
  },
  {
    id: "inner",
    label: "Inner",
    icon: "",
    type: "Component",
    name: "inner",
    children: [],
  },
  {
    id: "headline",
    label: "Headline",
    icon: "H",
    type: "Component",
    name: "headline",
    children: [],
  },
];

const contentItems = [
  { id: "title", label: "Title", icon: "T" },
  { id: "picture", label: "Picture", icon: "🖼" },
  { id: "logo", label: "Logo", icon: "⬡" },
  { id: "button", label: "Button", icon: "▭" },
  { id: "link", label: "Link", icon: "🔗" },
  { id: "divider", label: "Divider", icon: "━" },
  { id: "social", label: "Social Media", icon: "♪" },
  { id: "footer", label: "Footer", icon: "≡" },
];

const DraggableElementType = ({ item, onClick }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: item.type,
    item,
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <ElementType key={item.id} onClick={onClick} ref={dragPreview}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
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

export default function Sidebar({ onSelectElement }) {
  const [activeTab, setActiveTab] = useState("design");
  const [contentExpanded, setContentExpanded] = useState(true);

  return (
    <SidebarContainer>
      <TabsContainer>
        <Tab
          active={activeTab === "design"}
          onClick={() => setActiveTab("design")}
        >
          Design
          {activeTab === "design" && <TabUnderline />}
        </Tab>
        <Tab
          active={activeTab === "elements"}
          onClick={() => setActiveTab("elements")}
        >
          Elements
          {activeTab === "elements" && <TabUnderline />}
        </Tab>
      </TabsContainer>

      {activeTab === "design" && (
        <div>
          <SectionHeader onClick={() => setContentExpanded(!contentExpanded)}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 4h12M2 8h12M2 12h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <SectionTitle>Content</SectionTitle>
            </div>
            <CollapseIcon $expanded={contentExpanded}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CollapseIcon>
          </SectionHeader>

          {contentExpanded && (
            <ContentList>
              {contentItems.map((item) => (
                <ContentItem
                  key={item.id}
                  onClick={() => onSelectElement(item.id)}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <ItemIcon>{item.icon}</ItemIcon>
                    <ItemLabel>{item.label}</ItemLabel>
                  </div>
                  <DragHandle>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="6" cy="4" r="1" fill="currentColor" />
                      <circle cx="10" cy="4" r="1" fill="currentColor" />
                      <circle cx="6" cy="8" r="1" fill="currentColor" />
                      <circle cx="10" cy="8" r="1" fill="currentColor" />
                      <circle cx="6" cy="12" r="1" fill="currentColor" />
                      <circle cx="10" cy="12" r="1" fill="currentColor" />
                    </svg>
                  </DragHandle>
                </ContentItem>
              ))}
            </ContentList>
          )}
        </div>
      )}

      {activeTab === "elements" && (
        <div>
          <ContentList>
            {components.map((item) => (
              <DraggableElementType
                key={item.id}
                item={item}
                onClick={() => onSelectElement(item.id)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <ItemIcon>{item.icon}</ItemIcon>
                  <ItemLabel>{item.label}</ItemLabel>
                </div>
                <DragHandle>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="6" cy="4" r="1" fill="currentColor" />
                    <circle cx="10" cy="4" r="1" fill="currentColor" />
                    <circle cx="6" cy="8" r="1" fill="currentColor" />
                    <circle cx="10" cy="8" r="1" fill="currentColor" />
                    <circle cx="6" cy="12" r="1" fill="currentColor" />
                    <circle cx="10" cy="12" r="1" fill="currentColor" />
                  </svg>
                </DragHandle>
              </DraggableElementType>
            ))}
          </ContentList>
        </div>
      )}
    </SidebarContainer>
  );
}
