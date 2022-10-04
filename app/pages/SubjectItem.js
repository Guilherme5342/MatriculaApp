import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { COLORS } from "../services/Constants";

export default SubjectItem = ({ subject }) => {
	const [active, setActive] = useState(() => {
		let states = subject.turmas.map(() => false);
		return states;
	});

	return (
		<>
			<Pressable
				style={styles.cardContainer}
				onPress={() => setActive((state) => !state)}
			>
				<Text style={styles.cardCodigo}>{subject.codigo}</Text>
				<Text style={styles.cardName}>{subject.name}</Text>
				<Text style={styles.cardCreditos}>{subject.creditos}</Text>
			</Pressable>
			{subject.turmas.map((turma, index) => (
				<Pressable
					onPress={() => {
						let temp = active;
						temp[index] = !active[index];
						setActive(temp);
					}}
					key={index}
				>
					<View style={styles.turmaView}>
						<Text style={styles.turmaCodigo}>{turma.codigo}</Text>
						<Text style={styles.turmaProf}>{turma.professor}</Text>
						<Text style={styles.turmaNVagas}>
							{turma.numeroVagas}
						</Text>
						<Text style={styles.turmaNMat}>
							{turma.numeroMatriculas}
						</Text>
						<View style={styles.turmaHorarios}>
							{turma.listaHorarioAula.map((horario, i) => (
								<Text key={i}>
									{horario.dia} as {horario.hora}
								</Text>
							))}
						</View>
						<View style={{ flex: 0.1, justifyContent: "center" }}>
							<View style={styles.turmaCheckbox}>
								{active[index] && (
									<Icon
										name="check"
										size={20}
										color={COLORS.green}
									/>
								)}
							</View>
						</View>
					</View>
				</Pressable>
			))}
		</>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		width: "100%",
		display: "flex",
		minHeight: 30,
		flexDirection: "row",
		alignItems: "center",
		borderBottomWidth: 2,
		justifyContent: "center",
		borderBottomColor: COLORS.lightGrey,
	},
	cardCodigo: {
		flex: 0.15,
		fontSize: 15,
		paddingLeft: 10,
		fontWeight: "bold",
	},
	cardName: {
		flex: 0.75,
		fontSize: 15,
		fontWeight: "bold",
	},
	cardCreditos: {
		flex: 0.1,
		fontSize: 15,
		fontWeight: "bold",
	},
	turmaView: {
		display: "flex",
		minHeight: 45,
		alignItems: "center",
		flexDirection: "row",
		borderBottomWidth: 2,
		borderBottomColor: COLORS.lightGrey,
	},
	turmaCodigo: {
		flex: 0.1,
		textAlign: "center",
	},
	turmaProf: {
		flex: 0.5,
	},
	turmaNVagas: {
		flex: 0.05,
	},
	turmaNMat: {
		flex: 0.05,
	},
	turmaHorarios: {
		flex: 0.3,
	},
	turmaCheckbox: {
		borderWidth: 2,
		borderColor: COLORS.grey,
		borderRadius: 7,
		width: 25,
		height: 25,
		justifyContent: "center",
		alignItems: "center",
	},
});
