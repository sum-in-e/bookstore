// Break Point Size
const size = {
	desktop: '1581px',
	laptop: '1581px',
	tabletL: '1281px',
	tabletM: '1025px',
	tabletS: '769px',
	mobile: '376px',
};

// 위 size로 @media 안에 들어갈 내용 정의
const theme = {
	desktop: `(min-width : ${size.desktop})`,
	laptop: `(max-width : ${size.laptop})`,
	tabletL: `(max-width : ${size.tabletL})`,
	tabletM: `(max-width : ${size.tabletM})`,
	tabletS: `(max-width : ${size.tabletS})`,
	mobile: `(max-width : ${size.mobile})`,
};

export default theme;
