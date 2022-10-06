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

		const user = require("../../mockups").Aluno;

		setUser(user);
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
