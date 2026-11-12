import { defineConfig } from 'vitepress'
export default defineConfig({
 title: 'FDE field notes', description: 'Real job descriptions, clear skill requirements, and routes into forward deployed engineering.',
 base: '/fde-role-research/', lang: 'en-US', cleanUrls: false,
 themeConfig: {
  nav: [{text:'Overview',link:'/'},{text:'Jobs',link:'/jobs'},{text:'Skills',link:'/skills'}],
  sidebar: [{text:'RESEARCH · NOV 2026',items:[{text:'Role overview',link:'/'},{text:'Compare jobs',link:'/jobs'},{text:'Skills to build',link:'/skills'},{text:'Sources & method',link:'/sources'}]}],
  search:{provider:'local'}, outline:[2,3],
  socialLinks:[{icon:'github',link:'https://github.com/pranjalptll1210-alt/fde-role-research'}],
  footer:{message:'Independent research · Checked November 12, 2026 · Recheck postings before applying.'}
 }
})
