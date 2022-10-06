import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../services/Constants";

export default EnrollmentCard = ({ subject, enroll }) => {
	const navigation = useNavigation();

	return (
		<Pressable
			style={styles.cardContainer}
			onPress={() => navigation.navigate("subject", { subject: subject })}
		>
			<Text
				numberOfLines={1}
				ellipsizeMode={"tail"}
				style={styles.cardTitle}
			>
				{subject.nome}
			</Text>
			<View style={styles.line}>
				<View>
					<Text style={styles.text}>Código: {subject.codigo}</Text>
					<Text style={styles.text}>{subject.modalidade}</Text>
				</View>
				<View>
					<Text style={styles.text}>
						Carga Horária: {subject.cargaHoraria.total}
					</Text>
					<Text style={styles.text}>
						Unidade: {subject.unidade.codigo}
					</Text>
				</View>
			</View>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: COLORS.green,
		width: "90%",
		alignSelf: "center",
		maxWidth: 550,
		borderRadius: 15,
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	cardTitle: {
		color: COLORS.white,
		fontSize: 18,
		fontWeight: "bold",
		marginRight: 2,
	},
	text: {
		color: COLORS.white,
		fontSize: 15,
	},
	line: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingRight: 20,
	},
});
