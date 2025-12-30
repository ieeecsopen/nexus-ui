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
                sans: ['"GT Walsheim"', 'sans-serif'],
                primary: ['"GT Walsheim"', 'sans-serif'],
                walsheim: ['"GT Walsheim"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
