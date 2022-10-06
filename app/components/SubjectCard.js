import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS, FONTS } from "../services/Constants";

export default SubjectCard = ({ subject, remover, showStatus }) => {
	return (
		<View style={styles.cardContainer}>
			<Text
				numberOfLines={1}
				ellipsizeMode={"tail"}
				style={styles.cardTitle}
			>
				{subject.disciplina.nome}
			</Text>
			<View style={styles.line}>
				<View>
					{subject.horarios.map((horario, index) => (
						<Text style={styles.text} key={index}>
							{horario.dia} - {horario.horaInicio} a
							{horario.horaFim}
						</Text>
					))}
				</View>
				<View>
					<Text style={styles.text}>Turma {subject.codigo}</Text>
					<Text style={styles.text}>
						Código: {subject.disciplina.codigo}
					</Text>
					{showStatus && (
						<Text style={styles.text}>Status: {showStatus}</Text>
					)}
				</View>
			</View>
			{!showStatus && (
				<Icon
					name="times"
					size={22}
					style={styles.icon}
					color={COLORS.white}
					onPress={() => remover(subject)}
				/>
			)}
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
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	cardTitle: {
		color: COLORS.white,
		fontSize: 18,
		fontWeight: "bold",
		marginRight: 20,
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
	icon: {
		position: "absolute",
		right: 12,
		top: 8,
		zIndex: 4,
	},
});
