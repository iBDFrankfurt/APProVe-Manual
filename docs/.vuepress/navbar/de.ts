import { navbar } from "vuepress-theme-hope";

export const de = navbar([
  "/",
  "/home",
  {
    text: "Changelogs",
    icon: "note",
    prefix: "/updates/",
    link: "/updates",
    children: ["2-5-2", "2-5-3"],
  },
]);
