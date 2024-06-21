import React from "react";
import { useDispatch } from "react-redux";
import { Logar, Registrar } from "../store/users";
import { useNavigate } from "react-router-dom";
import { Forms } from "./Forms.style";
import {
	ContainerForm,
	ContainerGeral,
	ContainerLogin,
} from "./Container.style";
import Button from "./Button.style";
import Logo from "../assets/LogoFinanseeNome.svg?react";
import { MsgErro } from "./Erro.style";

/*--------------------------------------------------------------*/

// Componente Login

const Login = () => {
	const navigate = useNavigate(); // Declaração da const useNavigate do React-router para realizar o logout (bem primitivo)

	// Declaração de constantes React

	const [texto, setTexto] = React.useState(
		"Clique aqui caso não tenha uma conta"
	);
	const [funcao, setFuncao] = React.useState("logar");
	const [temConta, setTemConta] = React.useState(false);
	const [transform, setTransform] = React.useState("translate(0%, 0px)");
	const [usuario, setUsuario] = React.useState("");
	const [senha, setSenha] = React.useState("");
	const [situacao, setSituacao] = React.useState("");

	const dispatch = useDispatch(); // Declaração da função useDispatch do Redux

	/*--------------------------------------------------------------*/

	// Função para verificar se o usuario vai logar ou registrar

	function logarRegistrar() {
		if (temConta) {
			// Verifica se o usuario temConta e adapta o site de acordo com isso
			setTexto("Clique aqui caso não tenha uma conta");
			setFuncao("logar");
			setTransform("translate(0vw, 0px)");
			setTemConta(false);
		} else {
			setTexto("Clique aqui caso já tenha uma conta");
			setFuncao("registrar");
			setTransform("translate(60vw, 0px)");
			setTemConta(true);
		}
	}

	/*--------------------------------------------------------------*/

	// Função para lidar com o Submit do form de login (logar ou registrar)

	function handleSubmit(event) {
		event.preventDefault(); // Evita o recarregamento da página ao submeter o formulário
		switch (funcao) {
			case "logar": // Verifica se o usuario vai logar ou
				const status_login = dispatch(Logar({ usuario, senha, funcao })).payload
					.funcao; // Dispatch para o reducer Logar
				if (status_login === "logou") {
					navigate("/home"); // Se tiver login ele é redirecionado para a página Home (bem primitivo)
				} else {
					return setSituacao(status_login);
				}
				return console.log(situacao); // Retorna a situação do login no console
			case "registrar":
				const status_register = dispatch(Registrar({ usuario, senha, funcao }))
					.payload.funcao; // Dispatch para o reducer Registrar
				return setSituacao(status_register); // Retorna a situação do registro no console
		}
	}

	/*--------------------------------------------------------------*/

	return (
		<ContainerGeral>
			<ContainerLogin transform={transform}>
				<Logo />
				<ContainerForm>
					<h1>{funcao === "logar" ? "Fazer Login" : "Cadastrar-se"}</h1>
					<Forms onSubmit={handleSubmit}>
						<label htmlFor="usuario">E-mail</label>
						<input
							type="email"
							id="usuario"
							value={usuario}
							onChange={({ target }) => setUsuario(target.value)}
							required
						/>
						<label htmlFor="senha">Senha</label>
						<input
							type="password"
							id="senha"
							value={senha}
							onChange={({ target }) => setSenha(target.value)}
							autoComplete="on"
							required
						/>
						<MsgErro
							value={situacao}
							onChange={({ target }) => setSituacao(target.value)}
						>
							{situacao}
						</MsgErro>
						<Button>{funcao === "logar" ? "Entrar" : "Registrar"}</Button>
					</Forms>
				</ContainerForm>
				<Button
					onClick={logarRegistrar}
					$width="320px"
					$height="60px"
					$fontSize="1rem"
				>
					{temConta === null ? "Clique aqui caso não tenha uma conta" : texto}
				</Button>
				<p>@ 2024 Alguns Direitos Reservados.</p>
			</ContainerLogin>
		</ContainerGeral>
	);
};

export default Login;
