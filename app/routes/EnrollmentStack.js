import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ScreenHeader from "../components/navigation/ScreenHeader";
import Enrollment from "../pages/Enrollment";
import Subject from "../pages/Subject";

const Stack = createStackNavigator();

export default EnrollmentStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Group>
				<Stack.Screen
					name="enrrollment"
					options={{
						title: "Matricula",
						icon: "search-plus",
						header: () => <ScreenHeader title="Matricula" />,
					}}
					component={Enrollment}
				/>
				<Stack.Screen
					name="subject"
					options={{
						title: "Matéria",
						header: () => <ScreenHeader title="Matéria" />,
					}}
					component={Subject}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};
