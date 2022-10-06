import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import EnrollmentCard from "../components/EnrollmentCard";
import ScreenHeader from "../components/navigation/ScreenHeader";
import { COLORS } from "../services/Constants";
import { EnrollmentContext } from "../services/EnrollmentState";

export default Enrollment = () => {
	const { enrollmentActive } = useContext(EnrollmentContext);

	if (!enrollmentActive)
		return (
			<SafeAreaView style={styles.container}>
				<ScreenHeader title="Matrícula" />
				<View style={styles.alert}>
					<Text style={styles.alertText}>
						Não estamos no período de matricula!
					</Text>
				</View>
			</SafeAreaView>
		);

	const [subjects, setSubjects] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	const enroll = () => {};

	const getSubjects = () => {
		setRefreshing(true);
		const mockup = require("../../mockups").Disciplina;
		setSubjects([mockup, mockup]);
		setRefreshing(false);
	};

	useFocusEffect(
		useCallback(() => {
			const mockup = require("../../mockups").Disciplina;
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
					<EnrollmentCard subject={item} enroll={enroll} />
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
		alignItems: "center",
		backgroundColor: COLORS.white,
	},
	alert: {
		marginTop: 40,
		backgroundColor: COLORS.green,
		width: "85%",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		borderRadius: 15,
	},
	alertText: {
		fontSize: 22,
		fontWeight: "bold",
		color: COLORS.white,
	},
	periodToggle: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		height: 30,
		backgroundColor: COLORS.lightGrey,
		alignItems: "center",
	},
	periodIcon: {
		marginLeft: 10,
		marginRight: 10,
	},
	periodTitle: {
		color: COLORS.white,
		fontSize: 18,
		fontWeight: "bold",
	},
});
