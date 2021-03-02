module.exports = {
  title: 'Vanalso\`s Blog',
  description: '个人技术博客',

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    lastUpdated: '最后更新：',
    smoothScroll: true,
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '前端',
        items: [{
          text: 'Css',
          link: '/web/css'
        }, {
          text: 'JavaScript',
          link: '/web/javascript'
        }, {
          text: 'Vue',
          link: '/web/vue'
        }]
      },
      {
        text: '后台',
        items: [{
          text: 'Php',
          link: '/server/php'
        }, {
          text: 'NodeJs',
          link: '/server/nodejs'
        }]
      },
      {
        text: '工具',
        items: [{
          text: 'VSCode',
          link: '/tools/vscode'
        }]
      },
      {
        text: '系统',
        items: [{
          text: 'Mac OS',
          link: '/os/mac'
        }]
      },
      {
        text: 'Bug',
        items: [{
          text: 'Bug',
          link: '/bug/bug'
        }]
      },
      {
        text: 'Github',
        link: 'https://github.com/harrison'
      },
    ],
    sidebar: 'auto'
  }
}