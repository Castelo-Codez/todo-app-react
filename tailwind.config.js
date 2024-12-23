/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: ["class"],
    theme: {
        extend: {
            colors: {
                "l-Very-Light-Gray": "hsl(0, 0%, 98%)",
                "l-Very-Light-Grayish-Blue": "hsl(236, 33%, 92%)",
                "l-Light-Grayish-Blue": "hsl(233, 11%, 84%)",
                "l-Dark-Grayish-Blue": "hsl(236, 9%, 61%)",
                "l-Very-Dark-Grayish-Blue": "hsl(235, 19%, 35%)",
                "d-Very-Dark-Blue": "hsl(235, 21%, 11%)",
                "d-Very-Dark-Desaturated-Blue": "hsl(235, 24%, 19%)",
                "d-Light-Grayish-Blue": "hsl(234, 39%, 85%)",
                "d-Light-Grayish-Blue-hover": "hsl(236, 33%, 92%)",
                "d-Dark-Grayish-Blue": "hsl(234, 11%, 52%)",
                "d-Very-Dark-Grayish-Blue": "hsl(233, 14%, 35%)",
                "d-Very-Dark-Desaturated-Grayish-Blue": "hsl(237, 14%, 26%)",
            },
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            maxWidth: {
                mainSecWidth: "700px",
            },
        },
    },
    plugins: [],
};
