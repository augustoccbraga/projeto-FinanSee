import styled from "styled-components";

/*--------------------------------------------------------------*/

// Estilo geral dos componentes da pagina Home (LandingPage)

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	background-color: #4b5842;
	grid-column-start: 1;
	grid-column-end: -1;
	nav {
		padding: 16px;
		margin: 0px 40px;
		align-self: center;
	}
	ul {
		display: flex;
		list-style: none;
		margin: 0px;
		gap: 16px;
	}

	a {
		font-size: 1.25rem;
		font-weight: bold;
		color: #f5fff6;
		text-decoration: none;
		padding: 10px;
	}
	a:hover {
		background-color: #709775;
	}
`;

// Primeira seção da pagina

export const HomePage = styled.section`
	display: grid;
	grid-template-columns: 0.25fr 2fr 1fr 0.25fr;
	background-color: #4b5842;
	width: auto;
	height: 800px;
	z-index: 100;
`;

export const Sobre = styled.div`
	grid-column-start: 2;
	grid-column-end: 3;
	width: auto;
	height: auto;
	align-self: end;
	margin-bottom: 300px;
	position: relative;
	h1 {
		font-size: 4rem;
		color: #f5fff6;
		font-weight: bold;
		max-width: 520px;
		span {
			color: #87a330;
			font-weight: bolder;
			margin: 0;
			padding: 0;
		}
	}

	p {
		font-weight: bold;
		font-size: 1.5rem;
		max-width: 500px;
		padding: 40px 0px 0px 60px;
		span {
			color: #87a330;

			margin: 0;
			padding: 0;
		}
	}
	&:after {
		content: "";
		width: 160%;
		height: 50%;
		background-color: #f5fff6;
		position: absolute;
		bottom: -300px;
		border-radius: 0px 8px 0px 0px;
		z-index: 200;
	}
`;

export const Img = styled.div`
	grid-column-start: 3;
	grid-column-end: 4;
	align-self: end;
	background: url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: -200px;
	width: 110%;
	height: 80%;
	z-index: 300;
	position: relative;
	bottom: -40px;
	&:before {
		content: "";
		width: 80px;
		height: 60%;
		left: -80px;
		top: 20%;
		background-color: #f5fff6;
		border-radius: 16px 0px 0px 0px;
		position: absolute;
		z-index: 200;
	}
`;

// Segunda seção da pagina

export const WelcomeSection = styled.section`
	display: grid;
	grid-template-columns: 0.25fr 2fr 1fr 0.25fr;
	background: linear-gradient(
		180deg,
		rgba(245, 255, 246, 1) 80%,
		rgba(75, 88, 66, 1) 100%
	);
	width: auto;
	height: 800px;
	z-index: 100;
`;

export const Welcome = styled.div`
	display: flex;
	flex-direction: column;
	grid-column-start: 2;
	p {
		color: #4b5842;
		margin-left: 60px;
		margin-top: 40px;

		font-weight: bold;
	}
	h1 {
		font-size: 4rem;
		font-weight: bolder;
		margin-top: 20px;
		margin-left: 60px;
	}
	h2 {
		font-size: 3rem;
		margin-left: 60px;
	}
	h1,
	h2 {
		grid-column-start: 2;
		color: #87a330;
	}
	span {
		font-size: 4rem;
		color: #a1b661;
	}
`;

// Footer com contato

export const Footer = styled.footer`
	display: ${(props) => props.$display || "grid"};
	grid-template-columns: ${(props) =>
		props.$gridTemplateColumns || "1fr 2fr 1fr"};
	background-color: ${(props) => props.$backgroundColor || "#4b5842"};
	grid-column-start: ${(props) => props.$gridColumnStart || "1"};
	grid-column-end: ${(props) => props.$gridColumnEnd || "-1"};
	p {
		grid-area: 2 /2;
		text-align: center;
	}
`;

export const Contato = styled.div`
	grid-area: 1/2;
	margin: 40px;
	p {
		text-align: start;
		margin-left: 8px;
	}
`;
