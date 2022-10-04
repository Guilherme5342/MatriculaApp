import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SubjectCard from "../components/SubjectCard";
import { COLORS } from "../services/Constants";

export default Home = () => {
	const [refreshing, setRefreshing] = useState(false);
	const [subjects, setSubjects] = useState([]);

	const getSubjects = () => {
		setRefreshing(true);
		setSubjects(tempSubjects);
		setRefreshing(false);
	};

	const remover = (subject) => {
		let newArray = subjects.filter((sub) => sub !== subject);
		setSubjects(newArray);
	};

	useEffect(() => {
		setSubjects(tempSubjects);
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.flatlist}
				data={subjects}
				refreshing={refreshing}
				onRefresh={getSubjects}
				renderItem={({ item }) => (
					<SubjectCard subject={item} remover={remover} />
				)}
				keyExtractor={(item) =>
					item.status + item.turma.disciplina.codigo + item.status
				}
				ItemSeparatorComponent={() => (
					<View
						style={{
							height: 10,
						}}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
		backgroundColor: COLORS.white,
	},
});

const tempSubjects = [
	{
		status: "PreMatricula",
		turma: {
			codigo: "F",
			disciplina: {
				codigo: 132012,
				nome: "INTRODUCAO A ECONOMIA",
				creditos: 4,
			},
			listaHorarioAula: [
				{
					dia: "SEG",
					hora: "14:00-15:50",
				},
				{
					dia: "QUA",
					hora: "14:00-15:50",
				},
			],
		},
	},
	{
		status: "PreMatricula",
		turma: {
			codigo: "A",
			disciplina: {
				codigo: 167266,
				nome: "TEORIA DA INFORMACAO",
				creditos: 4,
			},
			listaHorarioAula: [
				{
					dia: "TER",
					hora: "16:00-17:50",
				},
				{
					dia: "QUI",
					hora: "16:00-17:50",
				},
			],
		},
	},
	{
		status: "PreMatricula",
		turma: {
			codigo: "A",
			disciplina: {
				codigo: 108529,
				nome: "REDES DE TELECOMUNICACOES",
				creditos: 4,
			},
			listaHorarioAula: [
				{
					dia: "SEG",
					hora: "16:00-17:50",
				},
				{
					dia: "QUA",
					hora: "16:00-17:50",
				},
			],
		},
	},
	{
		status: "PreMatricula",
		turma: {
			codigo: "A",
			disciplina: {
				codigo: 108537,
				nome: "LABORATORIO REDES DE TELECOMUNICACOES",
				creditos: 2,
			},
			listaHorarioAula: [
				{
					dia: "SEX",
					hora: "10:00-11:50",
				},
			],
		},
	},
	{
		status: "PreMatricula",
		turma: {
			codigo: "A",
			disciplina: {
				codigo: 167878,
				nome: "COMUNICACOES DIGITAIS",
				creditos: 4,
			},
			listaHorarioAula: [
				{
					dia: "SEG",
					hora: "08:00-09:50",
				},
				{
					dia: "QUA",
					hora: "08:00-09:50",
				},
			],
		},
	},
];
