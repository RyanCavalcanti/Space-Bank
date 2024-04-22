import styled from "styled-components";
import theme from "../../../styles/Theme";

interface SpanProps {
  children: React.ReactNode;
}

const SpanStyles = styled.span`
  color: ${theme.colors.Red};
`;

function Span({ children }: SpanProps) {
  return(
    <SpanStyles>
      { children }
    </SpanStyles>
  )
}

export default Span;
