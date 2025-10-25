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
import { CanvasComponent } from "./CanvasComponent";
import { DropArea } from "./DropArea";
import { Fragment } from "react";
import { useApplicationState } from "../providers/StateProvider";

import { dropItemCommand } from "../commands";

export default function Canvas() {
  const [applicationState, { selectComponent, setLayout, setState, run }] =
    useApplicationState();

  const {
    layout: { children },
  } = applicationState;

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
              path: "children.0",
            }}
            onDrop={(dropArea, item) =>
              run(dropItemCommand(dropArea, item, children))
            }
            accept={["main", "header", "footer"]}
          />
          {children.map((child, i) => {
            const path = `children.${i}`;
            const childWithPath = { ...child, path };

            return (
              <Fragment key={i}>
                <CanvasComponent
                  onClickOutside={handleDeselectComponent}
                  onClick={handleSelectComponent}
                  onDelete={(path, item) => {
                    // const pathArray = item.path.split(".");
                    // index of clicked component in children array
                    // const index = Number(
                    //   pathArray.pop(/* remove the last element add mutates the pathArray */)
                    // );
                    // get the array the clicked component is in
                    // const children = get(
                    //   data,
                    //   pathArray /* pathArray is without the index */
                    // );
                    // handleDrop(
                    //   {
                    //     path: pathArray.join("."),
                    //   },
                    //   // removes the components from the array it is in
                    //   removeAt(children, index)
                    // );
                  }}
                  path={path}
                  onDrop={(dropArea, item) =>
                    run(dropItemCommand(dropArea, item, children))
                  }
                  data={childWithPath}
                  {...child.props}
                />
                <DropArea
                  data={{
                    path: `children.${i + 1}`,
                  }}
                  onDrop={(dropArea, item) => {
                    run(dropItemCommand(dropArea, item, children));
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
