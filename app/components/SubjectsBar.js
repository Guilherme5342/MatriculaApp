import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../services/Constants";

export default SubjectsBar = ({ state, descriptors, navigation, position }) => {
	return (
		<View style={styles.container}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options?.tabBarLabel || options?.title || route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate({ name: route.name, merge: true });
					}
				};

				return (
					<Pressable
						style={[
							styles.tabPressable,
							{
								backgroundColor: isFocused
									? COLORS.green
									: COLORS.blue,
							},
						]}
						onPress={onPress}
						onLongPress={onPress}
					>
						<Text style={styles.tabText}>{label}</Text>
					</Pressable>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: COLORS.white,
		height: 35,
	},
	tabPressable: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.blue,
	},
	tabText: {
		fontWeight: "bold",
		fontSize: 18,
		color: COLORS.white,
	},
});
