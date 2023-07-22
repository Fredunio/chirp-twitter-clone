/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            borderWidth: {
                1: '1px',
            },
            borderOpacity: {
                15: '0.15',
            },
            gridTemplateColumns: {
                'main-layout':
                    '1fr minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) 1fr',
            },

            fontFamily: {
                sans: ['var(--font-roboto)', 'sans-serif'],
                roboto: ['var(--font-roboto)', 'sans-serif'],
                pacifico: ['var(--font-pacifico)', 'cursive'],
                cabin: ['var(--font-cabin)', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#fff066',
                    text: '#ffe62e',
                    hover: '#fffcb2',
                    active: '#fffdd1',
                    50: '#ffffff',
                    100: '#ffffff',
                    200: '#fffef0',
                    300: '#fffdd1',
                    400: '#fffcb2',
                    500: '#fff066',
                    600: '#ffeb54',
                    700: '#ffe62e',
                    800: '#fce117',
                    900: '#e8ce07',
                },
                secondary: {
                    DEFAULT: '#12fbff',
                    50: '#ffffff',
                    100: '#ffffff',
                    200: '#e6ffff',
                    300: '#b3ffff',
                    400: '#80ffff',
                    500: '#4dffff',
                    600: '#1affff',
                    700: '#00e6e6',
                    800: '#00b3b3',
                    900: '#008080',
                },
            },
        },
    },
    plugins: [],
}
