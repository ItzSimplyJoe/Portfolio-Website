/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: {
        relative: true,
        transform: (content) => content.replace(/taos:/g, ''),
        files: ["../**/*.{cshtml,md,html}"],
        },
    theme: {
        extend: {
            backgroundImage: theme => ({
                'purple-gradient': 'linear-gradient(to bottom right, #391dba, #291586, #855bb7)',
            }),
        },
        colors: {
            transparent: 'transparent',
            pink: "#855BB7",
            white: "#FFFFFF",
            purple: "#391DBA",
            background: "#030306",
            'gradient-1': '#391dba',
            'gradient-2': '#291586',
            'gradient-3': '#855bb7',
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('taos/plugin'),
    ],
    safelist: [
        '!duration-[0ms]',
        '!delay-[0ms]',
        'html.js :where([class*="taos:"]:not(.taos-init))'
    ],
}
