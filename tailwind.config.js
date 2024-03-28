/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#050816",
				secondary: "#f5f5f7",
				tertiary: "#151030",
				"white-100": "#f3f3f3",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			backgroundImage: {
				"hero-pattern": "url('/src/assets/background.png')",
			},
		},
		screens: {
			xs: "340px",
			sm: "640px",
			md: "800px",
			lg: "1024px",
			xl: "1200px",
			"2xl": "1536px",
		},
	},
	plugins: [],
};
