import React from 'react';
import { StyledTitle } from './Title.styles';


export interface TitleProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  children: React.ReactNode;
  fontWeight?: number;
  style?: React.CSSProperties;
}

const Title: React.FC<TitleProps> = ({ as: Component = 'h1', color, children, fontWeight, style }) => {
  return <StyledTitle as={Component} color={color} fontWeight={fontWeight} style={style}>{children}</StyledTitle>;
};

export default Title;
