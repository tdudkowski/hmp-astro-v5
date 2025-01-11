import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sectionize from '@hbsnow/rehype-sectionize';

export default defineConfig({
  experimental: {svg: true},
  site: 'https://localhost:4321/',
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: 'prism',
    rehypePlugins: [sectionize],  
  },
})
