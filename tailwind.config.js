/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				tiro: ["Montserrat", "sans-serif"],
				body: ["Merriweather", "sans-serif"],
				space: ["Space Mono", "monospace"],
			},
		},
	},
	plugins: [],
};
