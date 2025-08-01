/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            width: {
                "content-width": "1200px",
            },
            height: {
                "content-height": "calc(100vh - 96px)",
                "fit": "fit-content",
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif']
            }
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
