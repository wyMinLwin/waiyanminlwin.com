import type { Config } from "tailwindcss";


export default {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                bg: "#f8f5f3",
                primary: "#f7cb45",
                border: "#282828",
                mute: "#b2afab",
                error: "#ff6b6b",
            },
            fontFamily: {
                header: ['var(--instrumentSans)'],
                display: ['var(--instrumentSans)'],
                mono: ['var(--chivoMono)'],
            },
        },
    },
    plugins: [],
} satisfies Config;