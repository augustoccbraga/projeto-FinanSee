import styled from "styled-components";

/*--------------------------------------------------------------*/

// Estilo geral para o form do login

export const Forms = styled.form`
	display: flex;
	flex-direction: column;
	color: #f5fff6;
	label {
		font-weight: bold;
		font-size: 1.25rem;
		text-align: start;
		margin-bottom: 16px;
	}
	input {
		border-style: none;
		border-radius: 8px;
		margin-bottom: 1.5rem;
		padding-left: 16px;
		width: 100%;
		height: 48px;
	}
`;
