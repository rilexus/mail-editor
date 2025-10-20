import styled from "styled-components";

// App Container
export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #e5e7eb;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
  gap: 0;
  overflow: hidden;
`;

export const HelpButton = styled.button`
  position: fixed;
  bottom: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Header Styles
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f9fafb;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
`;

export const DraftLabel = styled.span`
  color: #9ca3af;
`;

export const Title = styled.span`
  color: #1f2937;
  font-weight: 500;
`;

export const ViewToggle = styled.div`
  display: flex;
  align-items: center;
  background: #f3f4f6;
  border-radius: 8px;
  padding: 4px;
`;

export const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${(props) => (props.active ? "white" : "transparent")};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#1f2937" : "#6b7280")};
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: ${(props) =>
    props.active ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none"};

  &:hover {
    color: #1f2937;
  }
`;

export const DesktopIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect
      x="1"
      y="3"
      width="14"
      height="9"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M5 13h6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const MobileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect
      x="4"
      y="1"
      width="8"
      height="14"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 13h2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ActionButton = styled.button`
  padding: 8px 16px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f9fafb;
  }
`;

export const SaveButton = styled.button`
  padding: 8px 20px;
  background: #6366f1;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #4f46e5;
  }
`;

// Sidebar Styles
export const SidebarContainer = styled.aside`
  width: 280px;
  background: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 20px;
`;

export const Tab = styled.button`
  position: relative;
  padding: 16px 0;
  margin-right: 24px;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "600" : "500")};
  color: ${(props) => (props.active ? "#1f2937" : "#6b7280")};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #1f2937;
  }
`;

export const TabUnderline = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #1f2937;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f9fafb;
  }
`;

export const SectionTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
`;

export const CollapseIcon = styled.div`
  display: flex;
  align-items: center;
  color: #6b7280;
  transform: ${(props) =>
    props.$expanded ? "rotate(0deg)" : "rotate(-90deg)"};
  transition: transform 0.2s;
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px 12px;
`;

export const ContentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f3f4f6;
  }
`;

export const ElementType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f3f4f6;
  }
`;

export const ItemIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #1f2937;
`;

export const ItemLabel = styled.span`
  font-size: 14px;
  color: #1f2937;
`;

export const DragHandle = styled.div`
  display: flex;
  align-items: center;
  color: #9ca3af;
  opacity: 0;
  transition: opacity 0.2s;

  ${ContentItem}:hover & {
    opacity: 1;
  }
  ${ElementType}:hover & {
    opacity: 1;
  }
`;

// Canvas Styles
export const CanvasContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  overflow-y: auto;
  background: #e5e7eb;
`;

export const EmailPreview = styled.div`
  width: 100%;
  max-width: 700px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

export const EmailContent = styled.div`
  padding: 40px;
`;

export const UberLogo = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin: 0 0 32px 0;
`;

export const ImageContainer = styled.div`
  margin-bottom: 32px;
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px;
  border: 3px solid #6366f1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
  overflow: hidden;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Greeting = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

export const VariableName = styled.span`
  color: #10b981;
  font-weight: 600;
`;

export const BodyText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #4b5563;
  margin: 0;
`;

export const DownloadButton = styled.button`
  align-self: flex-start;
  padding: 10px 20px;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }
`;

export const AddButton = styled.button`
  margin-top: 24px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    background: #f9fafb;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

// Properties Panel Styles
export const PropertiesPanelContainer = styled.aside`
  width: 300px;
  background: white;
  border-left: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  gap: 24px;
`;

export const PropertySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PropertyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PropertyTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

export const PropertyCount = styled.span`
  font-size: 13px;
  color: #6b7280;
`;

export const PropertyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ImagePreview = styled.div`
  width: 100%;
  height: 120px;
  background: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ImageName = styled.div`
  padding: 8px 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 13px;
  color: #6b7280;
  text-align: center;
`;

export const LayerControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OpacityInput = styled.input`
  width: 60px;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  color: #1f2937;
  text-align: right;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }
`;

export const BlendModeSelect = styled.select`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  color: #1f2937;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SliderLabel = styled.div`
  display: flex;
  align-items: center;
`;

export const Slider = styled.input`
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: #e5e7eb;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #6366f1;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #6366f1;
    cursor: pointer;
    border: none;
  }
`;

export const SliderValue = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  input {
    width: 40px;
    padding: 4px 8px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 13px;
    text-align: right;

    &:focus {
      outline: none;
      border-color: #6366f1;
    }
  }

  span {
    font-size: 13px;
    color: #6b7280;
  }
`;

export const PaddingsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PaddingsToggle = styled.button`
  width: 44px;
  height: 24px;
  background: ${(props) => (props.active ? "#6366f1" : "#d1d5db")};
  border: none;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;

  div {
    position: absolute;
    top: 2px;
    left: ${(props) => (props.active ? "22px" : "2px")};
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: left 0.2s;
  }
`;

export const PaddingsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const PaddingInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  input {
    flex: 1;
    border: none;
    font-size: 14px;
    color: #1f2937;
    background: transparent;

    &:focus {
      outline: none;
    }
  }
`;

export const PaddingLabel = styled.span`
  font-size: 13px;
  color: #9ca3af;
  font-weight: 500;
`;

export const DeleteIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    color: #ef4444;
  }
`;

export const VisibilityIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    color: #1f2937;
  }
`;
