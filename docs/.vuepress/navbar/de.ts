import { navbar } from "vuepress-theme-hope";

export const de = navbar([
  "/",
  "/home",
  {
    text: "Changelogs",
    icon: "note",
    prefix: "/updates/",
    link: "/updates",
    children: ["3-0-1", "3-0-0", "2-6-5"],
  },
]);
