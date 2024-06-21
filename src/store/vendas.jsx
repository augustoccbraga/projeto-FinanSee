import { createSlice } from "@reduxjs/toolkit";

/*--------------------------------------------------------------*/

// Declarando o estado inicial do slice vendas

const initialState = {
	vendas: [],
};

/*--------------------------------------------------------------*/

// Declarando o slice vendas

const slice = createSlice({
	name: "vendas",
	initialState,
	reducers: {
		adicionarVenda: (state, action) => {
			const novaVenda = { id: state.vendas.length + 1, ...action.payload }; // Adiciona o objeto na const novaVenda passado pela desestruturação do action.payload
			state.vendas.push(novaVenda); // Adiciona o novaVenda no ultimo indice do Array vendas
			state.vendas.sort((a, b) => a.id - b.id); // Sort para organizar em ordem crescente de id
		},
		deletarVenda: (state, action) => {
			state.vendas = state.vendas.filter(
				(venda) => venda.id !== action.payload // Retorna um Array retirando o item filtrado pelo id
			);
		},
		editarVenda: (state, action) => {
			const index = state.vendas.findIndex(
				(venda) => venda.id === action.payload.id // Coleta o index pelo id
			);
			if (index !== -1) {
				state.vendas[index] = action.payload; // Se o index for válido, faz a troca das informações do objeto recebido pelo que já existia
			}
		},
		carregarVendas: (state, action) => {
			state.vendas = action.payload; // Renderiza as vendas na telaGerenciador
		},
	},
});

export const { adicionarVenda, deletarVenda, carregarVendas, editarVenda } =
	slice.actions;

export default slice.reducer;
