(() => {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("未找到 content.js，请确认文件已上传。 ");
    return;
  }

  const $ = (selector) => document.querySelector(selector);
  const escapeHTML = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[char]);

  const safeUrl = (value = "") => {
    const url = String(value).trim();
    if (!url || /^javascript:/i.test(url)) return "";
    return escapeHTML(url);
  };

  const setText = (selector, value) => {
    const node = $(selector);
    if (node) node.textContent = value || "";
  };

  const renderMedia = (media = {}) => {
    const type = media.type || "placeholder";
    const file = safeUrl(media.file);
    if (type === "image" && file) {
      return `<img src="${file}" alt="${escapeHTML(media.alt || media.label || "项目画面")}" loading="lazy">`;
    }
    if (type === "video" && file) {
      const poster = safeUrl(media.poster);
      return `<video controls preload="metadata"${poster ? ` poster="${poster}"` : ""}><source src="${file}" type="video/mp4">浏览器不支持视频播放。</video>`;
    }
    return `<div class="media-placeholder"><div><strong>${escapeHTML(media.label || "PROJECT MEDIA")}</strong>${escapeHTML(media.note || "待上传")}</div></div>`;
  };

  const renderProjects = () => {
    $("#projects-list").innerHTML = data.projects.map((project) => `
      <article class="project reveal">
        <div class="project-visual">${renderMedia(project.media)}</div>
        <div class="project-copy">
          <div class="project-meta"><span>${escapeHTML(project.category)}</span><span>${escapeHTML(project.duration)}</span></div>
          <h3>${escapeHTML(project.title)}</h3>
          <p>${escapeHTML(project.description)}</p>
          <ul class="tags">${project.tags.map((tag) => `<li>${escapeHTML(tag)}</li>`).join("")}</ul>
          <a class="case-link" href="${safeUrl(project.link) || "#contact"}">${escapeHTML(project.linkText)}</a>
        </div>
      </article>`).join("");
  };

  const renderShorts = () => {
    $("#shorts-list").innerHTML = data.shorts.map((item, index) => {
      const video = safeUrl(item.video);
      const poster = safeUrl(item.poster);
      const media = video
        ? `<video controls preload="metadata" playsinline${poster ? ` poster="${poster}"` : ""}><source src="${video}" type="video/mp4">浏览器不支持视频播放。</video>`
        : `<span class="short-play" aria-hidden="true">▶</span><div class="short-status"><span>${escapeHTML(item.ratio || "9:16")}</span><span>${escapeHTML(item.status || "待上传")}</span></div>`;
      return `<article class="short-card" data-video-slot="${String(index + 1).padStart(2, "0")}">
        <div class="short-frame">${media}</div>
        <div class="short-info"><h3>${escapeHTML(item.title)}</h3><span>${escapeHTML(item.role)}</span></div>
      </article>`;
    }).join("");
  };

  setText("#site-name", data.site.name);
  setText("#hero-eyebrow", data.hero.eyebrow);
  $("#hero-title").innerHTML = `${escapeHTML(data.hero.title)}<span>${escapeHTML(data.hero.outlinedTitle)}</span>`;
  setText("#hero-copy", data.hero.copy);
  $("#hero-image").src = safeUrl(data.hero.image);
  $("#hero-image").alt = data.hero.imageAlt || "";
  $("#resume-button").href = safeUrl(data.site.resumeFile);
  setText("#projects-intro", data.sectionText.projects);
  setText("#shorts-intro", data.sectionText.shorts);
  renderProjects();
  renderShorts();

  $("#workflow-list").innerHTML = data.workflow.map((step, index) => `
    <div class="step"><span class="step-num">${String(index + 1).padStart(2, "0")}</span><h3>${escapeHTML(step.title)}</h3><p>${escapeHTML(step.copy)}</p></div>`).join("");
  setText("#about-lead", data.about.lead);
  setText("#about-side-title", data.about.sideTitle);
  setText("#about-side-copy", data.about.sideCopy);
  $("#tools-list").innerHTML = data.tools.map((tool) => `<div class="tool"><strong>${escapeHTML(tool.name)}</strong><span>${escapeHTML(tool.detail)}</span></div>`).join("");

  const email = data.contact.email || "";
  const contactLinks = [];
  if (email) {
    contactLinks.push(`<a href="mailto:${safeUrl(email)}"><span>邮箱</span><span>${escapeHTML(data.contact.emailLabel || email)} ↗</span></a>`);
  }
  if (data.contact.wechat) {
    contactLinks.push(`<a href="#contact"><span>微信</span><span>${escapeHTML(data.contact.wechat)} ↗</span></a>`);
  }
  contactLinks.push(`<a href="${safeUrl(data.site.resumeFile)}" download><span>简历</span><span>下载 Word ↘</span></a>`);
  $("#contact-links").innerHTML = contactLinks.join("");
  setText("#footer-name", data.site.footerName);
  setText("#footer-role", data.site.footerRole);

  const menu = $(".menu");
  const nav = $(".nav-links");
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }));

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
})();
