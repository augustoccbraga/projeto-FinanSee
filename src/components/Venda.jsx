import React, { useReducer } from "react";
import { Elemento } from "./Gerenciador.style";
import Button, { ButtonAbsolute } from "./Button.style";
import Delete from "../assets/ApagarVenda.svg?react";
import Edit from "../assets/EditarVenda.svg?react";

/*--------------------------------------------------------------*/

// Componente Venda

const Venda = ({ ID, Nome, Produto, Valor, deletarVenda, editarVenda }) => {
	/*--------------------------------------------------------------*/

	// Função para transformar a primeira letra de cada palavra em maíusculo

	function Capitalize(str) {
		return str.replace(/\b\w/g, (char) => char.toUpperCase());
	}

	/*--------------------------------------------------------------*/

	// Função para transformar o valor inserido em Real (BRL)

	function ValorEmReal(value) {
		value = Number(value);

		return value.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});
	}

	/*--------------------------------------------------------------*/

	// Acionamento das funções

	Nome = Capitalize(Nome);
	Produto = Capitalize(Produto);
	Valor = ValorEmReal(Valor);

	/*--------------------------------------------------------------*/

	return (
		<Elemento>
			<p>{ID}</p>
			<p>{Nome}</p>
			<p>{Produto}</p>
			<p>{Valor}</p>
			<ButtonAbsolute $right="1%" $bottom="20%">
				<Button
					$width="30px"
					$height="30px"
					$display="flex"
					onClick={() => deletarVenda(ID)}
				>
					<Delete></Delete>
				</Button>
				<Button
					$width="30px"
					$height="30px"
					$display="flex"
					onClick={() => editarVenda(ID)}
				>
					<Edit></Edit>
				</Button>
			</ButtonAbsolute>
		</Elemento>
	);
};

export default Venda;
