import { combineReducers, configureStore } from "@reduxjs/toolkit";
import users from "./users";
import vendas from "./vendas";

/*--------------------------------------------------------------*/

// Padrão arquivo configurStore

const reducer = combineReducers({ users, vendas });
const store = configureStore({
	reducer,
});

export default store;
