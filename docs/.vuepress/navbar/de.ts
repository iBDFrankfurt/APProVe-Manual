import { navbar } from "vuepress-theme-hope";

export const de = navbar([
  "/",
  "/home",
  {
    text: "Changelogs",
    icon: "note",
    prefix: "/updates/",
    link: "/updates",
    children: ["3-3-0", "3-2-0", "3-1-0"],
  },
]);
