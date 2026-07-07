import { defineCollection, z } from 'astro:content';

const servicos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('Vidraçaria RJ'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { servicos, blog };
