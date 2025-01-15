import { z, defineCollection } from "astro:content";

// BRANDENBURG
const brandenburgCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    comment: z.string(),
    section: z.string(),
    subsection: z.string()
   }),
});
// SACHSEN
const sachsenCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    comment: z.string(),
    section: z.string(),
    subsection: z.string()
   }),
});
// DOLNY_SLASK
const dolny_slaskCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    comment: z.string(),
    section: z.string(),
    subsection: z.string()
   }),
});
// DOLNY_SLASK
const deutschCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    comment: z.string(),
    section: z.string(),
    subsection: z.string()
   }),
});
// DOLNY_SLASK
const francaisCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    comment: z.string(),
    section: z.string(),
    subsection: z.string()
   }),
});
// KRYPTOLOGIA
const kryptologiaCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    comment: z.string(),
    section: z.string(),
    subsection: z.string()
   }),
});
// JS
const jsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    comment: z.string(),
    section: z.string(),
    subsection: z.string()
   }),
});
// CSS
const cssCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    comment: z.string(),
    section: z.string(),
    subsection: z.string()
   }),
});
// CMS
const cmsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    comment: z.string(),
    section: z.string(),
    subsection: z.string()
   }),
});
// HISTORIA IT
const historiaitCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    comment: z.string(),
    section: z.string(),
    subsection: z.string()
   }),
});
// INTERNET
const internetCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    comment: z.string(),
    section: z.string(),
    subsection: z.string()
   }),
});
// BLOG
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    section: z.string(),
    tags: z.string(),
    subsection: z.string()
   }),
});
// FESTUNG BRESLAU POST
const festung_breslau_blogCollection = defineCollection({
  schema: z.object({
    date1945: z.string(),
    title: z.string(),    
    date: z.date(),
    img: z.string(),
    description1: z.string(),
    tags: z.string(),
   }),
});
// FESTUNG BRESLAU ARTICLE
const festung_breslau_articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.string(),
    date: z.date(),
   }),
});

// FESTUNG BRESLAU ARTICLE
const jsonCollection = defineCollection({
  schema: z.object({
   }),
});

// Define more collections here...

// Export
export const collections = {
	//  collectionName: collection
	brandenburgia: brandenburgCollection,
	saksonia: sachsenCollection,
	dolny_slask: dolny_slaskCollection,
	deutsch: deutschCollection,
	francais: francaisCollection,
	kryptologia: kryptologiaCollection,
	js: jsCollection,
	css: cssCollection,
	cms: cmsCollection,
	historia_it: historiaitCollection,
	internet: internetCollection,
  blog: blogCollection,
  json: jsonCollection,
  festung_breslau_blog: festung_breslau_blogCollection,
  festung_breslau_article: festung_breslau_articleCollection,
};
