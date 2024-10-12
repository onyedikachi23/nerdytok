/** @format */

const fontFamily = "Poppins";

const fontWeightNames = [
	"Thin",
	"ExtraLight",
	"Light",
	"Regular",
	"Medium",
	"SemiBold",
	"Bold",
	"ExtraBold",
	"Black",
] as const;

const fontWeightNumbers = fontWeightNames.map((fontWeight, index) => {
	return (index + 1) * 100;
});

const fontWeightMapping = {
	Thin: 100,
	ExtraLight: 200,
	Light: 300,
	Regular: 400,
	Medium: 500,
	SemiBold: 600,
	Bold: 700,
	ExtraBold: 800,
	Black: 900,
} as const;

export { fontFamily, fontWeightNames, fontWeightNumbers, fontWeightMapping };
