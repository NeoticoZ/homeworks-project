import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --blue: #0d6efd;
    --blue-rgb: 13,110,253;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #d63384;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #198754;
    --teal: #20c997;
    --cyan: #0dcaf0;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --gray-50: #f8f9fa;
    --gray-100: #f1f3f6;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-350: #dae1e3;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #495057;
    --gray-750: #4c4d4d;
    --gray-800: #343a40;
    --gray-900: #212529;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-100);
    overflow-x: hidden;
  }

  body, button, input, select, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: var(--gray-700);

  }

  button {
    border: 0;

    background: none;
    
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
