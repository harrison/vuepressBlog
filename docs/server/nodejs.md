# Node.js

## 启动一个web服务

``` javascript
// 引入http模块
const http = require('http')
// 从http模块创建一个服务
const server = http.createServer((req, res) => {
  res.end('hello 1')
})

// 监听本地3000端口
server.listen(3000, '127.0.0.1', () => {
  console.log('服务启动成功 http://127.0.0.1:3000')
})

```

## 获取系统信息

``` javascript
// 引入os
const os = require('os')

// 获取cpu数量
const cpu = os.cpus()
console.log('cpu数量', cpu.length)

// 获取内存总量
const totalMem = os.totalmem()
console.log('内存总量', totalMem / 1024 / 1024 / 1024)

// 获取可用内存
const freeMem = os.freemem()
console.log('内存可用量', freeMem / 1024 / 1024 / 1024)
```

## nodemon

安装

``` shell
npm install nodemon -D
```

-D 表示在DEV环境中安装

修改启动命令为nodemon

``` javascript
// package.json
"******": "nodemon ******"
```

## 使用nrm管理npm源

安装

``` shell
npm install nrm -g
```

``` shell
# 查看源列表
nrm ls
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/

# 查看当前所用源
nrm current

# 使用源
nrm use <registry>
```


## Express
Express是一个基于Nodejs的web开发框架

### 安装
``` shell
npm install express -S
```

### 使用
``` javascript
const express = require('express')

const app = express()

app.get('/name/:age', (req, res) => {
  let {
    age
  } = req.params
  res.json({
    name: '张三',
    age
  })
})

app.listen(3000, () => {
  console.log('服务启动成功')
})
```

### express API

  1.不限请求类型
  ``` javascript
  app.all('/demo',(req.res)=>{})
  // or
  app.use('/demo',(req.res)=>{})
  ```
  2.不限请求路径
  ``` javascript
  app.all('*',(req.res)=>{})
  // or
  app.use((req.res)=>{})
  ```