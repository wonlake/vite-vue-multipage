import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import {glob} from 'glob'
//const glob = require('glob')

let pages: any = {}
function getPages() {
  glob.sync('./src/pages/*/*.html').forEach((filepath:string) => {
    filepath = filepath.replace(/\\/g, '/')
    let fileList = filepath.split('/');
    let fileName = fileList[fileList.length - 2];
    pages[fileName] = filepath
  })
  glob.sync('./src/*/*.html').forEach((filepath:string) => {
    filepath = filepath.replace(/\\/g, '/')
    let fileList = filepath.split('/');
    let fileName = fileList[fileList.length - 2];
    pages[fileName] = filepath
  })
  return pages
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './src/pages',
  base: '/',     
  publicDir: "../../public",
  server: {
    host: 'localhost',        // 指定服务器应该监听哪个 IP 地址
    port: 8080,               // 端口
    strictPort: false, // 若端口已被占用,尝试下移一格端口
    open: true,
  },
  build: {
    outDir: '../../wwwroot',// 指定输出路径（相对于 项目根目录)
    sourcemap: true, // 构建后是否生成 source map 文件
    chunkSizeWarningLimit: 1500, // 规定触发警告的 chunk(文件块) 大小
    minify: 'esbuild',
    rollupOptions: {  // 自定义底层的 Rollup 打包配置
      input: getPages(),
    },
    emptyOutDir: true,
  }
})
