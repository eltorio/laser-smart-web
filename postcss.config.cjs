/*!
=========================================================
* © 2022-2023 Ronan LE MEILLAT for Les Ailes du Mont-Blanc
=========================================================
This website use:
- Vite, Vue3, FontAwesome 6, TailwindCss 3
- And many others
*/
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    process.env.NODE_ENV !== "development"
      ? purgecss({
          content: [
            "./index.html",
            "./src/**/*.ts",
            "./src/**/*.js",
            "./src/**/*.vue",
            "./node_modules/@highcanfly/meteo/src/**/*.vue",
            "./node_modules/@highcanfly-club/lesailesdumontblanc-uikit/src/**/*.vue"
          ],
          defaultExtractor(content) {
            const contentWithoutStyleBlocks = content.replace(
              /<style[^]+?<\/style>/gi,
              ""
            );
            return (
              contentWithoutStyleBlocks.match(
                /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
              ) || []
            );
          },
          safelist: [
            /-(leave|enter|appear)(|-(to|from|active))$/,
            /^(?!(|.*?:)cursor-move).+-move$/,
            /^router-link(|-exact)-active$/,
            /data-v-.*/,
            /dp_.*/,
            /tick.*/,
            /fc.*/, //FullCalendar
          ],
          fontFace: true,
        })
      : () => {},
  ],
};
