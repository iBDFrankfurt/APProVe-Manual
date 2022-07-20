import { sidebar } from "vuepress-theme-hope";

export const de = sidebar({
  "/": [
    "",
    "home",
    "slide",
    {
      icon: "any",
      text: "Einführung",
      prefix: "introduction/",
      link: "introduction/",
      children: ["introduction", "architecture"],
    },
    {
      icon: "guide",
      text: "Navigation",
      prefix: "navigation/",
      link: "navigation/",
      children: ["registration", "login"],
    },
    {
      text: "Changelogs",
      icon: "note",
      prefix: "updates/",
      link: "updates/",
      children: ["2-5-1", "2-5-0"],
    },
  ],
});
