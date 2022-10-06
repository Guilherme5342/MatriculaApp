import React, { useContext, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../services/AuthState";
import { COLORS } from "../services/Constants";

export default Profile = () => {
	const { user, logout } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<Image
				style={styles.profilePicture}
				// source={{ uri: user.profilePic }}
				source={require("../../assets/profile_picture.jpg")}
			/>
			<Text ellipsizeMode="tail" style={styles.text}>
				{user.nome}
			</Text>
			<Text ellipsizeMode="tail" style={styles.text}>
				Matricula: {user.matricula}
			</Text>
			<Text ellipsizeMode="tail" style={styles.text}>
				E-mail: {user.email}
			</Text>
			<Text ellipsizeMode="tail" style={styles.text}>
				Curso: {user.curso.nome}
			</Text>
			<Text ellipsizeMode="tail" style={styles.text}>
				Período de Ingresso: {user.periodoIngresso.numero}/
				{user.periodoIngresso.ano}
			</Text>

			<Pressable onPress={() => logout()} style={styles.sair}>
				<Text style={styles.sairText}>Sair</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	profilePicture: {
		marginTop: 30,
		marginBottom: 50,
		height: "38%",
		maxHeight: 550,
		aspectRatio: 1 / 1,
		borderRadius: 1050,
		alignSelf: "center",
	},
	text: {
		paddingLeft: 25,
		marginBottom: 10,
		fontSize: 18,
		fontWeight: "bold",
	},
	sair: {
		alignSelf: "center",
		backgroundColor: COLORS.green,
		width: 140,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
	},
	sairText: {
		color: COLORS.white,
		fontSize: 20,
		fontWeight: "bold",
	},
});
