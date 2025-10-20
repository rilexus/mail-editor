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

export default function Header() {
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
        {/*<TitleSection>*/}
        {/*  <DraftLabel>Draft</DraftLabel>*/}
        {/*  <span>/</span>*/}
        {/*  <Title>Uber Newsletter</Title>*/}
        {/*</TitleSection>*/}
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
