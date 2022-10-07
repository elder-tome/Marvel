/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				surface: {
					700: '#1B1818',
					500: '#1D1D1D',
				},
				primary: {
					500: '#463333',
				},
				gray: {
					700: '#CCCCCC',
					500: '#777777',
					300: '#555555',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
