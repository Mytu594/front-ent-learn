module.exports = {
    title: 'Fiona Web',
    description: 'Fiona Web',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'Fiona 的 Web 博客',
                items: [
                    { text: 'Github', link: 'https://github.com/Mytu594' },
                    { text: '掘金', link: 'https://juejin.cn/user/2518321562927805/posts' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: true, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/01 Html+CSS老师',
                collapsable: true, // 不折叠
                children: [
                    { title: "HTMl+CSS", path: "/handbook/01 Html+CSS老师" },
                    { title: "js基础", path: "/handbook/JS第三天" },
                    { title: "js进阶", path: "/handbook/JS进阶第1天" },
                    { title: "js高级", path: "/handbook/ES6第1天" },
                    { title: "Nodejs", path: "/handbook/NodeJs" },
                    { title: "JQuery", path: "/handbook/JQ第1天" },
                    { title: "Webpack", path: "/handbook/Webpack01" },
                    { title: "Vue单词", path: "/handbook/Vue单词抄写" },
                    { title: "Vue基础", path: "/handbook/Vue第1天" },
                    { title: "Vue进阶", path: "/handbook/Vue进阶前3天" },
                    { title: "Vue项目", path: "/handbook/Vue项目前4天" },
                    { title: "Vue总结", path: "/handbook/明辉vue总结" },
                    { title: "Vuex总结", path: "/handbook/明辉vuex总结" },
                    { title: "项目总结", path: "/handbook/积分商城Vue项目问题" },
                    { title: "小程序", path: "/handbook/小程序day01" },
                    { title: "Uni-app", path: "/handbook/uniapp01" },
                    { title: "Vue3基础", path: "/handbook/vue3基础总结" },
                    { title: "Vue3项目", path: "/handbook/vue3项目day01_day02" },
                    { title: "Vue3项目总结", path: "/handbook/电商管理系统后台总结" },
                    { title: "React基础", path: "/handbook/React基础" },
                    { title: "React项目", path: "/handbook/react项目积累" },
                    { title: "Typescript", path: "/handbook/ts前2天总结" },
                ],
            },
            {
                title: '其他',
                path: '/handbook/正则表达式',
                collapsable: true, // 不折叠
                children: [
                    { title: "正则表达式", path: "/handbook/正则表达式" },
                    { title: "项目小技巧", path: "/handbook/项目小技巧" },
                    { title: "vscode常见快捷键", path: "/handbook/vscode常见的快捷键" },
                ]
            },
        ],
        theme: 'reco'
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    base: '/front-ent-learn/',
}