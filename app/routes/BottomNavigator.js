import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import BottomBar from "../components/navigation/BottomBar";
import ScreenHeader from "../components/navigation/ScreenHeader";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import EnrollmentStack from "./EnrollmentStack";
import SubjectsTabs from "./SubjectsTabs";

const BottomTabs = createBottomTabNavigator();

export default BottomNavigator = ({ navigation }) => {
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
				component={SubjectsTabs}
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
				name="enrollmentStack"
				options={{
					title: "Matricula",
					icon: "search-plus",
					header: () => {},
				}}
				component={EnrollmentStack}
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
