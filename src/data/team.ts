export type Localized = { en: string; zh: string }
export type TeamMember = {
  id: 'sienna' | 'shine' | 'annie'
  name: string
  initials: string
  role: Localized
  biography: Localized
  quote?: string
  contributions: { en: string[]; zh: string[] }
  skills: { en: string[]; zh: string[] }
}

export const team: TeamMember[] = [
  {
    id: 'sienna', name: 'Sienna', initials: 'SI',
    role: { en: 'Ideation & Team Organization', zh: '创意构思与团队组织' },
    biography: { en: 'Sienna enjoys working with computers and helping turn early ideas into organized, workable plans.', zh: 'Sienna 喜欢使用电脑，并善于把早期想法整理成清晰、可执行的计划。' },
    quote: 'I like computers :D',
    contributions: {
      en: ['Organized and refined team notes and research documents', 'Helped develop the original game concept', 'Tested MathSprout and contributed to the presentation', 'Kept team information structured and accessible'],
      zh: ['整理并完善团队笔记和研究文档', '参与形成最初的游戏概念', '测试 MathSprout 并参与项目展示', '让团队信息保持清晰、有序且便于查阅'],
    },
    skills: { en: ['Organization', 'Reading & research', 'Drawing', 'Creative ideation', 'Academic discipline'], zh: ['组织整理', '阅读与研究', '绘画', '创意构思', '认真自律'] },
  },
  {
    id: 'shine', name: 'Shine', initials: 'SH',
    role: { en: 'Developer', zh: '开发者' },
    biography: { en: 'Shine is interested in technology, coding, AI, business, economics, investing and entrepreneurship. He has first-hand entrepreneurship experience from starting a website-development business.', zh: 'Shine 对科技、编程、人工智能、商业、经济、投资和创业感兴趣，并通过创办网站开发业务积累了实际创业经验。' },
    contributions: {
      en: ['Developed the MathSprout game and team website', 'Developed the market-research report website and a personal portfolio', 'Contributed to the project presentation', 'Helped connect research, product strategy and implementation'],
      zh: ['开发 MathSprout 游戏和团队网站', '开发市场研究报告网站和个人作品集网站', '参与项目展示', '协助连接研究、产品策略与实际开发'],
    },
    skills: { en: ['Coding', 'Artificial intelligence', 'Problem-solving', 'Entrepreneurship', 'Investing', 'Web development'], zh: ['编程', '人工智能', '解决问题', '创业', '投资', '网站开发'] },
  },
  {
    id: 'annie', name: 'Annie', initials: 'AN',
    role: { en: 'Project Support & Chinese Communication', zh: '项目支持与中文沟通' },
    biography: { en: 'Annie enjoys design and supports the team through organization, documentation, interviews, media and Chinese communication.', zh: 'Annie 喜欢设计，并通过组织、记录、访谈、影像和中文沟通支持团队。' },
    quote: 'I like design (^ ^)',
    contributions: {
      en: ['Provided computer access and practical project support', 'Took project notes and documented development', 'Conducted interviews with the six-year-old group', 'Contributed to the presentation and translated content into Chinese'],
      zh: ['提供电脑设备并给予实际项目支持', '记录项目笔记和开发过程', '对六岁儿童组进行访谈', '参与项目展示并把内容翻译成中文'],
    },
    skills: { en: ['Handcraft', 'Video recording', 'Drawing', 'Note-taking', 'Chinese translation', 'Interview support'], zh: ['手工制作', '视频记录', '绘画', '笔记整理', '中文翻译', '访谈支持'] },
  },
]

export const contributionRows = [
  { area: { en: 'Ideation', zh: '创意构思' }, sienna: 'lead', shine: 'contributed', annie: 'supported' },
  { area: { en: 'Research organization', zh: '研究整理' }, sienna: 'lead', shine: 'contributed', annie: 'supported' },
  { area: { en: 'Interviews', zh: '访谈' }, sienna: 'supported', shine: 'supported', annie: 'lead' },
  { area: { en: 'Development', zh: '开发' }, sienna: 'supported', shine: 'lead', annie: 'supported' },
  { area: { en: 'Design', zh: '设计' }, sienna: 'contributed', shine: 'contributed', annie: 'contributed' },
  { area: { en: 'Testing', zh: '测试' }, sienna: 'lead', shine: 'contributed', annie: 'supported' },
  { area: { en: 'Chinese translation', zh: '中文翻译' }, sienna: 'supported', shine: 'contributed', annie: 'lead' },
  { area: { en: 'Presentation', zh: '项目展示' }, sienna: 'contributed', shine: 'contributed', annie: 'contributed' },
] as const
