import styled from "styled-components";

/*--------------------------------------------------------------*/

// Estilo geral do Toast

// Estilo Notificação para aparecer as Toasts dentro dessa div
export const Notif = styled.div`
	position: fixed;
	bottom: 40px;
	right: 40%;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

/*--------------------------------------------------------------*/

// Estilo do container que compõe o Toast
export const ToastContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #87a330;
	color: #fff;
	padding: 10px 20px;
	border-radius: 4px;
	z-index: 1000;

	p {
		font-size: 1rem;
	}

	div {
		display: flex;
		gap: 20px;
		justify-content: space-between;
		align-items: center;
	}
`;
