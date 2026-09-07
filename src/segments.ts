export const SEGMENTS = {
  'whos-sweating': {
    num: '01', name: "Who's Sweating?", slug: 'whos-sweating', day: 'Mondays',
    bg: '#FF2E88', fg: '#FFF4E8', label: 'Hot seat & front-office chaos',
    blurb: 'Coaches on the seat, owners doing the unthinkable in public, and every front office quietly hoping nobody checks the group email. Temperature readings updated every Monday.',
  },
  'standing-on': {
    num: '02', name: "What I'm Standing On", slug: 'standing-on', day: 'Thursdays',
    bg: '#D8FF3E', fg: '#14100F', label: 'Picks, previews & hot takes',
    blurb: "Every pick I make, in writing, before kickoff. The record stays on the page whether it's flattering or not.",
  },
  'group-chat': {
    num: '03', name: 'The Group Chat', slug: 'group-chat', day: 'Midweek',
    bg: '#7B2FBF', fg: '#FFF4E8', label: 'Beyond the locker room',
    blurb: 'Team chemistry, falling-outs, and the personal lives of players, coaches and owners, only when it actually explains what happened on the field.',
  },
  'morning-after': {
    num: '04', name: 'The Morning After', slug: 'morning-after', day: 'Post-game',
    bg: '#14100F', fg: '#FFF4E8', label: 'Recaps & the takes that follow',
    blurb: "Every game, recapped before your coffee's done. Then the three things I can't stop thinking about.",
  },
} as const;
export type SegmentKey = keyof typeof SEGMENTS;
export const SEGMENT_ORDER: SegmentKey[] = ['whos-sweating', 'standing-on', 'group-chat', 'morning-after'];
