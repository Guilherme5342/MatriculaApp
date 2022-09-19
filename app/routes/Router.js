import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "../services/AuthState";
import { AuthenticatedRoutes, BottomNavigator, DefaultRoutes } from "./Routes";

export default Router = () => {
	const { user } = useContext(AuthContext);

	return (
		<NavigationContainer>
			{user ? <BottomNavigator /> : <DefaultRoutes />}
		</NavigationContainer>
	);
};
