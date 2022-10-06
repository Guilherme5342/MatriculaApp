import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS, FONTS } from "../../services/Constants";

export default BottomBar = ({ state, descriptors, navigation }) => {
	return (
		<View style={{ flexDirection: "row" }}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented)
						navigation.navigate({ name: route.name, merge: true });
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<Pressable
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.title}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={styles.container}
						key={index}
					>
						<Icon
							name={options.icon}
							size={24}
							solid={isFocused}
							color={isFocused ? COLORS.green : COLORS.white}
							style={styles.icon}
						/>
						<Text style={styles.text}>
							{options?.title ? options.title : route.name}
						</Text>
					</Pressable>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 65,
		bottom: 0,
		backgroundColor: COLORS.blue,
		alignItems: "center",
		justifyContent: "center",
	},
	icon: {
		marginTop: 5,
		marginBottom: 5,
	},
	text: {
		fontSize: FONTS.label,
		color: COLORS.white,
		fontWeight: "bold",
	},
});
