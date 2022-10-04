import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";

const Stack = createStackNavigator();

export default AuthRoute = ({ navigation }) => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="login"
		>
			<Stack.Screen name="login" component={Login} />
		</Stack.Navigator>
	);
};
