// Break Point Size
const size = {
	desktop: '1581px',
	laptop: '1580px',
	tabletL: '1280px',
	tabletM: '1024px',
	tabletS: '768px',
	mobile: '375px',
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
