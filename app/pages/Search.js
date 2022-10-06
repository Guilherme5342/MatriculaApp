import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ClassCard from "../components/ClassCard";
import { COLORS } from "../services/Constants";

export default Search = () => {
	const [searchText, setSearchText] = useState("");
	const [subjects, setSubjects] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	const getSubjects = () => {
		setRefreshing(true);
		const mockup = require("../../mockups").Disciplina;
		setSubjects([mockup, mockup]);
		setRefreshing(false);
	};

	const search = (newText) => {
		const mockup = require("../../mockups").Disciplina;
		setSearchText(newText);
		if (newText === "") {
			setSubjects([mockup, mockup]);
			return;
		}
		let tempMaterias = [mockup, mockup].filter((mat) => {
			if (
				mat.nome.toLowerCase().indexOf(newText.toLowerCase()) !== -1 ||
				mat.codigo.toLowerCase().indexOf(newText.toLowerCase()) !==
					-1 ||
				mat.unidade.codigo
					.toLowerCase()
					.indexOf(newText.toLowerCase()) !== -1
			)
				return mat;
		});

		setSubjects(tempMaterias);
	};

	useFocusEffect(
		useCallback(() => {
			setSearchText("");
			const mockup = require("../../mockups").Disciplina;
			setSubjects([mockup, mockup]);
		}, []),
	);

	return (
		<View style={styles.container}>
			<View style={styles.filterView}>
				<TextInput
					onChangeText={search}
					style={styles.input}
					value={searchText}
				/>
				{searchText !== "" && (
					<Icon
						name="times"
						size={25}
						style={styles.searchIcon}
						color={COLORS.green}
						onPress={() => search("")}
					/>
				)}
			</View>
			<FlatList
				data={subjects}
				refreshing={refreshing}
				style={styles.flatList}
				onRefresh={getSubjects}
				renderItem={({ item }) => <ClassCard subject={item} />}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	filterView: {
		height: 50,
		width: "85%",
		alignSelf: "center",
	},
	input: {
		borderColor: COLORS.green,
		borderWidth: 3,
		borderRadius: 10,
		height: "100%",
		width: "100%",
		paddingLeft: 15,
	},
	searchIcon: {
		position: "absolute",
		right: 15,
		top: 12,
		zIndex: 2,
	},
	flatList: {
		marginTop: 5,
	},
});
