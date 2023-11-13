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
      collapsible: true,
      children: ["introduction", "architecture", "quick-guide"],
    },
    {
      text: "Features",
      icon: "note",
      prefix: "features/",
      link: "features/",
      collapsible: true,
      children: ["advanced-search", "todos", "reassign", "tiles", "dashboard-links", "dataPrivacy"],
    },
    {
      icon: "guide",
      text: "Navigation",
      prefix: "navigation/",
      link: "navigation/",
      collapsible: true,
      children: ["registration", "login", "dashboard", "view-project", "create-project", "edit-project", "lists"],
    },
    {
      text: "Verwaltung",
      icon: "config",
      prefix: "management/",
      link: "management/",
      collapsible: true,
      children: ["mainFocus", "inquiry", "patientData", "biosample", "services", "tiles"],
    },
    {
      text: "Changelogs",
      icon: "note",
      prefix: "updates/",
      link: "updates/",
      collapsible: true,
      children: ["3-4-0", "3-3-0","3-2-0","3-1-0","3-0-2", "3-0-1", "3-0-0", "2-6-5", "2-6-4", "2-6-3", "2-6-2","2-6-1", "2-6-0", "2-5-3","2-5-2","2-5-1", "2-5-0"],
    },
    {
      text: "Entwicklung",
      icon: "config",
      prefix: "developing/",
      link: "developing/",
      collapsible: true,
      children: ["vuejs"],
    },
  ],
});
