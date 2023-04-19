/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./docs/**/*.mdx",
      "./community/**/*.mdx",
    ],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {},
    },
    plugins: [],
};
