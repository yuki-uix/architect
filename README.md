# 建筑构造交互式学习平台

一个基于Next.js和Three.js的建筑构造交互式学习平台，通过3D可视化帮助用户理解复杂的建筑构造原理。

## 功能特点

- 🏗️ **3D交互式构造展示** - 使用Three.js实现屋顶、墙体、基础的3D分解展示
- 📱 **响应式设计** - 支持桌面端和移动端访问
- ⚡ **SSG静态生成** - 使用Next.js的静态站点生成，提升加载速度
- 🎨 **现代化UI** - 采用Tailwind CSS设计，界面简洁美观
- 🔍 **SEO友好** - 静态生成页面，有利于搜索引擎优化

## 技术栈

- **前端框架**: Next.js 14
- **3D渲染**: Three.js
- **样式**: Tailwind CSS
- **字体**: Inter + Noto Sans SC
- **部署**: Netlify

## 项目结构

```
architect/
├── components/          # React组件
│   ├── Navigation.js    # 导航组件
│   ├── ModuleCard.js    # 模块卡片组件
│   ├── InfoPanel.js     # 信息面板组件
│   ├── Roof3D.js        # 屋顶3D组件
│   ├── Wall3D.js        # 墙体3D组件
│   └── Foundation3D.js  # 基础3D组件
├── data/                # 数据文件
│   └── constructionData.js
├── pages/               # 页面文件
│   ├── index.js         # 主页
│   ├── roof.js          # 屋顶构造页面
│   ├── wall.js          # 墙体构造页面
│   ├── foundation.js    # 基础构造页面
│   └── _app.js          # 应用入口
├── styles/              # 样式文件
│   └── globals.css
├── public/              # 静态资源
├── netlify.toml         # Netlify配置
└── next.config.js       # Next.js配置
```

## 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 构建部署

### 本地构建
```bash
npm run build
```

### Netlify部署

1. 将代码推送到GitHub仓库
2. 在Netlify中连接GitHub仓库
3. 设置构建命令：`npm run build`
4. 设置发布目录：`.next`
5. 点击部署

### 环境变量

无需特殊环境变量配置。

## 功能模块

### 1. 屋顶构造
- 展示平屋面构造层次
- 包含混凝土保护层、防水层、保温层、隔汽层、结构层
- 支持3D分解和复位动画

### 2. 墙体构造
- 展示外墙保温构造层次
- 包含内饰面层、抹灰层、结构墙体、保温层、外饰面层
- 支持3D分解和复位动画

### 3. 基础构造
- 展示独立柱下基础构造
- 包含柱、承台、垫层、地基土
- 支持3D分解和复位动画

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 许可证

MIT License
