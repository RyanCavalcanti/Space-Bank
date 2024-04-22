import styled from "styled-components";

interface ParagraphProps {
  children: React.ReactNode;
  marginTop?: string;
  marginBottom?: string;
  fontWeight?: number;
  color?: string;
  style?: React.CSSProperties;
}

const ParagraphStyles = styled.p<ParagraphProps>`
    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    margin: 0;
    margin-top: ${({ marginTop }) => marginTop || '0'};
    margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
    font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
    color: ${({ color }) => color || 'inherit'};
`;

function Paragraph({ children, marginTop, marginBottom, fontWeight, color, style }: ParagraphProps) {
  return(
    <ParagraphStyles fontWeight={fontWeight} marginTop={marginTop} marginBottom={marginBottom} color={color} style={style}>{ children }</ParagraphStyles>
  )
}

export default Paragraph;
