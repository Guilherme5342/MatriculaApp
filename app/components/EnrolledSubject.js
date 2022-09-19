import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../services/Constants";

export default EnrolledSubject = ({ subject }) => {
	return (
		<View style={styles.cardContainer}>
			<Text
				numberOfLines={1}
				ellipsizeMode={"tail"}
				style={styles.cardTitle}
			>
				{subject.turma.disciplina.codigo} -{" "}
				{subject.turma.disciplina.nome}
			</Text>
			<View style={styles.line}>
				<View>
					{subject.turma.listaHorarioAula.map((horario) => (
						<Text style={styles.text}>
							{horario.dia} - {horario.hora}
						</Text>
					))}
				</View>
				<View>
					<Text style={styles.text}>
						Turma {subject.turma.codigo}
					</Text>
					<Text style={styles.text}>Status: {subject.status}</Text>
				</View>
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
