import {
  PropertiesPanelContainer,
  PropertySection,
  PropertyHeader,
  PropertyTitle,
  PropertyCount,
  PropertyContent,
  ImagePreview,
  ImageName,
  LayerControls,
  OpacityInput,
  BlendModeSelect,
  SliderContainer,
  SliderLabel,
  Slider,
  SliderValue,
  PaddingsHeader,
  PaddingsToggle,
  PaddingsGrid,
  PaddingInput,
  PaddingLabel,
  DeleteIcon,
  VisibilityIcon,
} from "./styles";
import { useApplicationState } from "../providers/StateProvider";
import { Select } from "../ui/select";
import { setItemAttributesCommand } from "../commands";

export default function PropertiesPanel({
  paddingsEnabled,
  setPaddingsEnabled,
  paddings,
  setPaddings,
  cornerRadius,
  setCornerRadius,
  opacity,
  setOpacity,
  blendMode,
  setBlendMode,
}) {
  const selectedComponent = useApplicationState(
    ({ selectedComponent }) => selectedComponent
  );
  const run = useApplicationState(({ run }) => run);

  const label = selectedComponent?.label || "";
  const { type } = selectedComponent?.attributes || {};

  console.log(selectedComponent);

  const handleAttributeChange = (key, value) => {
    run(
      setItemAttributesCommand(selectedComponent, {
        ...selectedComponent.attributes,
        [key]: value,
      })
    );
  };

  return (
    selectedComponent && (
      <PropertiesPanelContainer>
        <PropertySection>
          <PropertyHeader>
            <PropertyTitle
              style={{
                fontSize: "1.3rem",
              }}
            >
              {label}
            </PropertyTitle>
          </PropertyHeader>
        </PropertySection>

        {type && (
          <PropertySection>
            <PropertyHeader>
              <PropertyTitle>Type</PropertyTitle>
            </PropertyHeader>
            <PropertyContent>
              <Select
                value={type}
                onChange={(e) => handleAttributeChange("type", e.target.value)}
              >
                <option value={"horizontal"}>Horizontal</option>
                <option value={"inline"}>Inline</option>
                <option value={"text"}>Text</option>
                <option value={"recordField"}>Record Field</option>
              </Select>
            </PropertyContent>
          </PropertySection>
        )}

        {/*<PropertySection>*/}
        {/*  <PropertyHeader>*/}
        {/*    <PropertyTitle>Picture</PropertyTitle>*/}
        {/*    <DeleteIcon>*/}
        {/*      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">*/}
        {/*        <path*/}
        {/*          d="M2 4h12M6 4V2h4v2M3 4v10h10V4"*/}
        {/*          stroke="currentColor"*/}
        {/*          strokeWidth="1.5"*/}
        {/*          strokeLinecap="round"*/}
        {/*        />*/}
        {/*      </svg>*/}
        {/*    </DeleteIcon>*/}
        {/*  </PropertyHeader>*/}
        {/*  <PropertyContent>*/}
        {/*    <ImagePreview>*/}
        {/*      <img*/}
        {/*        src="/person-with-backpack-illustration.jpg"*/}
        {/*        alt="Preview"*/}
        {/*        style={{ width: "100%", height: "100%", objectFit: "contain" }}*/}
        {/*      />*/}
        {/*    </ImagePreview>*/}
        {/*    <ImageName>uber_banner.png</ImageName>*/}
        {/*  </PropertyContent>*/}
        {/*</PropertySection>*/}

        <PropertySection>
          <PropertyHeader>
            <PropertyTitle>Layer</PropertyTitle>
            <VisibilityIcon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M1 8s2-5 7-5 7 5 7 5-2 5-7 5-7-5-7-5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </VisibilityIcon>
          </PropertyHeader>
          <PropertyContent>
            <LayerControls>
              <OpacityInput
                type="number"
                value={opacity}
                onChange={(e) => setOpacity(e.target.value)}
              />
              <span>%</span>
              <Select
                value={blendMode}
                onChange={(e) => setBlendMode(e.target.value)}
              >
                <option>Normal</option>
                <option>Multiply</option>
                <option>Screen</option>
                <option>Overlay</option>
              </Select>
            </LayerControls>
          </PropertyContent>
        </PropertySection>

        <PropertySection>
          <PropertyHeader>
            <PropertyTitle>Corner Radius</PropertyTitle>
          </PropertyHeader>
          <PropertyContent>
            <SliderContainer>
              <SliderLabel>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "#6366f1",
                    borderRadius: "2px",
                  }}
                />
              </SliderLabel>
              <Slider
                type="range"
                min="0"
                max="50"
                value={cornerRadius}
                onChange={(e) => setCornerRadius(e.target.value)}
              />
              <SliderValue>
                <input
                  type="number"
                  value={cornerRadius}
                  onChange={(e) => setCornerRadius(e.target.value)}
                />
                <span>px</span>
              </SliderValue>
            </SliderContainer>
          </PropertyContent>
        </PropertySection>

        <PropertySection>
          <PaddingsHeader>
            <PropertyTitle>Paddings</PropertyTitle>
            <PaddingsToggle
              $active={paddingsEnabled}
              onClick={() => setPaddingsEnabled(!paddingsEnabled)}
            >
              <div />
            </PaddingsToggle>
          </PaddingsHeader>
          <PropertyContent>
            <PaddingsGrid>
              <PaddingInput>
                <input
                  type="number"
                  value={paddings.L}
                  onChange={(e) =>
                    setPaddings({ ...paddings, L: e.target.value })
                  }
                />
                <PaddingLabel>L</PaddingLabel>
              </PaddingInput>
              <PaddingInput>
                <input
                  type="number"
                  value={paddings.T}
                  onChange={(e) =>
                    setPaddings({ ...paddings, T: e.target.value })
                  }
                />
                <PaddingLabel>T</PaddingLabel>
              </PaddingInput>
              <PaddingInput>
                <input
                  type="number"
                  value={paddings.R}
                  onChange={(e) =>
                    setPaddings({ ...paddings, R: e.target.value })
                  }
                />
                <PaddingLabel>R</PaddingLabel>
              </PaddingInput>
              <PaddingInput>
                <input
                  type="number"
                  value={paddings.B}
                  onChange={(e) =>
                    setPaddings({ ...paddings, B: e.target.value })
                  }
                />
                <PaddingLabel>B</PaddingLabel>
              </PaddingInput>
            </PaddingsGrid>
          </PropertyContent>
        </PropertySection>
      </PropertiesPanelContainer>
    )
  );
}
