import { navbar } from "vuepress-theme-hope";

export const de = navbar([
  "/",
  "/home",
  {
    text: "Changelogs",
    icon: "note",
    prefix: "/updates/",
    link: "/updates",
    children: ["2-6-2", "2-6-0"],
  },
]);
