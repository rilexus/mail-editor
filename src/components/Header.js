import {
  HeaderContainer,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  BackButton,
  TitleSection,
  DraftLabel,
  Title,
  ViewToggle,
  ViewButton,
  ActionButton,
  SaveButton,
  DesktopIcon,
  MobileIcon,
} from "./styles";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "../ui/dropdown";
import { useEffect, useRef, useState } from "react";

export default function Header({
  templates,
  currentTemplateId,
  onTemplateChange,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentTemplate = templates.find((t) => t.id === currentTemplateId);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <BackButton>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8l4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </BackButton>
        <TitleSection>
          <DraftLabel>Draft</DraftLabel>
          <span>/</span>
          <Dropdown ref={dropdownRef}>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {currentTemplate?.name || "Select Template"}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M3 5l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </DropdownButton>
            {isDropdownOpen && (
              <DropdownMenu>
                {templates.map((template) => (
                  <DropdownItem
                    key={template.id}
                    active={template.id === currentTemplateId}
                    onClick={() => {
                      onTemplateChange(template.id);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {template.name}
                    {template.id === currentTemplateId && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M13 4L6 11 3 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </Dropdown>
        </TitleSection>
      </HeaderLeft>

      <HeaderCenter>
        {/*<ViewToggle>*/}
        {/*  <ViewButton active>*/}
        {/*    <DesktopIcon />*/}
        {/*    Desktop*/}
        {/*  </ViewButton>*/}
        {/*  <ViewButton>*/}
        {/*    <MobileIcon />*/}
        {/*    Mobile*/}
        {/*  </ViewButton>*/}
        {/*</ViewToggle>*/}
      </HeaderCenter>

      <HeaderRight>
        <ActionButton>Send Test Email</ActionButton>
        <SaveButton>Save Template</SaveButton>
      </HeaderRight>
    </HeaderContainer>
  );
}
