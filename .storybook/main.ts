// @ts-nocheck

import type { StorybookConfig } from '@storybook/react-webpack5';
const webpack = require('../webpack.config');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    // Merge custom rules from your webpack.config.js
    // Ensure you're not duplicating rules that might conflict with Storybook's defaults.
    config.module.rules.push(...webpack.module.rules);
    // If you have resolve aliases or other specific configurations to merge
    config.resolve = {
      ...config.resolve,
      ...webpack.resolve
    };
    // Return the merged configuration
    return config;
  }
};
export default config;
