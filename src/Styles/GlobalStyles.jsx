import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
  scroll-behavior: smooth;
  transition: all 0.30s cubic-bezier(0, 0, 0.2, 1);
  font-family: 'Inter', sans-serif;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
a{
  text-decoration: none;
}

#root, #__next {
  isolation: isolate;
}

`;
