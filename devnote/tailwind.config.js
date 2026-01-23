/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-dark': '#112D32',
                'primary-accent': '#00D2A0',
                'text-main': '#1A1A1A',
                'text-muted': '#6B7280',
                'bg-light': '#F9FAFB',
            },
            fontFamily: {
                sans: ['var(--font-jakarta)', 'sans-serif'],
            },
            boxShadow: {
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                'glow': '0 0 20px rgba(0, 210, 160, 0.3)',
            },
        },
    },
    plugins: [],
}
