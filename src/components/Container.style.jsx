import styled from "styled-components";

/*--------------------------------------------------------------*/

// Estilo de alguns containers presentes na tela Login

export const ContainerGeral = styled.div`
	display: grid;
	grid-template-columns: 1.5fr 1fr;
`;

const ContainerLoginStyle = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	background-color: #042038;
	width: 40vw;
	height: 100vh;
	grid-area: 1 / 1;
	align-items: center;
	justify-content: space-evenly;
	gap: 60px;
	box-shadow: 20px 0px 10px 1px rgba(0, 0, 0, 0.25);
	transform: ${(props) => props.transform};
	transition: transform 0.3s ease;
`;

export const ContainerLogin = (props) => {
	return <ContainerLoginStyle {...props}></ContainerLoginStyle>;
};

export const ContainerForm = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	height: 40vh;
	border-radius: 16px;
	padding: 60px 30px;
	gap: 64px;
	background-color: #011627;
	h1 {
		text-align: center;
		color: #e4f0c1;
	}
`;
