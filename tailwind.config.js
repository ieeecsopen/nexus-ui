/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Manrope"', 'sans-serif'],
                primary: ['"Manrope"', 'sans-serif'],
                walsheim: ['"Manrope"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
