/** @format */

import { StyleSheet, View } from "react-native";
import { AppImage, AppText } from "../customized";

export default function OnboardingStart() {
	return (
		<View style={styles.container}>
			<AppText fontWeight="Bold" style={[styles.text]}>
				Videos to Make Your Day
			</AppText>

			<View style={styles.bottomContainer}>
				<AppImage
					source={require("../../../assets/images/app-icons/nerdytok-logo-dark-no-text.png")}
					style={styles.logoImg}
					contentFit="contain"
				/>

				<AppText fontWeight="Bold" style={styles.text}>
					NerdyTok
				</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		alignItems: "flex-start",
		flex: 1,
		paddingVertical: 68,
	},
	bottomContainer: {
		alignItems: "center",
	},
	text: {
		fontSize: 32,
	},
	logoImg: {
		width: "20%",
		aspectRatio: 83 / 60,
	},
});
