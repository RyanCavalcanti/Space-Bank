import styled from "styled-components";
import theme from "../../styles/Theme";

export const AnchorBase = styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  color: ${theme.colors.Black};
  font-weight: 500;

  @media(max-width: 1038px){
    font-size: 0.9rem;
  }
`;

export const NavBarAnchor = styled(AnchorBase)`
  &:hover {
    color: ${theme.colors.Red};
  }
`;

interface AnchorProps {
  href: string;
  children: string;
  variant?: 'NavBar';
}
function Anchor({ href, children, variant = 'NavBar' }: AnchorProps) {
  let AnchorComponent;
  switch (variant) {
    case 'NavBar':
      AnchorComponent = NavBarAnchor;
      break;
    default:
      AnchorComponent = NavBarAnchor;
  }

  return(
    <AnchorComponent href={href}>{ children }</AnchorComponent>
  );
}

export default Anchor;
