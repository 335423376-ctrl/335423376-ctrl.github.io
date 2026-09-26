/*
  网站内容集中配置文件
  修改引号内的文字即可；新增作品时复制一个完整的 { ... } 对象。
  图片、视频文件先上传到仓库，再把 file 改成对应文件名。
*/
window.PORTFOLIO_DATA = {
  site: {
    name: "HJZ PORTFOLIO",
    footerName: "© HJZ",
    footerRole: "Film Editing · AI Visual Production",
    resumeFile: "resume.docx"
  },

  hero: {
    eyebrow: "Film Editing · AI Visual Production",
    title: "剪辑",
    outlinedTitle: "重组叙事",
    copy: "聚焦影视后期与AI视觉制作。以叙事判断组织镜头与节奏，熟悉从角色设计、分镜规划、画面生成到剪辑成片的完整流程。",
    image: "ink-film-hero.webp",
    imageAlt: "抽象水墨在电影画幅中流动，呈现传统视觉与数字影像融合"
  },

  sectionText: {
    projects: "两段经历分别对应长篇幅AI影像的后期组织，以及从创意到成片的AI动画全流程实践。",
    shorts: "用于展示竖屏短视频、短剧切片与AI内容样片。后续可以按岗位需要持续补充和替换。"
  },

  projects: [
    {
      title: "AI电视剧集样片",
      category: "学院AI电视剧集项目",
      duration: "约20分钟",
      description: "负责剪辑及后期工作。围绕剧本内容完成素材筛选、镜头组织、段落衔接和节奏调整，并处理AI生成素材中的人物动作、镜头连续性与画面稳定性问题。",
      tags: ["素材筛选", "叙事剪辑", "字幕包装", "基础调色", "声音处理"],
      linkText: "索取完整样片 →",
      link: "#contact",
      media: {
        type: "video",
        file: "https://1491699321.vod-qcloud.com/a20c852fvodcq1491699321/146b21da5001834821409380391/c2aEtc8ztIoA.mp4",
        poster: "gandayying-feature-cover.webp",
        label: "SELECTED EDIT / VIDEO",
        note: "片头与两段精选剪辑 · 02:50"
      }
    },
    {
      title: "《问心——万有引力》",
      category: "学院奖AI相关竞赛参赛项目",
      duration: "完整片 06:14",
      description: "担任导演及项目负责人，带领团队完成创意、人物设计、分镜、AI生成与后期成片。通过多轮素材筛选和剪辑处理人物一致性、动作衔接及画风统一问题。",
      tags: ["导演", "团队统筹", "角色设计", "分镜规划", "AI视频生成"],
      linkText: "查看制作过程 →",
      link: "#workflow",
      media: {
        type: "video",
        file: "https://1491699321.vod-qcloud.com/a20c852fvodcq1491699321/93ebfc5c5001834821903675054/taC9Yq41AcsA.mp4",
        poster: "https://1491699321.vod-qcloud.com/a20c852fvodcq1491699321/93ebfc5c5001834821903675054/ORBqur.jpeg",
        label: "AI INK SHORT FILM / VIDEO",
        note: "精选片段 · 01:18"
      }
    }
  ],

  shorts: [
    { title: "短视频样片 01", role: "[类型 / 职责]", ratio: "9:16", status: "待上传", video: "", poster: "" },
    { title: "短视频样片 02", role: "[类型 / 职责]", ratio: "9:16", status: "待上传", video: "", poster: "" },
    { title: "短视频样片 03", role: "[类型 / 职责]", ratio: "9:16", status: "待上传", video: "", poster: "" }
  ],

  workflow: [
    { title: "创意与剧本", copy: "确定主题、人物关系、情节节点与视觉方向。" },
    { title: "角色与分镜", copy: "整理角色三视图，以手绘文字分镜明确镜头需求。" },
    { title: "画面生成", copy: "通过提示词与参考图迭代角色、场景和关键帧。" },
    { title: "动态生成", copy: "测试不同平台，按镜头目标生成和筛选动态素材。" },
    { title: "剪辑与交付", copy: "重建节奏和连续性，完成声音、字幕与画面处理。" }
  ],

  about: {
    lead: "以叙事理解为基础，把剪辑、声音、画面与AI工具组织成稳定而可迭代的影像工作流。",
    sideTitle: "内容观察",
    sideCopy: "持续关注TikTok及中国大陆短视频平台的热门短剧，从题材、开场钩子、冲突密度和剪辑节奏等维度进行基础分析。"
  },

  tools: [
    { name: "DaVinci Resolve", detail: "剪辑 · 基础调色 · 声音" },
    { name: "剪映", detail: "短视频剪辑 · 字幕包装" },
    { name: "ChatGPT / Gemini", detail: "创意辅助 · 角色方案" },
    { name: "即梦 Seedance 2.0", detail: "AI动态画面生成" },
    { name: "TapNow / Seko", detail: "流程测试 · 效果比较" },
    { name: "Cnimea Studio", detail: "AI影视制作实验" }
  ],

  contact: {
    email: "",
    emailLabel: "",
    wechat: "[微信号]"
  }
};
