const asset = (name) => `./public/assets/${name}`;

const gallery = [
  'hero-1.jpg',
  'hero-2.jpg',
  'about-1.jpg',
  'about-2.jpg',
  '8bfe5ea7fc83774e18786e02553f82d3.jpg',
  '9cf2922d77ff825dfaadbff4a1bc474a.jpg',
  'd59bfaa81501839dfe7b2474ea33a6b5.jpg',
  'fafece68ce1f0b31b24cf110d03085eb.jpg',
  'wechatimg1.jpg',
  'wechatimg2.jpg',
  'wechatimg3.jpg',
  'wechatimg4.jpg',
  'wechatimg5.jpg',
  'wechatimg8.jpg',
  'wechatimg9.jpg',
  'wechatimg10.jpg',
].map(asset);

export const siteData = {
  nav: [
    { href: './index.html', label: '首页' },
    { href: './about.html', label: '公司简介' },
    { href: './shiyanyi.html', label: '产品介绍' },
    { href: './solutions.html', label: '解决方案' },
    { href: './contact.html', label: '联系我们' },
  ],
  gallery,
  homeCards: [
    {
      title: '企业定位清晰',
      text: '围绕现代农业科技建立统一表达，让品牌、产品、技术与服务在同一站点内形成完整叙事。',
      meta: 'Corporate Profile',
    },
    {
      title: '产品介绍专题',
      text: '将十三夷与夷建合成统一呈现，兼顾品牌展示与技术说明。',
      meta: 'Product Page',
    },
  ],
  stats: [
    { value: '企业官网', label: '面向客户、合作伙伴与渠道的正式信息窗口' },
    { value: '产品介绍', label: '十三夷与夷建合成合并为统一产品入口' },
    { value: '多端适配', label: '桌面端与移动端均保持清晰、稳定的阅读体验' },
  ],
  aboutItems: [
    {
      title: '企业概况',
      text: '河南省奈禾生物科技有限公司以现代农业科技为核心，搭建品牌展示、技术传播和业务沟通的统一官网。',
    },
    {
      title: '核心内容',
      text: '围绕十三夷与夷建合成形成专题模块，强调品牌识别、技术逻辑与应用价值。',
    },
    {
      title: '官网目标',
      text: '让访客快速了解公司定位、主要内容和联络方式，提升企业形象的正式感与可信度。',
    },
  ],
  shiyanyiPoints: [
    '品牌定位明确，便于对外传播',
    '以应用场景和价值表达为主',
    '适合作为产品与合作介绍页面',
  ],
  yijianPoints: [
    '呈现技术路径和核心优势',
    '结构清晰，适合专业沟通场景',
    '强化技术表达的正式感',
  ],
  solutionItems: [
    {
      title: '作物生长支持',
      text: '针对不同作物阶段提供清晰说明，辅助种植用户快速理解使用价值。',
    },
    {
      title: '土壤与根系管理',
      text: '以场景化方式阐述应用方向，适合企业官网中的解决方案栏目。',
    },
    {
      title: '商务合作咨询',
      text: '突出联系入口，便于渠道合作、业务咨询和资料索取。',
    },
  ],
};

export function imageAt(index) {
  return gallery[index % gallery.length];
}
