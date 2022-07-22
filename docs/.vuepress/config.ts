import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import { webpackBundler } from '@vuepress/bundler-webpack'
export default defineUserConfig({
  base: "/manual/",
  host: "manual.ibdf-frankfurt.de",
  port: 8586,
  locales: {
    "/": {
      lang: "de-AT",
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
    postcss: {},
    vue: {},
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
