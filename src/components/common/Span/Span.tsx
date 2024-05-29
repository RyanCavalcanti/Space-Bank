import { SpanStyles } from "./Span.styles";

interface SpanProps {
  children: React.ReactNode;
}

function Span({ children }: SpanProps) {
  return(
    <SpanStyles>
      { children }
    </SpanStyles>
  )
}

export default Span;
