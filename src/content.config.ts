import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every post is one "edition" of a segment. The body (Markdown) is the lead story.
// The front matter carries the segment's signature modules, exactly as in the wireframe.

const base = {
  title: z.string(),                    // lead headline
  date: z.coerce.date(),
  week: z.string().optional(),          // "Week 2", "College Week 1"
  kicker: z.string().optional(),        // "Coach watch · 6 min"
  dek: z.string().optional(),
  image: z.string().optional(),
  imageCredit: z.string().optional(),
  draft: z.boolean().default(false),
};

const whosSweating = z.object({
  ...base,
  segment: z.literal('whos-sweating'),
  alsoSweating: z.array(z.object({ title: z.string(), meta: z.string().optional() })).default([]),
  heatIndex: z.array(z.object({ who: z.string(), temp: z.number().min(0).max(100), note: z.string().optional() })).default([]),
  oopsies: z.array(z.object({ tag: z.string(), title: z.string(), body: z.string().optional() })).default([]),
});

const standingOn = z.object({
  ...base,
  segment: z.literal('standing-on'),
  receipts: z.object({
    seasonATS: z.string().default('0–0–0'),
    lastWeek: z.string().default('—'),
    locks: z.string().default('0–0'),
    worstBeat: z.string().default('—'),
  }).default({}),
  confidence: z.number().min(1).max(10).default(7),
  confidenceNote: z.string().optional(),
  slate: z.array(z.object({
    when: z.string(), matchup: z.string(), pick: z.string(), why: z.string().optional(), conf: z.number().min(1).max(5).default(3),
  })).default([]),
  hotTake: z.object({ title: z.string(), body: z.string().optional() }).optional(),
});

const groupChat = z.object({
  ...base,
  segment: z.literal('group-chat'),
  overheard: z.object({ quote: z.string(), who: z.string().optional() }).optional(),
  chemistry: z.array(z.object({
    status: z.enum(['thriving', 'tense', 'watching']), subject: z.string(), note: z.string().optional(),
  })).default([]),
  also: z.array(z.object({ title: z.string(), body: z.string().optional() })).default([]),
});

const morningAfter = z.object({
  ...base,
  segment: z.literal('morning-after'),
  scoreboard: z.array(z.object({
    label: z.string().default('Final'), away: z.string(), awayScore: z.union([z.number(), z.string()]), home: z.string(), homeScore: z.union([z.number(), z.string()]),
  })).default([]),
  takes: z.array(z.object({ title: z.string(), body: z.string().optional() })).default([]),
  ratings: z.array(z.object({ game: z.string(), watchability: z.string(), coaching: z.string(), line: z.string().optional() })).default([]),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.discriminatedUnion('segment', [whosSweating, standingOn, groupChat, morningAfter]),
});

export const collections = { posts };
