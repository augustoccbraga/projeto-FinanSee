import React from "react";
import {
	Footer,
	Header,
	HomePage,
	Sobre,
	Img,
	WelcomeSection,
	Welcome,
	Contato,
} from "./LandingPage.style";
import Button from "./Button.style";
import Seta from "../assets/SetaConhecer.svg?react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/LogoFinanseeNome.svg?react";

/*--------------------------------------------------------------*/

// Componente Home

const Home = () => {
	const navigate = useNavigate(); // Declaração da const useNavigate do React-router para realizar o logout (bem primitivo)
	let usuario = window.localStorage.getItem("usuario"); // Coleta o usuário no localStorage

	const userFiltro = () => {
		return Array((usuario = usuario.split("@")[0])); // Separa o usuário (email) no '@' e pega tudo antes dele
	};

	userFiltro(); // Aciona a função para filtrar o nome do usuário, para posteriormente botar no 'Olá! Seja bem vindo, usuário'

	/*--------------------------------------------------------------*/

	return (
		<>
			<Header>
				<Logo style={{ margin: "16px", height: "30px" }} />
				<nav>
					<ul>
						<li>
							<a href="">Sobre</a>
						</li>
						<li>
							<a href="">Contato</a>
						</li>
						<li>
							<a href="" onClick={() => navigate("/")}>
								Logout
							</a>
						</li>
					</ul>
				</nav>
			</Header>
			<HomePage>
				<Sobre>
					<h1>
						GERENCIE SUAS <span>VENDAS!</span>
					</h1>
					<p>
						Com o gerenciador de vendas da <span>FinanSee</span> ficou muito
						mais fácil visualizar e administrar as suas vendas.
					</p>
					<Button
						$display="flex"
						$width="240px"
						$height="60px"
						$margin="40px 60px"
						$gap="20px"
					>
						CONHECER<Seta></Seta>
					</Button>
				</Sobre>
				<Img></Img>
			</HomePage>
			<WelcomeSection>
				<Welcome>
					<h1>Olá!</h1>
					<h2>
						Seja bem vindo, <br />
						<span>{usuario}</span>
					</h2>
					<p>Comece agora a gerenciar suas vendas</p>
					<Button
						$display="flex"
						$width="240px"
						$height="60px"
						$margin="40px 60px"
						$gap="20px"
						onClick={() => navigate("/gerenciador")}
					>
						Gerenciar Vendas
					</Button>
				</Welcome>
			</WelcomeSection>
			<Footer>
				<Contato>
					<h3>Contato:</h3>
					<p>contato@finansee.com</p>
					<p>99 99999-9999</p>
				</Contato>
				<p>@ 2024 Alguns Direitos Reservados.</p>
			</Footer>
		</>
	);
};

export default Home;
