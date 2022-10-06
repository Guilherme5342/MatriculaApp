import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../services/Constants";

export default Subject = ({ route }) => {
	const subject = route.params.subject;
	const [classes, setClasses] = useState([]);
	const [selected, setSelected] = useState(false);
	const [priority, setPriority] = useState(false);

	useFocusEffect(
		useCallback(() => {
			const mockup = require("../../mockups").Turma;
			setClasses([mockup, mockup]);
		}, []),
	);

	const handlePriority = (index) => {
		if (index === priority) setPriority(false);
		else setPriority(index);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{subject.nome}</Text>
			<Text style={styles.code}>{subject.codigo}</Text>
			<View>
				<Text>Modalidade: {subject.modalidade}</Text>
				<Text>Carga Horária: {subject.cargaHoraria.total}</Text>
				<Text>
					Departamento:{" "}
					{subject.unidade.codigo + " - " + subject.unidade.nome}
				</Text>
			</View>
			<View style={styles.separator} />
			<View>
				<Text style={styles.subtitle}>Pré Requisitos</Text>
				{subject.preRequisitos.map((pre) => (
					<View style={styles.line}>
						<Text style={styles.preCode}>{pre.codigo}</Text>
						<Text
							style={styles.preName}
							lineBreakMode="tail"
							textBreakStrategy="simple"
						>
							{pre.nome}
						</Text>
					</View>
				))}
			</View>
			<View style={styles.separator} />
			<ScrollView
				contentContainerStyle={styles.classCardScroll}
				horizontal
			>
				{classes.map((turma, index) => (
					<Pressable
						onPress={() => {
							if (index === selected) setSelected(false);
							else setSelected(index);
						}}
						style={{
							...styles.classCard,
							backgroundColor:
								selected === index ? COLORS.blue : COLORS.green,
						}}
						key={index}
					>
						<Text style={styles.cardTitle}>
							{turma.professores[0].nome}
						</Text>
						<Text style={styles.cardText}>{turma.codigo}</Text>
						<Text style={styles.cardText}>
							Vagas: {turma.vagasOfertadas}
						</Text>
						<Text style={styles.cardText}>
							Vagas Preenchidas: {turma.vagasOcupadas}
						</Text>
						<Text
							style={[
								styles.cardText,
								{ alignSelf: "flex-start", marginLeft: "10%" },
							]}
						>
							Horários:{" "}
						</Text>
						{turma.horarios.map((horario, index) => (
							<View key={index}>
								<Text style={styles.cardText}>
									{horario.dia} - {horario.horaInicio} a
									{horario.horaFim}
								</Text>
							</View>
						))}
					</Pressable>
				))}
			</ScrollView>
			{typeof selected != "boolean" && (
				<>
					<Text style={[styles.subtitle, { marginBottom: 10 }]}>
						Selecione a Prioridade:
					</Text>
					<View style={styles.prioridadesView}>
						<Pressable
							onPress={() => handlePriority(1)}
							style={{
								...styles.prioridade,
								backgroundColor:
									priority === 1 ? COLORS.blue : COLORS.green,
							}}
						>
							<Text style={styles.prioridadeText}>1</Text>
						</Pressable>
						<Pressable
							onPress={() => handlePriority(2)}
							style={{
								...styles.prioridade,
								backgroundColor:
									priority === 2 ? COLORS.blue : COLORS.green,
							}}
						>
							<Text style={styles.prioridadeText}>2</Text>
						</Pressable>
						<Pressable
							onPress={() => handlePriority(3)}
							style={{
								...styles.prioridade,
								backgroundColor:
									priority === 3 ? COLORS.blue : COLORS.green,
							}}
						>
							<Text style={styles.prioridadeText}>3</Text>
						</Pressable>
						<Pressable
							onPress={() => handlePriority(4)}
							style={{
								...styles.prioridade,
								backgroundColor:
									priority === 4 ? COLORS.blue : COLORS.green,
							}}
						>
							<Text style={styles.prioridadeText}>4</Text>
						</Pressable>
						<Pressable
							onPress={() => handlePriority(5)}
							style={{
								...styles.prioridade,
								backgroundColor:
									priority === 5 ? COLORS.blue : COLORS.green,
							}}
						>
							<Text style={styles.prioridadeText}>5</Text>
						</Pressable>
					</View>
					<View>
						<Pressable
							style={styles.btn}
							onPress={() => alert("Matricula Realizada")}
						>
							<Text style={styles.btnText}>Matricular</Text>
						</Pressable>
					</View>
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingHorizontal: 10,
	},
	title: {
		fontSize: 20,
		textAlign: "center",
		fontWeight: "bold",
		alignSelf: "center",
	},
	separator: {
		width: "85%",
		height: 2,
		marginVertical: 8,
		backgroundColor: COLORS.blue,
		alignSelf: "center",
	},
	subtitle: {
		fontSize: 15,
		fontWeight: "bold",
		textAlign: "center",
		alignSelf: "center",
	},
	code: {
		fontSize: 15,
		textAlign: "center",
		alignSelf: "center",
	},
	line: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		overflow: "hidden",
	},
	preName: {
		width: "80%",
	},
	classCardScroll: {
		height: 200,
	},
	classCard: {
		backgroundColor: COLORS.green,
		width: 300,
		alignItems: "center",
		borderRadius: 20,
		marginRight: 15,
		padding: 10,
	},
	cardTitle: {
		color: COLORS.white,
		fontWeight: "bold",
		fontSize: 18,
	},
	cardText: {
		color: COLORS.white,
	},
	prioridadesView: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		height: 60,
	},
	prioridade: {
		backgroundColor: COLORS.green,
		borderRadius: 5,
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	prioridadeText: {
		color: COLORS.white,
		fontSize: 18,
		fontWeight: "bold",
	},
	btn: {
		backgroundColor: COLORS.green,
		borderRadius: 10,
		width: 200,
		alignItems: "center",
		justifyContent: "center",
		height: 45,
		alignSelf: "center",
		marginBottom: 20,
	},
	btnText: {
		color: COLORS.white,
		fontWeight: "bold",
	},
});
