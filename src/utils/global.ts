// Global Site Data
// Current Year
const currentYear = new Date().getFullYear();
// Site Data
export const siteData = {
    website: "Pixel Patina",
    author: "Filip Štefičar",
    developer: "Filip Steficar",
    developerURL: "https://pixelpatina.com",
    lang: "en-US",
    ogLang: "en_US",
    langSchema: "en",
    copyright: `Pixel Patina - ${currentYear} | All Rights Reserved`,
    url: "https://pixelpatina.com",
    cmsURL: "#",
    graphQL: "#"
}
// Define the MenuItem Interface
interface MenuItem {
    label: string
    href: string
    isExternal?: boolean
}
// Main Menu
export const mainMenu: MenuItem[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Gear",
        href: "/gear"
    },
    {
        label: "Community",
        href: "/community"
    }
]
// Contact Info
export const contactInfo = {
    email: "info@ntiling.ca"
}