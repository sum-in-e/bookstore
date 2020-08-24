import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing : border-box;
    }
    body {
        font-family: 'Nanum Gothic Coding', monospace;
        font-size: 400;
    }
`;

export default globalStyles;
