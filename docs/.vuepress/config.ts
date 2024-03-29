import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import { webpackBundler } from '@vuepress/bundler-webpack';
import {hopeTheme} from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/manual/",
  host: "0.0.0.0",
  port: 443,
  locales: {
    "/": {
      lang: "de-DE",
      title: "APProVe",
      description: "Handbuch für APProVe - das Tool zur Antragsstellung, Projekt- und ProzessVerwaltung der iBDF",
    },
    // "/zh/": {
    //   lang: "en-US",
    //   title: "APProVe",
    //   description: "Manual for APProVe - the tool for application, project and process management of iBDF",
    // },
  },
  theme,
  bundler: webpackBundler({
    configureWebpack: (config, isServer) => {
      config.devServer = {
        host: "0.0.0.0",
        port: 8586,
        hot: true
      };
    },
    postcss: {},
    vue: {
      isServerBuild: true,
      hotReload: true,
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Suche',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
});
