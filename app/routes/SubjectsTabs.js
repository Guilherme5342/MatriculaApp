import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SubjectsBar from "../components/navigation/SubjectsBar";
import Home from "../pages/Home";
import Processing from "../pages/Processing";

const Tab = createMaterialTopTabNavigator();

export default SubjectsTabs = () => {
	return (
		<Tab.Navigator tabBar={(props) => <SubjectsBar {...props} />}>
			<Tab.Screen name="Matriculadas" component={Home} />
			<Tab.Screen name="Processamento" component={Processing} />
		</Tab.Navigator>
	);
};
