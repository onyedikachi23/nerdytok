/** @format */

import { useEffect, useState } from "react";
import { Text, TextProps, StyleProp } from "react-native";

type AppTextProps = TextProps & {
	fontFamily: FontVariant;
	style?: StyleProp<Text>;
};

function AppText({ fontWeight, style, children, ...rest }: AppTextProps) {
	return (
		<Text style={[style]} {...rest}>
			{children}
		</Text>
	);
}

export { AppText };
