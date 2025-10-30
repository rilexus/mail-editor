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
import {
  selectItemCommand,
  dropItemCommand,
  removeItemCommand,
  deselectItemCommand,
} from "../commands";

export default function Canvas() {
  const { run, children } = useApplicationState(
    ({ layout: { children }, run }) => ({ children, run })
  );

  const handleSelectComponent = (item) => {
    run(selectItemCommand(item));
  };

  const handleDeselectComponent = (e) => {
    run(deselectItemCommand());
  };

  return (
    <CanvasContainer>
      <EmailPreview>
        <EmailContent onClick={handleDeselectComponent}>
          <DropArea
            data={{
              path: "children.0",
            }}
            onDrop={(dropArea, item) => run(dropItemCommand(dropArea, item))}
            accept={["main", "header", "footer"]}
          />
          {children.map((child, i) => {
            const path = `children.${i}`;
            // initial path, first layer in the canvas
            const item = { ...child, path, parentPath: "" };

            return (
              <Fragment key={i}>
                <CanvasComponent
                  // onClickOutside={(path) => {
                  //   handleDeselectComponent(path)
                  // }}
                  onClick={handleSelectComponent}
                  onDelete={(item) => {
                    run(removeItemCommand(item));
                  }}
                  path={path}
                  onDrop={(dropArea, item) =>
                    run(dropItemCommand(dropArea, item))
                  }
                  item={item}
                  {...child.props}
                />
                <DropArea
                  data={{
                    path: `children.${i + 1}`,
                  }}
                  onDrop={(dropArea, item) => {
                    run(dropItemCommand(dropArea, item));
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
