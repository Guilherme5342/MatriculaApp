import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "../services/AuthState";
import AuthRoute from "./AuthRoute";
import BottomNavigator from "./BottomNavigator";

export default Router = () => {
	const { user } = useContext(AuthContext);

	return (
		<NavigationContainer>
			{user ? <BottomNavigator /> : <AuthRoute />}
		</NavigationContainer>
	);
};
