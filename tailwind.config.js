/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./page-components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				// 👇 Add CSS variables
				sans: ['var(--font-opensans)'],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.700'),
						a: {
							color: theme('colors.gray.700'),
							'&:hover': {
								color: theme('colors.gray.700'),
							},
							code: { color: theme('colors.primary.400') },
						},
						h1: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.900'),
						},
						h2: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.900'),
						},
						h3: {
							fontWeight: '600',
							color: theme('colors.gray.900'),
						},
						'h4,h5,h6': {
							color: theme('colors.gray.900'),
						},
						code: {
							color: theme('colors.green.500'),
							backgroundColor: theme('colors.gray.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem',
						},
						'code:before': {
							content: 'none',
						},
						'code:after': {
							content: 'none',
						},
						hr: { borderColor: theme('colors.gray.200') },
						'ol li:before': {
							fontWeight: '600',
							color: theme('colors.gray.500'),
						},
						'ul li:before': {
							backgroundColor: theme('colors.gray.500'),
						},
						'ul li > :last-child': {
							margin: 0,
						},
						'ul li > :first-child': {
							margin: 0,
						},
						strong: { color: theme('colors.gray.600') },
						blockquote: {
							color: theme('colors.gray.900'),
							borderLeftColor: theme('colors.gray.200'),
						},
					},
				},
				dark: {
					css: {
						color: theme('colors.gray.300'),
						a: {
							color: theme('colors.gray.300'),
							'&:hover': {
								color: theme('colors.gray.300'),
							},
							code: { color: theme('colors.primary.400') },
						},
						h1: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.100'),
						},
						h2: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.100'),
						},
						h3: {
							fontWeight: '600',
							color: theme('colors.gray.100'),
						},
						'h4,h5,h6': {
							color: theme('colors.gray.100'),
						},
						code: {
							backgroundColor: theme('colors.gray.800'),
						},
						hr: { borderColor: theme('colors.gray.700') },
						'ol li:before': {
							fontWeight: '600',
							color: theme('colors.gray.400'),
						},
						'ul li:before': {
							backgroundColor: theme('colors.gray.400'),
						},
						'ul li > :last-child': {
							margin: 0,
						},
						'ul li > :first-child': {
							margin: 0,
						},
						strong: { color: theme('colors.gray.100') },
						thead: {
							color: theme('colors.gray.100'),
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.gray.700'),
							},
						},
						blockquote: {
							color: theme('colors.gray.100'),
							borderLeftColor: theme('colors.gray.700'),
						},
					},
				},
			}),
		},
	},
	plugins: [],
};
