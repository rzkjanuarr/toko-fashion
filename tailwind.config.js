/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.js",
    "pages/**/*.{ts,tsx}",
    "public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["", ""],
      },
      colors: {
        primary1: "#003E29",
        primary2: "#E4BBA1",
        primary3: "#D9D9D9",
        borderColor: "#787878",
        bgColor: "#EDEDED",
        bg1: "#023423",
      },
    },
  },
};
