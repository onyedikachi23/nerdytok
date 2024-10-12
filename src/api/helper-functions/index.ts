/** @format */

import { fontFamily, fontWeightNames } from "@/src/constants";
import { FontWeightName } from "@/src/types";

const getFontVariantName = (size: FontWeightName) => {
	const variantSizeNumber = (fontWeightNames.indexOf(size) + 1) * 100;
	const variantName = `${fontFamily}_${variantSizeNumber}${size}`;

	return variantName;
};

const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export { capitalizeFirstLetter, getFontVariantName };
