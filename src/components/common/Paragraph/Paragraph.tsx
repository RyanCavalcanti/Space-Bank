import { ParagraphStyles } from "./Paragraph.styles";

export interface ParagraphProps {
  children: React.ReactNode;
  marginTop?: string;
  marginBottom?: string;
  fontWeight?: number;
  color?: string;
  style?: React.CSSProperties;
}

function Paragraph({ children, marginTop, marginBottom, fontWeight, color, style }: ParagraphProps) {
  return(
    <ParagraphStyles fontWeight={fontWeight} marginTop={marginTop} marginBottom={marginBottom} color={color} style={style}>{ children }</ParagraphStyles>
  )
}

export default Paragraph;
