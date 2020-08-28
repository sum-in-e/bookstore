import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const globalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing : border-box;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 400;
    }
    html {
        @media ${props => props.theme.laptop} {
            font-size : 15px;
	}
        @media ${props => props.theme.tabletL} {
            font-size : 14px;
	}
    }
`;

export default globalStyles;
