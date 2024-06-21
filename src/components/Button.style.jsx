import styled, { css } from "styled-components";

/*--------------------------------------------------------------*/

// Estilo geral base de botões, utilizado em todo o site

const baseButtonStyles = css`
	border-style: none;
	font-weight: bold;
	border-radius: 8px;
	background-color: #5e7321;
	color: #e4f0c1;
	transition: background-color, box-shadow 0.4s ease;
	&:hover {
		background-color: #53641d;
		box-shadow: 0 0 4px 2p x #53641d5a;
	}
`;

const Button = styled.button`
	${baseButtonStyles}
	width: ${(props) => props.$width || "100%"};
	height: ${(props) => props.$height || "40px"};
	font-size: ${(props) => props.$fontSize || "1.5rem"};
	display: ${(props) => props.$display || "inline-block"};
	align-items: ${(props) => props.$alignItems || "center"};
	justify-content: ${(props) => props.$justifyContent || "center"};
	gap: ${(props) => props.$gap || "0"};
	margin: ${(props) => props.$margin || "0"};
`;

export const ButtonAbsolute = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	display: flex;
	gap: 8px;
	bottom: ${(props) => props.$bottom || "0"};
	right: ${(props) => props.$right || "0"};
`;

export default Button;
