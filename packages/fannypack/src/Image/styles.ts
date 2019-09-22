import { css, cssClass } from '../styled';
import { theme } from '../utils';

export const Image = styleProps => cssClass`
  max-width: 100%;

  ${styleProps.isFixed &&
    css`
      max-width: unset;

      ${theme(`${styleProps.themeKey}.fixed`)(styleProps)};
    `}

  ${styleProps.fit === 'contain' &&
    css`
      object-fit: contain;

      ${styleProps.fitPosition &&
        css`
          object-position: ${styleProps.fitPosition};
        `};

      ${theme(`${styleProps.themeKey}.contain`)(styleProps)};
    `}

  ${styleProps.fit === 'cover' &&
    css`
      object-fit: cover;

      ${styleProps.fitPosition &&
        css`
          object-position: ${styleProps.fitPosition};
        `};

      ${theme(`${styleProps.themeKey}.cover`)(styleProps)};
    `}

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;