/** @format */

import { getFontVariantName } from "@/src/api/helper-functions";
import { FontWeightName } from "@/src/types";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { Image, ImageProps } from "expo-image";

type AppTextProps = TextProps & {
	fontWeight: FontWeightName;
	style?: StyleProp<TextStyle>;
};

function AppText({ fontWeight, style, children, ...rest }: AppTextProps) {
	return (
		<Text
			style={[
				style,
				{
					fontFamily: getFontVariantName(fontWeight),
					fontWeight: fontWeight.toLowerCase(), // TODO: remove in production
				},
			]}
			{...rest}>
			{children}
		</Text>
	);
}

type AppImageProps = ImageProps;

function AppImage({ source, ...rest }: AppImageProps) {
	return <Image source={source} {...rest} />;
}

export { AppText, AppImage };
