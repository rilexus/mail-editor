import {
  CanvasContainer,
  EmailPreview,
  EmailContent,
  UberLogo,
  ImageContainer,
  ImagePlaceholder,
  ContentSection,
  Greeting,
  VariableName,
  BodyText,
  DownloadButton,
  AddButton,
} from "./styles";
import { handleAddComponent } from "../utils/layout";
import { CanvasComponent } from "./CanvasComponent";
import { DropArea } from "./DropArea";
import { Fragment, useState } from "react";
import { insertAt } from "../utils/insertAt";
import { removeAt } from "../utils/removeAt";
import { useApplicationState } from "../providers/StateProvider";

export default function Canvas({ onClick }) {
  const [applicationState, { selectComponent, setLayout, setState }] =
    useApplicationState();

  const { layout } = applicationState;

  const handleDrop = (dropArea, item) => {
    const splitDropAreaPath = dropArea.path.split(".");
    const pathToDropArea = splitDropAreaPath.slice(0, -1).join(".");

    setLayout(handleAddComponent(dropArea.path, item));
  };

  const handleSelectComponent = (path) => {
    selectComponent(path);
  };

  const handleDeselectComponent = (path) => {
    if (applicationState.selectedComponentPath === path) {
      setState((s) => {
        return {
          ...s,
          selectedComponentPath: null,
          selectedComponent: null,
        };
      });
    }
  };

  return (
    <CanvasContainer>
      <EmailPreview>
        <EmailContent>
          <DropArea
            data={{
              path: "children",
            }}
            onDrop={(dropArea, item) => {
              handleDrop(dropArea, [{ ...item }, ...layout.children]);
            }}
            accept={["main", "header", "footer"]}
          />
          {layout.children.map((child, i) => {
            const path = `children.${i}`;
            return (
              <Fragment key={i}>
                <CanvasComponent
                  onClickOutside={handleDeselectComponent}
                  onClick={handleSelectComponent}
                  onDelete={(path, data) => {
                    const splitedPath = path.split(".");
                    const index = Number(splitedPath[splitedPath.length - 1]);
                    handleDrop(
                      {
                        path: "children",
                      },
                      removeAt(layout.children, index)
                    );
                  }}
                  parent={layout}
                  key={child.name}
                  path={path}
                  onDrop={handleDrop}
                  data={child}
                  {...child.props}
                />
                <DropArea
                  data={{
                    path: `children`,
                  }}
                  onDrop={(dropArea, item) => {
                    handleDrop(
                      dropArea,
                      insertAt(layout.children, i + 1, item)
                    );
                  }}
                  accept={["main", "header", "footer"]}
                />
              </Fragment>
            );
          })}

          {/*<UberLogo>Uber</UberLogo>*/}

          {/*<ImageContainer>*/}
          {/*  <ImagePlaceholder>*/}
          {/*    <img*/}
          {/*      src="/person-with-backpack-illustration.jpg"*/}
          {/*      alt="Newsletter illustration"*/}
          {/*      style={{ width: "100%", height: "100%", objectFit: "contain" }}*/}
          {/*    />*/}
          {/*  </ImagePlaceholder>*/}
          {/*</ImageContainer>*/}

          {/*<ContentSection>*/}
          {/*  <Greeting>*/}
          {/*    Hey <VariableName>first_name</VariableName>*/}
          {/*  </Greeting>*/}

          {/*  <BodyText>*/}
          {/*    Your well-being is our top priority. To ensure a safe and secure*/}
          {/*    journey, we've implemented additional safety reminders within the*/}
          {/*    app.*/}
          {/*  </BodyText>*/}

          {/*  <DownloadButton>Download PDF</DownloadButton>*/}

          {/*  <BodyText>*/}
          {/*    These reminders are designed to keep you informed and empowered*/}
          {/*    throughout every step of your experience. Whether you're a driver*/}
          {/*    or a passenger, our commitment to your safety remains unwavering.*/}
          {/*  </BodyText>*/}
          {/*</ContentSection>*/}
        </EmailContent>
      </EmailPreview>

      {/*<AddButton>*/}
      {/*  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">*/}
      {/*    <path*/}
      {/*      d="M10 4v12M4 10h12"*/}
      {/*      stroke="currentColor"*/}
      {/*      strokeWidth="2"*/}
      {/*      strokeLinecap="round"*/}
      {/*    />*/}
      {/*  </svg>*/}
      {/*</AddButton>*/}
    </CanvasContainer>
  );
}
