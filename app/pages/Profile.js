import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../components/ScreenHeader";
import { AuthContext } from "../services/AuthState";
import { COLORS, FONTS } from "../services/Constants";

export default Profile = () => {
	const { user } = useContext(AuthContext);

	return (
		<SafeAreaView>
			<ScreenHeader title="Perfil" />
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
		</SafeAreaView>
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
});
