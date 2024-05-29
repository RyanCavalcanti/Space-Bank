import styled from "styled-components";
import { ParagraphProps } from "./Paragraph";

export const ParagraphStyles = styled.p<ParagraphProps>`
font-family: "Inter", sans-serif;
font-size: 1.1rem;
margin: 0;
margin-top: ${({ marginTop }) => marginTop || '0'};
margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
color: ${({ color }) => color || 'inherit'};
`;
