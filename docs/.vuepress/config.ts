import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/manual/",
  port: 8585,
  locales: {
    "/": {
      lang: "en-US",
      title: "APProVe Manual",
      description: "Handbuch für APProVe - das Tool zur Antragsstellung, Projekt- und ProzessVerwaltung der iBDF",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "主题演示",
      description: "vuepress-theme-hope 的演示",
    },
  },

  theme,
});
