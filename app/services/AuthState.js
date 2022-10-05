import * as Crypto from "expo-crypto";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default AuthState = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	const login = async (email, senha) => {
		let encryptedPass = await Crypto.digestStringAsync(
			Crypto.CryptoDigestAlgorithm.SHA512,
			senha,
		);

		setUser({
			matricula: "180123456",
			nome: "PETRONIO HENRIQUE MOREIRA CRUZ",
			email: email,
			ira: 3.6,
			curriculo: "2020.1",
			status: true,
			periodoIngresso: {
				ano: "2018",
				numero: "1",
			},
			curso: {
				codigo: "2",
				nome: "ENGENHARIA DE REDES DE COMUNICACAO",
				grau: "Graduação",
				modalidade: "presencial",
				turno: "integral",
				coordenador: {
					matricula: "1242343",
					nome: "Paulo Gondim",
					email: "paulog@gmail.com",
				},
				unidades: [
					{
						codigo: "2",
						nome: "String",
					},
				],
				curriculos: [],
				codigo: 2,
			},
			profilePic: "../../assets/profile_picture.jpg",
		});
	};

	const logout = () => {
		setUser(null);
	};

	useEffect(() => {
		const stateListener = async () => {
			if (!user) setUser(null);
		};
		stateListener();
		return () => {
			stateListener();
		};
	}, []);

	const authContextVal = {
		loading,
		user,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={authContextVal}>
			{children}
		</AuthContext.Provider>
	);
};
