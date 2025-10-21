"use client";
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
  const [applicationState, { selectComponent }] = useApplicationState();
  const { selectedComponent } = applicationState;
  const label = selectedComponent?.label;
  const attributes = selectComponent ? selectComponent.attributes : {};

  return (
    <PropertiesPanelContainer>
      <PropertySection>
        <PropertyHeader>
          <PropertyTitle>{label}</PropertyTitle>
          <PropertyCount>21</PropertyCount>
        </PropertyHeader>
      </PropertySection>

      <PropertySection>
        <PropertyHeader>
          <PropertyTitle>Picture</PropertyTitle>
          <DeleteIcon>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 4h12M6 4V2h4v2M3 4v10h10V4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </DeleteIcon>
        </PropertyHeader>
        <PropertyContent>
          <ImagePreview>
            <img
              src="/person-with-backpack-illustration.jpg"
              alt="Preview"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </ImagePreview>
          <ImageName>uber_banner.png</ImageName>
        </PropertyContent>
      </PropertySection>

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
            <BlendModeSelect
              value={blendMode}
              onChange={(e) => setBlendMode(e.target.value)}
            >
              <option>Normal</option>
              <option>Multiply</option>
              <option>Screen</option>
              <option>Overlay</option>
            </BlendModeSelect>
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
            active={paddingsEnabled}
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
  );
}
