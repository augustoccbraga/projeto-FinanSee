import React from "react";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Gerenciador from "./components/Gerenciador.jsx";
import { GlobalStyles } from "./GlobalStyles.style.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*--------------------------------------------------------------*/

// Componente App

// Utilização do React-router para navegação dos links bem como a trativa do login (bem primitivo)

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="home" element={<Home />} />
				<Route path="gerenciador" element={<Gerenciador />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
