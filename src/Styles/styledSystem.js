// Styled-system helpers for media queries and shared tokens

export const breakpoints = {
  tablet: 640,
  laptop: 1024,
  desktop: 1440
};

// Usage: ${mq.laptop} { ... }
export const mq = Object.fromEntries(
  Object.entries(breakpoints).map(([k, v]) => [k, `@media screen and (min-width: ${v}px)`])
);
