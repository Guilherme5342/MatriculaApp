import React, { useContext, useState } from "react";
import {
	ActivityIndicator,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AuthContext } from "../services/AuthState";
import { COLORS, FONTS } from "../services/Constants";

export default Login = () => {
	const { login } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [viewPassword, setViewPassword] = useState(false);
	const [loading, setLoading] = useState(false);

	const auth = () => {
		setLoading(true);
		login(email, password);
		setLoading(false);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<View style={styles.inputView}>
				<Text style={styles.inputLabel}>E-mail</Text>
				<TextInput
					style={styles.input}
					value={email}
					onChangeText={(value) => setEmail(value)}
					keyboardType="email-address"
					autoComplete="email"
					editable={!loading}
					placeholderTextColor={COLORS.lightGrey}
					placeholder="exemplo@gmail.com"
					autoCapitalize="none"
					autoFocus
				/>
			</View>
			<View style={styles.inputView}>
				<Text style={styles.inputLabel}>Senha</Text>
				<View>
					<TextInput
						style={styles.input}
						textContentType="password"
						value={password}
						autoCapitalize="none"
						editable={!loading}
						onChangeText={(value) => setPassword(value)}
						autoComplete="password"
						secureTextEntry={!viewPassword}
					/>
					<Icon
						name={viewPassword ? "eye-slash" : "eye"}
						color={COLORS.blue}
						size={22}
						onPress={() => setViewPassword((state) => !state)}
						solid
						style={styles.passwordIcon}
					/>
				</View>
			</View>
			<Text style={styles.forgotPassText}>Esqueci minha senha</Text>
			<Pressable
				style={styles.loginBtn}
				android_ripple={{ radius: 80 }}
				onPress={auth}
			>
				{loading ? (
					<ActivityIndicator size="large" color={COLORS.white} />
				) : (
					<Text style={styles.loginBtnText}>Entrar</Text>
				)}
			</Pressable>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.blue,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: FONTS.title,
		marginBottom: 40,
		fontWeight: "bold",
		color: COLORS.white,
	},
	inputView: {
		width: "80%",
		marginBottom: 40,
	},
	inputLabel: {
		fontSize: FONTS.label,
		paddingLeft: 5,
		marginBottom: 5,
		color: COLORS.white,
	},
	input: {
		borderWidth: 4,
		paddingLeft: 15,
		height: 55,
		width: "100%",
		maxWidth: 400,
		borderRadius: 15,
		color: COLORS.white,
		backgroundColor: COLORS.white,
		borderColor: COLORS.white,
	},
	passwordIcon: {
		position: "absolute",
		right: 15,
		top: 15,
		zIndex: 2,
	},
	forgotPassText: {
		fontSize: FONTS.label,
		textDecorationLine: "underline",
		marginBottom: 40,
		color: COLORS.white,
	},
	loginBtn: {
		backgroundColor: COLORS.green,
		borderRadius: 15,
		height: 45,
		width: 160,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	loginBtnText: {
		fontSize: FONTS.text,
		color: COLORS.white,
		fontWeight: "bold",
	},
});
