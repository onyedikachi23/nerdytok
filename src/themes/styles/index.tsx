/** @format */

import { StyleSheet } from "react-native";

const colors = {
	lightTheme: {
		primary: "#FFFFFF",
	},
};

const styles = StyleSheet.create({
	generalContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.lightTheme.primary,
	},
});

export { colors, styles };
