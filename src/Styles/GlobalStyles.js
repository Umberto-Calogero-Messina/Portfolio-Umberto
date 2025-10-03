import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* CSS Variables preserved from src/Styles/colors.css */
  :root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --background: #ffffff;
  --surface: #f9fafb;
  --border: #e5e7eb;
  --shadow: rgba(0, 0, 0, 0.1);

  /* Background*/
  --color-bg-dark: #0f172a;
  --color-card-grey: #000000;
  --color-bg-darkblue:#09101A;
  --color-accent: #55e6a5;
  --color-text-dark: #333;
  --color-bg-light: #fff;
  --color-text-grey: #a2a2a2;
  --z-preloader: 50;

  /* Typography */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;

  /* Transitions */
  --transition-fast: 0.15s ease-in-out;
  --transition-normal: 0.3s ease-in-out;
  --transition-slow: 0.5s ease-in-out;
}

  /* Normalize subset kept from index.css to avoid visual change */
  *, *::before, *::after { box-sizing: border-box; }
  img { max-width: 100%; display: block; }
  ul { list-style: none; padding-left: 0; margin: 0; }
  a { text-decoration: none; color: inherit; }
  html { line-height: 1.15; -webkit-text-size-adjust: 100%; }
  body { margin: 0; font-family: 'Montserrat', Arial, sans-serif; background: var(--color-bg-light, #fff); }
  input, button, textarea{border:none; 
    outline: none;}

  /* Utility preserved */
  .text-large-bold { font-size: clamp(2.5rem, 10vw, 6.25rem); font-weight: bold; color: var(--color-text-dark, #333); margin: 0; position: relative; }
`;
