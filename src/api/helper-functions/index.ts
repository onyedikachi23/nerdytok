/** @format */

import { fontFamily, fontWeightNames } from "@/src/constants";
import { FontWeightName } from "@/src/types";
import { Platform } from "react-native";

const getFontVariantName = (size: FontWeightName) => {
	const variantSizeNumber = (fontWeightNames.indexOf(size) + 1) * 100;
	const androidVariantName = `${fontFamily}_${variantSizeNumber}${size}`;
	const iOSVariantName = `${fontFamily}_${size}`;

	return Platform.OS === "android" ? androidVariantName : iOSVariantName;
};

const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export { capitalizeFirstLetter, getFontVariantName };
