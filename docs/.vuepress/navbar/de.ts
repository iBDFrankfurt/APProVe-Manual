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
        children: ["", "3-6-0", "3-5-0", "3-4-0", "3-3-0"],
    },
]);
