import { defineCollection, z } from "astro:content";

const letterCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    letter: z.string(),
    dropcap: image(),
    // coverAlt: z.string(),
    // examples: [],
    size: z.enum(['small', 'big']),
    row: z.number(),
    // examples: z.array(image()).optional(),
  }),
});

export const collections = {
  letter: letterCollection,
};