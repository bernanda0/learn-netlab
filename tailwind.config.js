import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"], // my markdown stuff is in ../docs, not /src
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {},
    fontFamily: {
      mono: ["Menlo", "Monaco", "Consolas"],
    },
  },
  plugins: [],
});
