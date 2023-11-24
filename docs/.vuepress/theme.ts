import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  // themeColor: {
  //   red: "#b3062c",
  //   green: "#737c45",
  //   orange: "#c96215",
  //   grey: "#4f4c48",
  //   white: "#e4e3dd",
  // },
  author: {
    name: "interdisziplinäre Biomaterial- und Datenbank Frankfurt (iBDF)",
    url: "https://www.uct-frankfurt.de/ibdf.html",
  },
  darkmode: "toggle",
  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "https://gitlab.ibdf-frankfurt.de/proskive/uct-manual-service",

  docsDir: "demo/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      Email: "mailto:uct-ibdf@kgu.de",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: navbar.de,

      // sidebar
      sidebar: sidebar.de,
      footer: "",
      displayFooter: true,

      blog: {
        description: "iBDF",
        intro: "/intro.html",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "默认页脚",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/zh/intro.html",
      },
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      excerptLength: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    //
    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",
    //
    //   /**
    //    * Using Waline
    //    */
    //   // provider: "Waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    mdEnhance: {
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
