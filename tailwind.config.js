const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			blue: colors.blue,
			indigo: colors.indigo,
			white: colors.white,
			gray: colors.slate,
			green: colors.emerald,
			purple: colors.violet,
			yellow: colors.amber,
			pink: colors.fuchsia,
			slate: colors.slate,
			sotm: {
				blue: "#001489",
				yellow: "#FFDD00",
				"yellow-200": "#FAF57D",
				"blue-500": "#4D64C4",
			},
			orange: "#FF4102",
			darkOrange: "#B22D00",
			beige: "#4F1B0940",
		},
		fontSize: {
			xs: ["0.75rem", { lineHeight: "1rem" }],
			sm: ["0.875rem", { lineHeight: "1.5rem" }],
			base: ["1rem", { lineHeight: "1.5rem" }],
			lg: ["1.125rem", { lineHeight: "2rem" }],
			xl: ["1.25rem", { lineHeight: "2rem" }],
			"2xl": ["1.5rem", { lineHeight: "2.5rem" }],
			"3xl": ["2rem", { lineHeight: "2.5rem" }],
			"4xl": ["2.5rem", { lineHeight: "3rem" }],
			"5xl": ["3rem", { lineHeight: "3.5rem" }],
			"6xl": ["4rem", { lineHeight: "4" }],
			"7xl": ["5rem", { lineHeight: "4.5" }],
			"8xl": ["6rem", { lineHeight: "5" }],
			"9xl": ["8rem", { lineHeight: "5.5" }],
		},
		extend: {
			borderRadius: {
				"4xl": "2rem",
				"5xl": "2.5rem",
			},
			fontFamily: {
				dunbar: ["DunbarText"],
				poppins: ["Poppins"],
				rubik: ["Rubik"],
			},
			maxWidth: {
				"2xl": "40rem",
			},
			flexBasis: {
				"1/7": "14.2857143%",
			},
		},
	},
	plugins: [],
};
