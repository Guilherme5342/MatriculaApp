import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../services/Constants";

export default Subject = ({ subject }) => {
	return (
		<View style={styles.cardContainer}>
			<Text
				numberOfLines={2}
				ellipsizeMode={"tail"}
				style={styles.cardTitle}
			>
				{subject?.codigo} - {subject?.nome}
			</Text>
			<View style={styles.line}>
				<Text style={styles.text}>
					Departamento: {subject?.unidadeAcademica}
				</Text>
				<Text style={styles.text}>{subject?.creditos * 15} Horas</Text>
			</View>
		</View>
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
