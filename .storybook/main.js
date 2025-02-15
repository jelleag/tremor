const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
        name: '@storybook/addon-postcss',
        options: {postcssLoaderOptions: {
             implementation: require('postcss'),
               },
       },
   },
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];
    config.resolve.alias = {}
    return config;
  },
}
