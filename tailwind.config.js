/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			colors: {
				blue: {
					light: '#36BDF8',
					dark: '#1E3A7A',
				},
				purple: {
					light: '#A79BFA',
					dark: '#6D29D9',
				},
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			keyframes: {
				bell_kf: {
					'0%, 100%': {
						transform: 'rotate(-10deg)',
					},
					'50%': {
						transform: 'rotate(10deg)',
					},
				},
			},
			animation: {
				bell: 'bell_kf 0.31s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
