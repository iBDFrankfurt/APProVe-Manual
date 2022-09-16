import { sidebar } from "vuepress-theme-hope";

export const de = sidebar({
  "/": [
    "",
    "home",
    {
      icon: "any",
      text: "Einführung",
      prefix: "introduction/",
      link: "introduction/",
      children: ["introduction", "architecture"],
    },
    {
      text: "Features",
      icon: "note",
      prefix: "features/",
      link: "features/",
      children: ["reassign"],
    },
    {
      icon: "guide",
      text: "Navigation",
      prefix: "navigation/",
      link: "navigation/",
      children: ["registration", "login", "dashboard", "view-project", "create-project", "edit-project", "lists"],
    },
    {
      text: "Verwaltung",
      icon: "config",
      prefix: "management/",
      link: "management/",
      children: ["mainFocus", "inquiry", "patientData", "biosample", "services"],
    },
    {
      text: "Changelogs",
      icon: "note",
      prefix: "updates/",
      link: "updates/",
      children: ["2-6-2","2-6-1", "2-6-0", "2-5-3","2-5-2","2-5-1", "2-5-0"],
    },
  ],
});
