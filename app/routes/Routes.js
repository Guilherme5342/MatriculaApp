import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
	CardStyleInterpolators,
	createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import BottomBar from "../components/BottomBar";
import ScreenHeader from "../components/ScreenHeader";
import SideBar from "../components/SideBar";
import Enrollment from "../pages/Enrollment";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Subjects from "../pages/Subjects";

const Stack = createStackNavigator();

export const DefaultRoutes = ({ navigation }) => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="login"
		>
			<Stack.Screen name="login" component={Login} />
		</Stack.Navigator>
	);
};

const BottomTabs = createBottomTabNavigator();

export const BottomNavigator = ({ navigation }) => {
	return (
		<BottomTabs.Navigator
			initialRouteName="home"
			screenOptions={{
				gestureDirection: "horizontal",
			}}
			tabBar={(props) => <BottomBar {...props} />}
		>
			<BottomTabs.Screen
				name="home"
				options={{
					title: "Disciplinas",
					icon: "book-open",
					header: () => <ScreenHeader title="Disciplinas" />,
				}}
				component={Home}
			/>
			<BottomTabs.Screen
				name="search"
				options={{
					title: "Pesquisar",
					icon: "search",
					header: () => <ScreenHeader title="Pesquisar" />,
				}}
				component={Search}
			/>
			<BottomTabs.Screen
				name="enrrollment"
				options={{
					title: "Matricula",
					icon: "search-plus",
					header: () => <ScreenHeader title="Matricula" />,
				}}
				component={Enrollment}
			/>
			<BottomTabs.Screen
				name="profile"
				options={{
					title: "Perfil",
					icon: "address-card",
					header: () => <ScreenHeader title="Perfil" />,
				}}
				component={Profile}
			/>
		</BottomTabs.Navigator>
	);
};
