import styled from 'styled-components';
import { TitleProps } from './Title';

export const StyledTitle = styled.h1<TitleProps>`
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
          font-size: 1.6rem;
        }

        @media(max-width: 480px) {
          font-size: 1.1rem;
        }
      `;
    case 'h4': 
      return `
        font-size: 1.4rem;
      `;
    case 'h5':
      return `
        font-size: 1.2rem;
        margin: 0;
      `;
    case 'h6': 
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
