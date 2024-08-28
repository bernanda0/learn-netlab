// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LEARN.NETLAB",
  tagline: "Repository for NETLAB modules.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://netlabdte.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  organizationName: "netlabdte", // Usually your GitHub org/user name.
  projectName: "", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local")} */
      ({
        hashed: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "Netlab Logo",
          src: "img/logo_dark.svg",
          srcDark: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Modules",
          },
          // { to: "/blog", label: "Blog", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              // di hide dulu
              // {
              //   label: "Module",
              //   to: "/docs/category/SBD",
              // },
              {
                label: "OOP",
                to: "/docs/category/OOP",
              },
              {
                label: "JARKOM",
                to: "/docs/category/JARKOM",
              }
            ],
          },
          {
            title: "Contact and Social Media",
            items: [
              {
                label: "netlabdte2023@gmail.com",
                href: "https://mail.google.com/mail/u/0/#inbox?compose=new",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/netlab.dteftui",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@NetlabDTE2023",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/bernanda0",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Learn with Netlab, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
