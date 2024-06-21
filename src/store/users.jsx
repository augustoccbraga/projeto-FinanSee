import { createSlice } from "@reduxjs/toolkit";

/*--------------------------------------------------------------*/

// Declarando o estado inicial do slice user

const initialState = {
	usuario: "",
	senha: "",
	funcao: "",
};

/*--------------------------------------------------------------*/

// Declarando o slice user

const slice = createSlice({
	name: "user",
	initialState,
	reducers: {
		Registrar(state, action) {
			// Coleta usuario, senha e funcao

			state.usuario = action.payload.usuario;
			state.senha = action.payload.senha;
			state.funcao = action.payload.funcao;

			// Guarda usuario e senha no localStorage

			window.localStorage.setItem("usuario", state.usuario);
			window.localStorage.setItem("senha", state.senha);

			// Seta a função para bem-sucedida

			action.payload.funcao = "Conta registrada com sucesso";
		},
		Logar(state, action) {
			// Coleta o usuario e senha do localStorage
			const usuario = window.localStorage.getItem("usuario");
			const senha = window.localStorage.getItem("senha");

			// Coleta o usuario e senha inserido pelo usuario

			state.usuario = usuario;
			state.senha = senha;
			state.funcao = action.payload.funcao;

			// Verifica se usuario e senha existem
			if (usuario && senha) {
				if (
					action.payload.usuario === usuario && // Checa se o usuario e senha estão de acordo com o que existe no localStorage
					action.payload.senha === senha
				) {
					action.payload.funcao = "logou"; // Seta a função para que seja passada com MsgErro caso necessário
					// console.log(state.funcao); Para fins de Debug
				} else {
					action.payload.funcao = "Email e/ou senha incorreto(s)"; // Seta a função para que seja passada com MsgErro caso necessário
					// console.log(state.funcao); Para fins de Debug
				}
			} else {
				action.payload.funcao = "Essa conta não existe"; // Seta a função para que seja passada com MsgErro caso necessário
				// console.log(state.funcao); Para fins de Debug
			}
		},
	},
});

export const { Registrar, Logar } = slice.actions;

export default slice.reducer;
