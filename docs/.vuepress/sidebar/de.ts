import { sidebar } from "vuepress-theme-hope";

export const de = sidebar({
  "/install/": [
    {
      icon: "enum",
      text: "Systemvoraussetzungen",
      prefix: "requirements/",
      link: "requirements/",
      collapsible: true,
      //children: ["introduction", "architecture", "quick-guide"],
    },
    {
      icon: "shell",
      text: "Installation",
      prefix: "install/",
      link: "install/",
      collapsible: true,
      //children: ["introduction", "architecture", "quick-guide"],
    },
    {
      icon: "style",
      text: "Einrichtung & Inbetriebnahme",
      prefix: "setup/",
      link: "setup/",
      collapsible: true,
      //children: ["introduction", "architecture", "quick-guide"],
    },
  ],

  "/user/": [
    {
      icon: "article",
      text: "Einführung",
      prefix: "introduction/",
      link: "introduction/",
      collapsible: true,
      children: ["features", "approve-ui"],
    },
    {
      icon: "article",
      text: "Projekte",
      prefix: "projects/",
      link: "projects/",
      collapsible: true,
      children: ["basics", "create-project", "project-workflow", "search-project", "edit-project", "data-privacy"],
    },
    {
      icon: "article",
      text: "Realms und Rollen",
      prefix: "realms-roles/",
      link: "realms-roles/",
      collapsible: true,
      children: ["basics", "realm-management"],
    },
    {
      icon: "article",
      text: "Verwaltung",
      prefix: "management/",
      link: "management/",
      collapsible: true,
      children: ["dates", "material-sample-types", "container-units", "biosample", "status", "persons", "clinic", "mainFocus", "inquiry", "services", "tags", "tiles", "todo", "publication", "patientData"]
    },
    {
      icon: "article",
      text: "Einstellungen",
      prefix: "settings/",
      link: "settings/",
      collapsible: true,
      children: ["overview"],

    },
  ],

  "/dev/": [
    {
      icon: "article",
      text: "Architektur",
      prefix: "architecture/",
      link: "architecture/",
      collapsible: true,
      //children: ["features", "approve-ui"],
    },
    {
      icon: "article",
      text: "VueJS Frontend anpassen",
      prefix: "vuejs/",
      link: "vuejs/",
      collapsible: true,
      //children: ["basics", "create-project", "search-project", "edit-project", "data-privacy"],
    }
  ],

  "/updates/": [
    {
      text: "Updates",
      icon: "note",
      prefix: "",
      link: "/updates",
      collapsible: true,
      children:
          [
            "3-5-0",
            "3-4-0",
            "3-3-0",
            "3-2-0",
            "3-1-0",
            "3-0-2",
            "3-0-1",
            "3-0-0",
            "2-6-5",
            "2-6-4",
            "2-6-3",
            "2-6-2",
            "2-6-1",
            "2-6-0",
            "2-5-3",
            "2-5-2",
            "2-5-1",
            "2-5-0"
          ],
    },
  ],
  "/": [
    "",
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
      text: "Entwicklung",
      icon: "config",
      prefix: "dev/",
      link: "dev/",
      collapsible: true,
      children: ["vuejs"],
    },
  ],
});
