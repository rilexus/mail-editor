import { useEffect, useState } from "react";
import { SidebarContainer, TabsContainer, Tab, TabUnderline } from "./styles";
import { Elements } from "./components/Elements";

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

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("elements");
  const [contentExpanded, setContentExpanded] = useState(true);

  return (
    <SidebarContainer>
      <TabsContainer>
        {/*<Tab*/}
        {/*  $active={activeTab === "design"}*/}
        {/*  onClick={() => setActiveTab("design")}*/}
        {/*>*/}
        {/*  Design*/}
        {/*  {activeTab === "design" && <TabUnderline />}*/}
        {/*</Tab>*/}
        <Tab
          $active={activeTab === "elements"}
          onClick={() => setActiveTab("elements")}
        >
          Elements
          {activeTab === "elements" && <TabUnderline />}
        </Tab>
      </TabsContainer>

      {/*{activeTab === "design" && (*/}
      {/*  <div>*/}
      {/*    <SectionHeader onClick={() => setContentExpanded(!contentExpanded)}>*/}
      {/*      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>*/}
      {/*        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">*/}
      {/*          <path*/}
      {/*            d="M2 4h12M2 8h12M2 12h12"*/}
      {/*            stroke="currentColor"*/}
      {/*            strokeWidth="1.5"*/}
      {/*            strokeLinecap="round"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*        <SectionTitle>Content</SectionTitle>*/}
      {/*      </div>*/}
      {/*      <CollapseIcon $expanded={contentExpanded}>*/}
      {/*        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">*/}
      {/*          <path*/}
      {/*            d="M4 6l4 4 4-4"*/}
      {/*            stroke="currentColor"*/}
      {/*            strokeWidth="2"*/}
      {/*            strokeLinecap="round"*/}
      {/*            strokeLinejoin="round"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*      </CollapseIcon>*/}
      {/*    </SectionHeader>*/}

      {/*    {contentExpanded && (*/}
      {/*      <ContentList>*/}
      {/*        {contentItems.map((item) => (*/}
      {/*          <ContentItem*/}
      {/*            key={item.id}*/}
      {/*            onClick={() => {*/}
      {/*              // onSelectElement(item.id)*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            <div*/}
      {/*              style={{*/}
      {/*                display: "flex",*/}
      {/*                alignItems: "center",*/}
      {/*                gap: "12px",*/}
      {/*              }}*/}
      {/*            >*/}
      {/*              <ItemIcon>{item.icon}</ItemIcon>*/}
      {/*              <ItemLabel>{item.label}</ItemLabel>*/}
      {/*            </div>*/}
      {/*            <DragHandler />*/}
      {/*          </ContentItem>*/}
      {/*        ))}*/}
      {/*      </ContentList>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*)}*/}

      {activeTab === "elements" && <Elements />}
    </SidebarContainer>
  );
}
