import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    // config.module が未定義の場合に初期化
    if (!config.module) {
      config.module = { rules: [] };
    }
  
    // config.module.rules が未定義の場合に初期化
    if (!config.module.rules) {
      config.module.rules = [];
    }
  
    // Babelの設定を追加
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-typescript'),
            ],
          },
        },
      ],
    });
  
    return config;
  }
};

export default config;
