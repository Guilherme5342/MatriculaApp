import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AuthContext } from "../services/AuthState";
import { COLORS, FONTS } from "../services/Constants";

export default SideBar = (props) => {
	const { user, logout } = useContext(AuthContext);

	return (
		<SafeAreaView style={styles.container}>
			<DrawerContentScrollView style={styles.DrawerContainer}>
				<Text
					style={styles.userName}
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{user.displayName}
				</Text>

				<View style={styles.itemView}>
					<Pressable
						style={styles.itemPressable}
						android_ripple={{
							color: COLORS.lightGrey,
							radius: 150,
						}}
						onPress={() => props.navigation.navigate("home")}
					>
						<Icon
							style={styles.itemIcon}
							name="water"
							color={COLORS.blue}
							size={27}
						/>
						<Text style={styles.itemText}>Níveis Atuais</Text>
					</Pressable>
				</View>

				<View style={styles.itemView}>
					<Pressable
						style={styles.itemPressable}
						android_ripple={{
							color: COLORS.lightGrey,
							radius: 150,
						}}
						onPress={() => props.navigation.navigate("history")}
					>
						<Icon
							name="history"
							style={styles.itemIcon}
							color={COLORS.blue}
							size={27}
						/>
						<Text style={styles.itemText}>Histórico</Text>
					</Pressable>
				</View>

				<View style={styles.itemView}>
					<Pressable
						style={styles.itemPressable}
						android_ripple={{
							color: COLORS.lightGrey,
							radius: 150,
						}}
						onPress={() => props.navigation.navigate("about")}
					>
						<Icon
							name="info"
							style={styles.itemIcon}
							color={COLORS.blue}
							size={27}
						/>
						<Text style={styles.itemText}>Sobre</Text>
					</Pressable>
				</View>

				<View style={styles.itemView}>
					<Pressable
						style={styles.itemPressable}
						android_ripple={{
							color: COLORS.lightGrey,
							radius: 150,
						}}
						onPress={() => logout()}
					>
						<Icon
							name="sign-out-alt"
							style={styles.itemIcon}
							color={COLORS.blue}
							size={27}
						/>
						<Text style={styles.itemText}>Sair</Text>
					</Pressable>
				</View>
			</DrawerContentScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.green,
	},
	DrawerContainer: {
		height: "100%",
	},
	userName: {
		textAlign: "center",
		color: COLORS.white,
		fontSize: FONTS.title,
		marginTop: 60,
		marginBottom: 30,
	},
	itemView: {
		backgroundColor: COLORS.white,
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
		marginVertical: 4,
		width: "95%",
		overflow: "hidden",
		height: 55,
	},
	itemPressable: {
		flexDirection: "row",
		alignItems: "center",
		height: "100%",
		justifyContent: "flex-start",
	},
	itemIcon: {
		textAlign: "center",
		width: "15%",
		marginHorizontal: 10,
	},
	itemText: {
		color: COLORS.lightlightGrey,
	},
});
