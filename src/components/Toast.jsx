import { useCallback, useEffect } from "react";
import React from "react";
import { ToastContainer, Notif } from "./Toast.style.jsx";
import Button from "./Button.style.jsx";
import Close from "../assets/Close.svg?react";

/*--------------------------------------------------------------*/

// Componente Toast

const Toast = ({ toastlist, setList }) => {
	/*--------------------------------------------------------------*/

	// Função para deletar o toast da lista de Toasts criada

	const deleteToast = useCallback(
		(id) => {
			const toastListItem = toastlist.filter((e) => e.id !== id);
			setList(toastListItem);
		},
		[toastlist, setList]
	);

	/*--------------------------------------------------------------*/

	// Função para cronometrar o tempo que o Toast fica na tela e deletar ele após o interval

	useEffect(() => {
		const interval = setInterval(() => {
			if (toastlist.length) {
				deleteToast(toastlist[0].id);
			}
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	}, [toastlist, deleteToast]);

	/*--------------------------------------------------------------*/

	return (
		<Notif>
			{toastlist.map((toast, i) => (
				<ToastContainer>
					<div key={i}>
						<p>{toast.description}</p>
						<Button
							$width="36px"
							$height="36px"
							$display="flex"
							onClick={() => deleteToast(toast.id)}
						>
							<Close></Close>
						</Button>
					</div>
				</ToastContainer>
			))}
		</Notif>
	);
};

export default Toast;
