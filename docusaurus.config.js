// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
const fs = require('fs');const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Khoá học Docusaurus',
  tagline: 'Dinosaurs thật tuyệt vời!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [require.resolve('docusaurus-lunr-search')],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0, // Đặt giá trị 0 để ẩn hoàn toàn sidebar
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // announcementBar: {
      //   id: 'announcementBar-v3.2', // Increment on change
      //   content: `🎉️ <b>Khai giảng khoá học Python chứng khoán K9 từ 8/12/2024 <a target="_blank" href="https://vnstocks.com/lp-khoa-hoc-python-chung-khoan/"></a></b>. Đăng ký ngay! 🥳️`,
      // },

      announcementBar: {
        id: 'image_banner', // Any value that will identify this message.
        content:
          '<a href="https://vnstocks.com/lp-khoa-hoc-python-chung-khoan"><img src="https://vnstocks.com/img/python_chung_khoan_banner.png" alt="Banner" class="announcement-bar-image" /></a>',
        backgroundColor: '#fafbfc', // Defaults to `#fff`.
        textColor: '#091E42', // Defaults to `#000`.
        isCloseable: true, // Defaults to `true`.
      },

      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Awesome Docusaurus',
        logo: {
          alt: 'Awesome Docusaurus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/intro',
            position: 'left',
            label: 'Tutorial',
            activeBaseRegex: `/docs/intro`,
          },
          {to: '/blog', 
            label: 'Blog', 
            position: 'left',
            activeBaseRegex: `/blog`,
          },
          {
            label: 'Thư viện mẫu',
            position: 'left',
            activeBaseRegex: `/thu-vien-mau`,
            items: [
              {
                to: '/demo/cards', 
                label: 'Demo - Tất cả', 
              },
              {
                to: '/demo/about', 
                label: 'Demo - Về chúng tôi', 
              },
              {
                to: '/demo/featured-products', 
                label: 'Demo - Sản phẩm nổi bật + CTA', 
              },
              {
                to: '/demo/faq', 
                label: 'Demo - CTA & FAQ', 
              },
              {
                to: '/demo/pricing', 
                label: 'Demo - Bảng giá', 
              },
              {
                to: '/markdown/page-with-subscribe-box', 
                label: 'Demo - Đăng ký bản tin', 
              },
              {
                to: '/markdown/image-popup', 
                label: 'Demo - Popup ảnh', 
              },
              {
                to: '/markdown/media-embeded', 
                label: 'Demo - Nhúng Video, PDF, Notebook', 
              },
              {
                to: '/demo/slider', 
                label: 'Demo - Slider trình chiếu', 
              },
              {
                to: '/demo/image-gallery', 
                label: 'Demo - Thư viện ảnh', 
              },
              {
                to: '/markdown/page-with-subscribe-box', 
                label: 'Trang Markdown & Subscribe', 
              },
              {
                to: '/markdown/page-with-faq', 
                label: 'Trang Markdown & FAQ', 
              },
              {
                to: '/charts/bar-annotation',
                label: 'Demo - Vẽ đồ thị'
              },
              {
                to: '/demo/text-reveal', 
                label: 'Demo - Cuộn chữ', 
              },
              {
                to: '/markdown/testimonial/', 
                label: 'Testimonial Markdown', 
              },
              {
                to: '/demo/testimonial/', 
                label: 'Testimonial JS', 
              },
              {
                to: '/docs/demo/', 
                label: 'Nguồn cảm hứng', 
              },
            ],
          },
          {
            label: 'SDKs',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [
              {
                type: 'html',
                value: sdksHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          
          {
            href: 'https://facebook.com/yourpage',
            position: 'right',
            className: 'navbar-icon fab fa-facebook-f',
            'aria-label': 'Facebook',
          },
          {
            href: 'https://m.me/yourprofile',
            position: 'right',
            className: 'navbar-icon fab fa-facebook-messenger',
            'aria-label': 'Messenger',
          },
          {
            href: 'https://t.me/yourprofile',
            position: 'right',
            className: 'navbar-icon fab fa-telegram-plane',
            'aria-label': 'Telegram',
          },
          {
            href: 'https://youtube.com/yourchannel',
            position: 'right',
            className: 'navbar-icon fab fa-youtube',
            'aria-label': 'YouTube',
          },
          {
            href: 'https://github.com/yourrepository',
            position: 'right',
            className: 'navbar-icon fab fa-github',
            'aria-label': 'GitHub',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Chia sẻ kiến thức',
            items: [
              {
                label: 'Hướng dẫn Obsidian',
                to: 'https://learn-anything.vn/kien-thuc/obsidian/',
              },
              {
                label: 'Hướng dẫn Python',
                to: 'https://learn-anything.vn/kien-thuc/category/python',
              },
              {
                label: 'Hướng dẫn Công nghệ',
                to: 'https://learn-anything.vn/kien-thuc/cong-nghe/visual-studio-code-ung-dung-lap-trinh-da-dung',
              },
              {
                label: 'Phát triển bản thân',
                to: 'https://learn-anything.vn/kien-thuc/phat-trien-ban-than',
              },
            ],
          },
          {
            title: 'Khoá học',
            items: [
              {label: 'Tạo website với Docusaurus',
                to: '/lp-khoa-hoc-tao-website-docusaurus-seo/',
              },
              {
                label: 'Python Web Scraping',
                to: 'https://course.learn-anything.vn/courses/python-web-scraping-thu-thap-du-lieu-tu-internet/',
              },
              {
                label: 'Python chứng khoán K8',
                to: 'https://course.learn-anything.vn/courses/python-phan-tich-du-lieu-tao-bot-chung-khoan-k8/',
              },
            ],
          },
          {
            title: 'Giới thiệu',
            items: [
              {
                label: 'Giới thiệu',
                to: 'https://learn-anything.vn/gioi-thieu',
              },
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Tài trợ dự án',
                href: 'https://github.com/sponsors/thinh-vu',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Awesome Docusaurus, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
