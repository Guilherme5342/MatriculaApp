import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../services/Constants";

export default SubjectCard = ({ subject }) => {
	const [showPre, setShowPre] = useState(false);
	return (
		<View style={styles.cardContainer}>
			<Pressable onPress={() => setShowPre((state) => !state)}>
				<Text
					numberOfLines={1}
					ellipsizeMode={"tail"}
					style={styles.cardTitle}
				>
					{subject.nome}
				</Text>
				<View style={styles.line}>
					<View>
						<Text style={styles.text}>Código {subject.codigo}</Text>
						<Text style={styles.text}>
							Carga Horária: {subject.cargaHoraria.total}
						</Text>
					</View>
					<View>
						<Text style={styles.text}>{subject.modalidade}</Text>
						<Text style={styles.text}>
							Unidade {subject.unidade.codigo}
						</Text>
					</View>
				</View>
				{showPre &&
					subject.preRequisitos.map((pre) => (
						<>
							<Text
								style={styles.text}
								numberOfLines={1}
								ellipsizeMode={"tail"}
							>
								{pre.nome}
							</Text>
							<View style={styles.line}>
								<Text style={styles.text}>
									Código {pre.codigo}
								</Text>
								<Text style={styles.text}>
									Unidade {subject.unidade.codigo}
								</Text>
							</View>
						</>
					))}
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: COLORS.green,
		width: "90%",
		alignSelf: "center",
		maxWidth: 550,
		borderRadius: 15,
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	cardTitle: {
		color: COLORS.white,
		fontSize: 18,
		fontWeight: "bold",
		marginRight: 2,
	},
	text: {
		color: COLORS.white,
		fontSize: 15,
	},
	line: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingRight: 20,
	},
	icon: {
		position: "absolute",
		right: 12,
		top: 8,
		zIndex: 4,
	},
});
