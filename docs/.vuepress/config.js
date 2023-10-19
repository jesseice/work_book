import { defineUserConfig, defaultTheme } from "vuepress";
export default defineUserConfig({
  lang: "zh-CN",
  title: "不忘初心",
  description: "记录遇到的问题以及解决方法",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "文档",
        link: "/record/noCode",
      },
    ],
    sidebar: {
      "/record": [
        {
          text: "非代码问题",
          link: "/record/noCode",
          // children: [{ text: "1_a", link: "/guide/one/one_a" }],
        },
        { text: "代码相关问题", link: "/record/code" },
        {
          text: "JavaScript",
          link: "/record/js",
          children: [{ text: "基础问题", link: "/record/js/basic" }],
        },
      ],
    },
  }),
});
