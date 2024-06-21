import React, { useEffect, useState } from "react";
import {
	AreaVendas,
	BarGerenciador,
	ContainerGerenciador,
	FormAddEdit,
	Indices,
	NavContainer,
	NavGerenciador,
	Tabela,
	TelaGerenciador,
	Overlay,
	BarraPesquisa,
} from "./Gerenciador.style";
import { Footer } from "./LandingPage.style";
import Button from "./Button.style";
import Venda from "./Venda";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/LogoFinanseeNome.svg?react";
import NavVendas from "../assets/NavVendas.svg?react";
import NavDashboard from "../assets/NavDashboard.svg?react";
import NavConfig from "../assets/NavConfig.svg?react";
import { NavLink, useNavigate } from "react-router-dom";
import Close from "../assets/Close.svg?react";
import IconePesquisa from "../assets/Pesquisar.svg?react";
import { MsgErro } from "./Erro.style";
import {
	carregarVendas,
	adicionarVenda,
	deletarVenda,
	editarVenda,
} from "../store/vendas";
import Toast from "./Toast";

/*--------------------------------------------------------------*/

// Componente Gerenciador

const Gerenciador = () => {
	// Declaração de constantes React

	const [id, setId] = React.useState(1);
	const [nome, setNome] = React.useState("");
	const [produto, setProduto] = React.useState("");
	const [valor, setValor] = React.useState("");
	const [add, setAdd] = React.useState(false);
	const [edit, setEdit] = React.useState(false);
	const [pesquisa, setPesquisa] = React.useState("");
	const [tipoPesquisa, setTipoPesquisa] = React.useState("ID");
	const [filtroAtivo, setFiltroAtivo] = React.useState(false);
	const [vendasFiltradas, setVendasFiltradas] = React.useState([]);
	const vendas = useSelector((state) => state.vendas.vendas);

	// Declaração de constantes para adição do Toast na tela

	const [boolShowToast, setBoolShowToast] = React.useState(true);
	const [list, setList] = useState([]);

	let toastProperties = null; // Declaração de variável propriedades do toast (objeto) iniciamente para 'null'

	let usuario = window.localStorage.getItem("usuario"); // Declaração de variável usuário para saber se o usuário existe

	const dispatch = useDispatch(); // Declaração de const useDispatch do Redux

	/*--------------------------------------------------------------*/

	// Função para checar qual id está disponivel para encaixe da venda criada pelo usuário. (o usuário não escolhe o valor de id)

	const checaIdDisponivel = () => {
		const idsExistentes = vendas.map((venda) => venda.id); // filtra todos os ids e joga na const
		let id = 1;
		while (idsExistentes.includes(id)) {
			id++;
		}

		return id;
	};

	/*--------------------------------------------------------------*/

	// Utilização do useEffect para renderizar as já criadas e carregar do localStorage

	useEffect(() => {
		const vendasSalvas = Object.keys(localStorage)
			.filter((key) => key.startsWith("venda-"))
			.map((key) => JSON.parse(localStorage.getItem(key))); // filtra as vendas já criadas de acordo com o localStorage

		vendasSalvas.sort((a, b) => a.id - b.id); // ordena as vendas pelo id

		dispatch(carregarVendas(vendasSalvas)); // dispatch para o reducer carregarVendas
	}, [dispatch]);

	useEffect(() => {
		setVendasFiltradas(vendas); // atualiza as vendas para aparecer todas na tela ou somente as filtradas
	}, [vendas]);

	/*--------------------------------------------------------------*/

	// Função para mostrar o feedback de ações realizadas pelo usuário em formato toast

	const showToast = (message) => {
		toastProperties = {
			id: list.length + 1,
			description: message,
			backgroundColor: "#5cb85c",
		};
		setBoolShowToast(true);
		setList([...list, toastProperties]); // Adiciona a toast na lista de toasts e consequentemente na tela
	};

	/*--------------------------------------------------------------*/

	// Função de adicionar venda

	const addVenda = (event) => {
		event.preventDefault(); // Evita o recarregamento da página ao submeter o formulário

		const novaVenda = {
			id: checaIdDisponivel(),
			nome,
			produto,
			valor: parseFloat(valor),
		};
		dispatch(adicionarVenda(novaVenda)); // Dispatch para o reducer adicionarVenda
		localStorage.setItem(`venda-${novaVenda.id}`, JSON.stringify(novaVenda)); // Adiciona no localStorage a venda recém criada

		// Zera os campos de Nome, Produto e Valor após a adição

		setNome("");
		setProduto("");
		setValor("");

		setAdd(false); // Fecha o formulário de adicionar venda

		showToast("Venda adicionada com sucesso!"); // Mostra o toast com a mensagem inserida
	};

	/*--------------------------------------------------------------*/

	// Função de deletar uma venda

	const delVenda = (id) => {
		dispatch(deletarVenda(id)); // Dispatch para o reducer deletarVenda
		localStorage.removeItem(`venda-${id}`); // Remove a venda do localStorage
		showToast("Venda deletada com sucesso!"); // Mostra o toast com a mensagem inserida
	};

	/*--------------------------------------------------------------*/

	// Função para abrir janela de edição de venda

	const openEditForm = (venda) => {
		// Puxa os valores da venda que está sendo editada e joga para o input

		setId(venda.id);
		setNome(venda.nome);
		setProduto(venda.produto);
		setValor(venda.valor);

		setEdit(true); // Abre o form de edição (similar ao de adição)
	};

	/*--------------------------------------------------------------*/

	// Função para editar venda após submeter

	const editVenda = (event) => {
		event.preventDefault(); // Evita o recarregamento da página ao submeter o formulário

		const vendaEditada = {
			// Cria o objeto que será enviado como ação para dispatch
			id,
			nome,
			produto,
			valor: parseFloat(valor),
		};

		dispatch(editarVenda(vendaEditada)); // Dispatch para o reducer editarVenda
		localStorage.setItem(
			`venda-${vendaEditada.id}`, // Pega o item do localStorage que será alterado
			JSON.stringify(vendaEditada) // Altera o item no localStorage
		);

		setEdit(false); // Fecha o formulário de edição

		showToast("Venda editada com sucesso!"); // Mostra o toast com a mensagem inserida
	};

	/*--------------------------------------------------------------*/

	// Função de consulta (pesquisar)

	const pesquisar = (event) => {
		event.preventDefault(); // Evita o recarregamento da página ao submeter o formulário

		let resultado;
		switch (tipoPesquisa) {
			case "ID":
				resultado = vendas.filter((venda) => venda.id.toString() === pesquisa); // Pesquisa exata no tipoPesquisa de ID, retorna um Array com os itens exatos a serem renderizados
				break;
			case "Nome":
				resultado = vendas.filter(
					(venda) => venda.nome.toLowerCase() === pesquisa.toLowerCase() // Pesquisa exata no tipoPesquisa de Nome, retorna um Array com os itens exatos a serem renderizados
				);
				break;
			case "Produto":
				resultado = vendas.filter(
					(venda) => venda.produto.toLowerCase() === pesquisa.toLowerCase() // Pesquisa exata no tipoPesquisa de Produto, retorna um Array com os itens exatos a serem renderizados
				);
				break;
			case "Valor":
				resultado = vendas.filter(
					(venda) => venda.valor.toString() === pesquisa // Pesquisa exata no tipoPesquisa de Valor, retorna um Array com os itens exatos a serem renderizados
				);
				break;
			default:
				resultado = vendas;
		}

		setVendasFiltradas(resultado); // Seta as vendas filtradas para serem renderizadas
		setFiltroAtivo(true); // Seta o boolean filtroAtivo para true para mostrar apenas os itens filtrados
	};

	/*--------------------------------------------------------------*/

	// Função para lidar com o clique no botão resetar pesquisa

	const resetarPesquisa = () => {
		setPesquisa(""); // Limpa o input de e pesquisa
		setTipoPesquisa("ID"); // Seta o tipoPesquisa para o padrão "ID"
		setVendasFiltradas(vendas); // Seta vendas filtradas para o padrão, sem filtro
		setFiltroAtivo(false); // Seta o boolean filtroAtivo para false para mostrar todos os itens criados
	};

	/*--------------------------------------------------------------*/

	return (
		<ContainerGerenciador>
			{usuario ? (
				<>
					<BarGerenciador>
						{add ? (
							<>
								<Overlay />
								<FormAddEdit onSubmit={addVenda}>
									<a onClick={() => setAdd(!add)}>
										<Close />
									</a>
									<h2>ADICIONAR VENDA</h2>
									<label htmlFor="nome">Comprador *</label>
									<input
										id="nome"
										type="text"
										value={nome}
										onChange={({ target }) => setNome(target.value)}
										placeholder="Comprador"
										required
									/>

									<label htmlFor="produto">Produto *</label>
									<input
										id="produto"
										type="text"
										value={produto}
										onChange={({ target }) => setProduto(target.value)}
										placeholder="Produto"
										required
									/>

									<label htmlFor="valor">Valor *</label>
									<input
										id="valor"
										type="text"
										value={valor}
										onChange={({ target }) => setValor(target.value)}
										placeholder="Valor"
										required
									/>
									<Button $fontSize="1rem">SUBMETER</Button>
								</FormAddEdit>
							</>
						) : (
							""
						)}

						<Button
							$width="180px"
							$height="40px"
							$fontSize="1rem"
							$margin="8px"
							onClick={() => {
								setAdd(!add);
							}}
						>
							Adicionar Venda
						</Button>

						<BarraPesquisa onSubmit={pesquisar}>
							<input
								id="pesquisa"
								type="text"
								value={pesquisa}
								onChange={({ target }) => setPesquisa(target.value)}
								placeholder="Pesquise aqui..."
							/>
							<select
								name="Opção"
								id="tipo"
								value={tipoPesquisa}
								onChange={({ target }) => setTipoPesquisa(target.value)}
							>
								<option value="ID">ID</option>
								<option value="Nome">Nome</option>
								<option value="Produto">Produto</option>
								<option value="Valor">Valor</option>
							</select>
							<Button $width="60px">
								<IconePesquisa />
							</Button>
						</BarraPesquisa>
						{filtroAtivo && (
							<Button
								$width="180px"
								$height="40px"
								$fontSize="1rem"
								$margin="8px"
								onClick={resetarPesquisa}
							>
								Resetar Pesquisa
							</Button>
						)}
					</BarGerenciador>
					<NavContainer>
						<Logo />
						<NavGerenciador>
							<NavLink to={""}>
								<NavVendas />
								<h3>Vendas</h3>
							</NavLink>

							<NavLink>
								<NavDashboard />
								<h3>Dashboard</h3>
							</NavLink>

							<NavLink>
								<NavConfig />
								<h3>Configurações</h3>
							</NavLink>
						</NavGerenciador>
						<Footer $backgroundColor="#0e0e0e">
							<p>@ 2024 Alguns Direitos Reservados</p>
						</Footer>
					</NavContainer>
					<TelaGerenciador>
						{edit ? (
							<>
								<Overlay />
								<FormAddEdit onSubmit={editVenda}>
									<a
										onClick={() => {
											setEdit(false);
										}}
									>
										<Close />
									</a>
									<h2>EDITAR VENDA</h2>

									<label htmlFor="nome">Comprador *</label>
									<input
										id="nome"
										type="text"
										value={nome}
										onChange={({ target }) => setNome(target.value)}
										placeholder="Comprador"
										required
									/>

									<label htmlFor="produto">Produto *</label>
									<input
										id="produto"
										type="text"
										value={produto}
										onChange={({ target }) => setProduto(target.value)}
										placeholder="Produto"
										required
									/>

									<label htmlFor="valor">Valor *</label>
									<input
										id="valor"
										type="text"
										value={valor}
										onChange={({ target }) => setValor(target.value)}
										placeholder="Valor"
										required
									/>
									<Button $fontSize="1rem">SUBMETER</Button>
								</FormAddEdit>
							</>
						) : (
							""
						)}
						<Tabela>
							<Indices>
								<p>ID</p>
								<p>Nome</p>
								<p>Produto</p>
								<p>Valor</p>
							</Indices>
							<AreaVendas>
								{vendasFiltradas.map((venda) => (
									<Venda
										key={venda.id}
										ID={venda.id}
										Nome={venda.nome}
										Produto={venda.produto}
										Valor={venda.valor}
										deletarVenda={delVenda}
										editarVenda={() => openEditForm(venda)}
									/>
								))}
							</AreaVendas>
						</Tabela>
					</TelaGerenciador>
				</>
			) : (
				<MsgErro>USUÁRIO NÃO LOGADO</MsgErro>
			)}
			{boolShowToast ? <Toast toastlist={list} setList={setList} /> : ""}
		</ContainerGerenciador>
	);
};

export default Gerenciador;
