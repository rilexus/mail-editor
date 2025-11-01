import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Canvas from "./components/Canvas";
import PropertiesPanel from "./components/PropertiesPanel";
import { AppContainer, MainContent, HelpButton } from "./components/styles";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import {
  useApplicationState,
  withApplicationState,
} from "./providers/StateProvider";
import { selectTemplateCommand } from "./commands";

export default withApplicationState(function EmailEditor() {
  const selectedComponent = useApplicationState(
    ({ selectedComponent }) => selectedComponent
  );

  const [selectedElement, setSelectedElement] = useState("picture");
  const [paddingsEnabled, setPaddingsEnabled] = useState(true);
  const [paddings, setPaddings] = useState({ L: 24, T: 24, R: 24, B: 24 });
  const [cornerRadius, setCornerRadius] = useState(4);
  const [opacity, setOpacity] = useState(100);
  const [blendMode, setBlendMode] = useState("Normal");

  return (
    <AppContainer>
      <Header
        templates={[
          {
            name: "mediaReviewA",
            id: "mediaReviewA",
          },
          {
            name: "mediaReviewB",
            id: "mediaReviewB",
          },
          {
            name: "mediaReviewC",
            id: "mediaReviewC",
          },
          {
            name: "mediaReviewD",
            id: "mediaReviewD",
          },
          {
            name: "mediaReviewE",
            id: "mediaReviewE",
          },
        ]}
        currentTemplateId={"mediaReviewA"}
        onTemplateChange={({ name }) => {
          selectTemplateCommand({ name });
        }}
      />

      <MainContent>
        <DndProvider backend={HTML5Backend}>
          <Sidebar />
          <Canvas />
          {selectedComponent && (
            <PropertiesPanel
              selectedElement={selectedElement}
              paddingsEnabled={paddingsEnabled}
              setPaddingsEnabled={setPaddingsEnabled}
              paddings={paddings}
              setPaddings={setPaddings}
              cornerRadius={cornerRadius}
              setCornerRadius={setCornerRadius}
              opacity={opacity}
              setOpacity={setOpacity}
              blendMode={blendMode}
              setBlendMode={setBlendMode}
            />
          )}
        </DndProvider>
      </MainContent>
      {/*<HelpButton>*/}
      {/*  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">*/}
      {/*    <path*/}
      {/*      d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"*/}
      {/*      fill="currentColor"*/}
      {/*    />*/}
      {/*    <path*/}
      {/*      d="M8 11c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zM8 3C6.9 3 6 3.9 6 5h1.5c0-.3.2-.5.5-.5s.5.2.5.5c0 1-1.5.9-1.5 2.5V8h1.5v-.5c0-.6 1.5-.9 1.5-2.5 0-1.1-.9-2-2-2z"*/}
      {/*      fill="currentColor"*/}
      {/*    />*/}
      {/*  </svg>*/}
      {/*  Need Help?*/}
      {/*</HelpButton>*/}
    </AppContainer>
  );
});
