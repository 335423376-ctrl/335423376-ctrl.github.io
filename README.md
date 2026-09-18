# 作品集网站维护说明

网站地址：https://335423376-ctrl.github.io/

## 最常用：修改文字和作品

只编辑 `content.js`。不要修改 `index.html` 或 `app.js`，除非需要改版。

1. 打开 GitHub 仓库中的 `content.js`。
2. 点击右上角铅笔图标。
3. 修改引号内的文字。
4. 点击 `Commit changes...` 提交。
5. 等待约 1—3 分钟，强制刷新网站。

## 上传短视频

1. 在仓库首页点击 `Add file` → `Upload files`。
2. 上传 MP4 和可选封面图。文件名建议只使用英文、数字和短横线，例如：
   - `short-01.mp4`
   - `short-01-cover.jpg`
3. 打开 `content.js`，找到 `shorts`。
4. 将对应条目改成：

```js
{
  title: "作品名称",
  role: "剪辑 / AI视觉",
  ratio: "9:16",
  status: "已上线",
  video: "short-01.mp4",
  poster: "short-01-cover.jpg"
}
```

没有封面时，`poster` 保持空字符串 `""` 即可。

## 新增一条短视频

在 `shorts: [ ... ]` 中复制一个完整的 `{ ... }` 条目，并在前一个条目末尾保留英文逗号。页面会自动生成新卡片。

## 给核心项目添加图片

在项目的 `media` 中填写：

```js
media: {
  type: "image",
  file: "project-01.jpg",
  alt: "项目画面说明"
}
```

## 给核心项目添加视频

```js
media: {
  type: "video",
  file: "project-01.mp4",
  poster: "project-01-cover.jpg"
}
```

## 文件用途

- `content.js`：文字、项目、短视频、联系方式等内容。
- `index.html`：页面结构。
- `app.js`：根据 `content.js` 自动生成页面内容。
- `ink-film-hero.webp`：首页主视觉。
- `resume.docx`：可下载简历。

## 注意事项

- 所有标点必须使用英文代码标点：逗号 `,`、冒号 `:`、引号 `"`。
- 不要删除对象外层的花括号 `{}` 或数组外层的方括号 `[]`。
- GitHub 不适合存放很大的视频。单个视频较大时，建议压缩后上传，或使用视频平台的播放链接再由开发者接入。
