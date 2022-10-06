import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SubjectCard from "../components/SubjectCard";
import { COLORS } from "../services/Constants";

export default Processing = () => {
	const [refreshing, setRefreshing] = useState(false);
	const [subjects, setSubjects] = useState([]);

	const getSubjects = () => {
		setRefreshing(true);
		const mockup = require("../../mockups").Matricula;
		setSubjects([mockup, mockup]);
		setRefreshing(false);
	};

	const remover = (subject) => {
		let newArray = subjects.filter((sub) => sub !== subject);
		setSubjects(newArray);
	};

	useFocusEffect(
		useCallback(() => {
			const mockup = require("../../mockups").Matricula;
			setSubjects([mockup, mockup]);
		}, []),
	);

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.flatlist}
				data={subjects}
				refreshing={refreshing}
				onRefresh={getSubjects}
				renderItem={({ item }) => (
					<SubjectCard
						subject={item.turma}
						remover={remover}
						showStatus={item.status}
					/>
				)}
				keyExtractor={(item) => item.codigo}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		backgroundColor: COLORS.white,
	},
});
