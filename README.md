# WAVE — Explore the Future of Blue

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

WAVE Shark Series 官方营销网站 — 一款面向海洋探索与水产监测的系留式水下无人机产品展示页。

> **Explore the Future of Blue**

---

## 项目简介

本仓库是 **WAVE Technologies** 旗下 **Shark Series** 水下无人机的品牌官网源码。网站采用深海 cinematic 视觉风格，完整展示产品外观、核心能力、应用场景与团队信息，支持 PDF 资料下载，并针对 Cloudflare Pages 静态部署做了优化。

### 主要功能

- **Hero 首屏** — 电影感水下背景、动态光效与粒子装饰、产品主视觉
- **Product Showcase** — 产品解剖图 + 交互热点（LED、机身、推进器、摄像头）
- **Mission** — 品牌使命与四大应用支柱
- **Capabilities** — 核心硬件组件特写展示
- **Impact Data** — 关键性能数据可视化
- **Applications** — 海洋监测、潜水、水产、科研四大场景
- **Documents** — YES Program / HCBC Team PDF 下载
- **Team** — 团队介绍

### 技术亮点

- Next.js 15 App Router + **静态导出**（`output: "export"`）
- Framer Motion 滚动动画与交互（Hydration 安全处理）
- Tailwind CSS 4 深色海洋主题
- 响应式布局，桌面 / 移动端适配
- 零后端依赖，适合 Cloudflare Pages / 任意静态托管

---

## 在线预览

**官网：** [https://waveunderwater.com](https://waveunderwater.com)

本地开发：

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)

---

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 15、React 19 |
| 语言 | TypeScript |
| 样式 | Tailwind CSS 4 |
| 动画 | Framer Motion |
| 部署 | Cloudflare Pages（静态 `out/`） |

---

## 项目结构

```
WAVE/
├── src/
│   ├── app/                # 页面入口、布局、全局样式
│   ├── components/
│   │   ├── layout/         # Navbar、Footer
│   │   ├── sections/       # Hero、Mission、ProductShowcase…
│   │   └── ui/             # 动效、Logo、粒子等通用组件
│   ├── hooks/              # useHydrated 等
│   └── lib/                # assets 映射、产品热点坐标
├── public/                 # 部署用静态资源
│   ├── assets/             # Logo、透明产品裁切图
│   ├── documents/          # 可下载 PDF
│   └── wave-assets/ai/     # 网站正式用图
├── materials/              # 源素材（本地存档，默认不提交 Git）
└── dev/                    # 开发临时文件
```

---

## 开发命令

```bash
npm install
npm run dev          # 开发（自动清 .next 缓存）
npm run dev:fast     # 快速开发
npm run dev:reset    # 杀进程 + 清缓存 + 重启
npm run build        # 生产构建 → out/
npm run preview      # 本地预览 out/
npm run lint         # ESLint
```

> 打包前请先停止 `npm run dev`，避免 `.next` 缓存冲突。

---

## 部署到 Cloudflare Pages

### 方式一：Git 自动部署（推荐）

1. 将本仓库 Push 到 GitHub
2. Cloudflare Dashboard → **Workers & Pages** → **Connect to Git**
3. 构建设置：

| 配置项 | 值 |
|--------|-----|
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `20` |

### 方式二：手动上传

```bash
npm run build
# 将 out/ 文件夹内容上传到 Cloudflare Pages
```

### 方式三：Wrangler CLI

```bash
npm run build
npx wrangler pages deploy out --project-name=wave
```

---

## 仓库

- **官网：** [https://waveunderwater.com](https://waveunderwater.com)
- **GitHub：** [https://github.com/CrazyAshes/WaveWebsite](https://github.com/CrazyAshes/WaveWebsite)

---

## License

Private — © WAVE Technologies. All rights reserved.
