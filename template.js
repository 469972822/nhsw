import { siteData, imageAt } from './site-data.js';

const bodyClass = location.pathname.includes('about') || location.pathname.includes('shiyanyi') || location.pathname.includes('solutions') || location.pathname.includes('contact') ? 'page' : 'home';

document.body.classList.add(bodyClass);

const nav = document.querySelector('[data-nav]');
nav.innerHTML = siteData.nav.map(item => {
  const current = location.pathname.endsWith(item.href.replace('./', '')) || (location.pathname.endsWith('/') && item.href.includes('index'));
  return `<a href="${item.href}" class="${current ? 'active' : ''}">${item.label}</a>`;
}).join('');

const footerNav = document.querySelector('[data-footer-nav]');
footerNav.innerHTML = siteData.nav.map(item => `<a href="${item.href}">${item.label}</a>`).join('');

function setHtml(selector, html) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = html;
}

setHtml('[data-gallery]', siteData.gallery.map(src => `<img src="${src}" alt="十三夷资料图片">`).join(''));
setHtml('[data-home-cards]', siteData.homeCards.map(card => `<article class="card"><h4>${card.title}</h4><p>${card.text}</p><div class="meta">${card.meta}</div></article>`).join(''));
setHtml('[data-about-items]', siteData.aboutItems.map(item => `<article class="card"><h4>${item.title}</h4><p>${item.text}</p></article>`).join(''));
setHtml('[data-solution-items]', siteData.solutionItems.map(item => `<article class="card"><h4>${item.title}</h4><p>${item.text}</p></article>`).join(''));
setHtml('[data-shiyanyi-points]', siteData.shiyanyiPoints.map(point => `<li>${point}</li>`).join(''));
setHtml('[data-yijian-points]', siteData.yijianPoints.map(point => `<li>${point}</li>`).join(''));

const heroImage = document.querySelector('[data-hero-image]');
if (heroImage) heroImage.src = imageAt(0);
const subImage = document.querySelector('[data-sub-image]');
if (subImage) subImage.src = imageAt(1);
const aboutImage = document.querySelector('[data-about-image]');
if (aboutImage) aboutImage.src = imageAt(2);
const aboutImage2 = document.querySelector('[data-about-image-2]');
if (aboutImage2) aboutImage2.src = imageAt(3);
const contactImage = document.querySelector('[data-contact-image]');
if (contactImage) contactImage.src = imageAt(4);

const heroCopy = document.querySelector('[data-hero-copy]');
if (heroCopy && bodyClass === 'home') {
  heroCopy.innerHTML = `
    <div>
      <div class="kicker">Modern Agriculture Technology</div>
      <h1>河南省奈禾生物科技有限公司<br>产品介绍</h1>
      <p class="lead">聚焦现代农业科技方向，以正式、清晰、可信的方式展示公司定位、核心品牌与技术内容，方便访客快速了解业务重点并进入联系通道。</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="./contact.html">商务咨询</a>
        <a class="btn btn-ghost" href="./about.html">查看公司简介</a>
      </div>
    </div>
    <div class="hero-stats">
      ${siteData.stats.map(item => `<div class="stat"><strong>${item.value}</strong><span>${item.label}</span></div>`).join('')}
    </div>
  `;
}

const pageMap = {
  'about.html': {
    title: '公司简介',
    text: '围绕企业定位、核心内容与官网目标，建立稳定、正式的公司信息展示页面。',
    extra: `<div class="pill-row"><span class="pill">企业介绍</span><span class="pill">研发与应用</span><span class="pill">对外沟通</span></div>`
  },
  'shiyanyi.html': {
    title: '产品介绍',
    text: '将十三夷与夷建合成合并为统一的产品介绍页面，兼顾品牌展示与技术说明。',
    extra: `<div class="grid-2"><article class="card"><h4>十三夷</h4><p>围绕品牌定位、应用价值和对外表达，形成统一的品牌内容模块。</p></article><article class="card"><h4>夷建合成</h4><p>以技术逻辑、应用方式和专业价值为重点，形成统一的技术内容模块。</p></article></div>`
  },
  'solutions.html': {
    title: '解决方案',
    text: '按应用场景组织内容，帮助合作方从业务角度理解公司的产品与服务。',
    extra: `<div class="pill-row"><span class="pill">作物支持</span><span class="pill">土壤管理</span><span class="pill">商务合作</span></div>`
  },
  'contact.html': {
    title: '联系我们',
    text: '为商务合作、渠道沟通和资料索取预留清晰入口，增强转化效率。',
    extra: `<div class="contact-list"><div><strong>商务合作</strong><br>电话、微信、邮箱、地址可在此补充。</div><div><strong>资料索取</strong><br>适合放置产品资料、品牌资料与技术介绍。</div></div>`
  }
};

const path = location.pathname.split('/').pop() || 'index.html';
const config = pageMap[path];
if (config) {
  const title = document.querySelector('[data-page-title]');
  const text = document.querySelector('[data-page-text]');
  const extra = document.querySelector('[data-page-extra]');
  if (title) title.textContent = config.title;
  if (text) text.textContent = config.text;
  if (extra) extra.innerHTML = config.extra;
}
