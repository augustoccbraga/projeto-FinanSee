import styled from "styled-components";

/*--------------------------------------------------------------*/

// Estilo geral dos componentes da pagina Gerenciador

// Container geral de todos os itens

export const ContainerGerenciador = styled.section`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(135deg, #011627 25%, transparent 25%) -72px 0/
			144px 144px,
		linear-gradient(225deg, rgba(1, 22, 39, 0.5) 25%, transparent 25%) -72px 0/
			144px 144px,
		linear-gradient(315deg, #011627 25%, transparent 25%) 0 0/ 144px 144px,
		linear-gradient(45deg, rgba(1, 22, 39, 0.5) 25%, #042038 25%) 0 0/ 144px 144px;
	background-color: #042038;
	display: grid;
	grid-template-columns: 1fr 4fr;
	grid-template-rows: 0.5fr 6fr;
`;

// Parte lateral esquerda de navegação

export const NavContainer = styled.nav`
	grid-area: 1;
	grid-row-start: 1;
	grid-row-end: 7;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #0e0e0e;
	padding: 40px;
	/* -webkit-box-shadow: inset -1px 0 0 0 rgba(203, 207, 212, 0.27);
	-moz-box-shadow: inset -1px 0 0 0 rgba(203, 207, 212, 0.27);
	box-shadow: inset -1px 0 0 0 rgba(203, 207, 212, 0.27); */
`;

export const NavGerenciador = styled.nav`
	display: flex;
	flex-direction: column;
	row-gap: 40px;
	a {
		display: flex;
		gap: 20px;
		font-size: 1.5rem;
		text-decoration: none;
		align-items: center;
		color: #cbcfd3;

		h3 {
			transition: transform 0.25s ease;
			&:hover {
				transform: translateX(8px);
				color: #cbcfd3d5;
			}
		}
	}
`;

// Barra superior do Gerenciador, contendo o botão de adicionar elementos e barra de consulta

export const BarGerenciador = styled.div`
	grid-area: 1/2;
	grid-row-start: 1;
	grid-row-end: 1;
	width: 100%;
	height: 100%;
	background-color: #141414;
	align-items: center;
	-webkit-box-shadow: inset 0 -1px 0 0 rgba(203, 207, 212, 0.1);
	-moz-box-shadow: inset 0 -1px 0 0 rgba(203, 207, 212, 0.1);
	box-shadow: inset 0 -1px 0 0 rgba(203, 207, 212, 0.1);
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 40px;
`;

export const Overlay = styled.div`
	position: fixed; /* Cobrir toda a tela */
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 2; /* Ajuste o z-index para ficar abaixo do formulário */
`;

export const FormAddEdit = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed; /* Ajuste para manter o formulário centralizado */
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%); /* Centraliza o formulário */
	width: 40vw;
	height: 45vh;
	margin: 20px;
	border-radius: 8px;
	background-color: #222222;
	border: 4px solid #383838;
	padding: 40px 60px;
	color: #cbcfd3;
	font-weight: bold;
	z-index: 3; /* Certifique-se de que o formulário está acima do overlay */

	h2 {
		margin-bottom: 60px;
		margin-left: 20px;
	}

	label {
		margin-bottom: 8px;
	}

	input {
		height: 40px;
		width: 98%;
		border-radius: 4px;
		border-style: none;
		margin-bottom: 24px;
		padding-left: 8px;

		&:focus {
			outline: 1px solid #999999;
			outline-offset: 4px;
		}
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 36px;
		height: 36px;
		position: absolute;
		background-color: #383838;
		top: -12.5px;
		right: -12.5px;
		z-index: 2;
		border-radius: 100%;
		transition: background-color 0.3s ease;
		&:hover {
			background-color: #b33939;
		}
	}
`;

export const BarraPesquisa = styled.form`
	display: flex;
	background-color: #383838;
	padding: 8px;
	border-radius: 8px;
	width: 30vw;
	input {
		width: 100%;
		border-radius: 8px 0px 0px 8px;
		border-style: none;
		padding-left: 8px;
		&:focus {
			outline: 1px solid #999999;
			outline-offset: 2px;
		}
	}
	select {
		width: 60%;
		border-radius: 0px 8px 8px 0px;
		border-style: none;
		padding-left: 8px;
		margin-right: 8px;
		text-align: center;
		box-shadow: -2px 0px 0px 0px #383838;
		&:focus {
			outline: 1px solid #999999;
			outline-offset: 2px;
		}
	}
`;

// Parte onde fica a tabela e as vendas

export const TelaGerenciador = styled.div`
	grid-row-start: 2;
	grid-row-end: 7;
	width: 100%;
	height: 100%;
	background-color: #141414;
`;

export const Tabela = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	padding: 10px 30px;
	row-gap: 0;
`;

export const Indices = styled.div`
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
	padding: 8px;
	height: 40px;
	max-height: 40px;
	text-align: center;
	font-weight: bold;
	font-size: 1.25rem;
`;

export const AreaVendas = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
`;

export const Elemento = styled.div`
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;

	margin: 8px 0px;
	padding: 16px;
	border-radius: 8px;
	background-color: #1d1d1d;
	color: #cbcfd3;
	text-align: center;
	position: relative;
	&:hover {
		background-color: #545454;
	}
`;
