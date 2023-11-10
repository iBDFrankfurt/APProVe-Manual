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
  theme: hopeTheme({
    sidebar: {
      "/user/": "structure",

      "/developing/": "structure",

      "/updates/": "structure",

      // fallback
      "/": [
        "" /* / */,
        "todo" /* /todo.html */,
        "test" /* /test.html */,
      ],
    },
    navbar: [ "/home.md",
              "/developing/README.md",
              {
                text: "Changelogs",
                icon: "note",
                prefix: "/updates/",
                link: "/updates",
                children: ["3-4-0", "3-3-0", "3-2-0", "/updates/README.md"],
              },
            ],
  }),
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
