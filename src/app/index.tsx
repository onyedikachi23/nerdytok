/** @format */

import { Text, View } from "react-native";
import OnboardingStart from "../components/generic/onboarding-start";
import { styles } from "../themes/styles";

export default function Index() {
	return (
		<View style={styles.generalContainer}>
			<OnboardingStart />
		</View>
	);
}
