import {navbar} from "vuepress-theme-hope";

export const de = navbar([
    "/",
    "/install/README.md",
    "/user/README.md",
    "/dev/README.md",
    {
        text: "Changelogs",
        icon: "note",
        prefix: "/updates/",
        link: "/updates",
        target: '_self',
        children: ["", "3-9-0", "3-8-0", "3-7-0", "3-6-2"],
    },
]);
