import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS, FONTS } from "../services/Constants";

export default ScreenHeader = ({ title, style }) => {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ ...styles.screenHeader, ...style }}>
			{/* <View style={styles.iconView}>
				<Pressable
					style={styles.iconPressable}
					android_ripple={{ radius: 40, color: COLORS.lightGrey }}
					onPress={() => navigation.openDrawer()}
				>
					<Icon name="bars" color={COLORS.white} size={25} />
				</Pressable>
			</View> */}
			<View>
				<Text style={styles.title}>{title}</Text>
				<View style={styles.bottomLine} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screenHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.white,
		width: "100%",
		paddingBottom: 5,
	},
	iconView: {
		position: "absolute",
		top: 30,
		left: 35,
		backgroundColor: COLORS.blue,
		borderRadius: 50,
		overflow: "hidden",
	},
	iconPressable: {
		paddingVertical: 7,
		paddingHorizontal: 10,
	},
	title: {
		fontSize: FONTS.title,
		color: COLORS.blue,
		fontWeight: "bold",
	},
	bottomLine: {
		height: 5,
		backgroundColor: COLORS.green,
		borderRadius: 15,
		width: "80%",
		alignSelf: "center",
	},
});
