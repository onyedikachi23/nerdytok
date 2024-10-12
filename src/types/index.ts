/** @format */

import { fontFamily, fontWeightMapping, fontWeightNames } from "../constants";

type FontWeightName = keyof typeof fontWeightMapping;
type FontWeightNumber = (typeof fontWeightMapping)[FontWeightName];
type FontWeight = `${typeof fontFamily}_${FontWeightNumber}${FontWeightName}`;

export { FontWeight, FontWeightName, FontWeightNumber };
