module.exports = {
  syntax: "postcss-scss",
  map: { inline: true },
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-advanced-variables"),
    require("postcss-mixins"),
    require("postcss-inline-comment"),
    require("postcss-custom-media"),
    require("postcss-strip-inline-comments"),
    require("postcss-at-rules-variables"),
    require("autoprefixer"),
    require("cssnano"),
  ],
};
