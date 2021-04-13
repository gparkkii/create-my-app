import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
    @media (max-width: 360px) {
      ${css(...args)}
    }
  `,
  mini: (...args) => css`
    @media (max-width: 450px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 800px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (max-width: 1280px) {
      ${css(...args)}
    }
  `,
};
