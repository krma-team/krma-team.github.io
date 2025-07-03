/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        color: "hsl(var(--text))",

        // Couleurs de marque
        "brand-lime": "hsl(var(--brand-lime))",
        "brand-lavender": "hsl(var(--brand-lavender))",
        "brand-beige": "hsl(var(--brand-beige))",
        "brand-powder": "hsl(var(--brand-powder))",
        "brand-giants": "hsl(var(--brand-giants))",
      },
    },
  },
  plugins: [],
};
