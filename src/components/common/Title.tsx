import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  children: React.ReactNode;
  fontWeight?: number;
}

const StyledTitle = styled.h1<TitleProps>`
  ${({ as }) => {
    switch (as) {
      case 'h1':
        return `
          font-size: 5.2rem;
          margin: 0;

          @media(max-width: 1099px) {
            font-size: 3.8rem;
          }

          @media(max-width: 480px) {
            font-size: 2.8rem;
          }
        `;
      case 'h2':
        return `
          font-size: 3.8rem;
          margin: 0;
          line-height: 120%;

          @media(max-width: 1099px) {
            font-size: 3.4rem;
          }

          @media(max-width: 480px) {
            font-size: 2.8rem;
          }
        `;
      case 'h3':
        return `
          font-family: "Inter", sans-serif;
          font-size: 1.5rem;
          margin: 15px 0 0;

          @media(max-width: 1099px) {
            font-weight: 400;
            font-size: 1.6rem;
          }

          @media(max-width: 480px) {
            font-size: 1.1rem;
          }
        `;
      case 'h4': // será alterado futuramente
        return `
          font-size: 1rem;
        `;
      case 'h5':
        return `
          font-size: 1.2rem;
          margin: 0;
          margin-bottom: 20px;
        `;
      case 'h6': // será alterado futuramente
        return `
          font-size: 1rem;
        `;
      default:
        return ``;
    }
  }};
  color: ${({ color }) => color || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`;

const Title: React.FC<TitleProps> = ({ as: Component = 'h1', color, children, fontWeight }) => {
  return <StyledTitle as={Component} color={color} fontWeight={fontWeight}>{children}</StyledTitle>;
};

export default Title;
