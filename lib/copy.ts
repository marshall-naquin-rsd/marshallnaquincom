export const site = {
  name: "Marshall Naquin",
  fullName: "Marshall R. Naquin, M.D.",
  url: "https://marshallnaquin.com",
  consultingUrl: "https://professionalsupportconsulting.com",
  description:
    "Physician in recovery from gambling addiction. Talks for treatment programs, 12 step groups, and the staff and clinicians who work with them.",
} as const;

export const hero = {
  eyebrow: "Recovery speaker · Emergency physician",
  h1: "It took trip after trip to treatment before I finally stopped gambling.",
  lead: "Talks on addiction and the long road to recovery, for people in treatment and recovery, Gamblers Anonymous groups and other 12-step meetings, and the clinicians, staff, and programs that work with them.",
  primaryCta: "Book a talk",
  secondaryCta: "Listen to a sample",
  portraitAlt: "Marshall R. Naquin, M.D., emergency physician and recovery speaker",
} as const;

export const bothSides = {
  eyebrow: "The lecture",
  title: "Both Sides of the White Coat",
  body: "One addict’s descent and the long road back, from a coin pusher in a seventh-grade arcade through trip after trip to treatment. What addiction is, why understanding it isn’t the same as treating it, and what finally worked. I happen to be an emergency physician, and that plays into the talk a little bit: I’ve been on both sides of the white coat.",
  quote: "My best ideas bought me this chair right here.",
} as const;

export const samplesIntro =
  "Two short samples from “Both Sides of the White Coat.” The full talk is not posted here.";

export const samples = [
  {
    title: "Arcade, candy, and the draw",
    body: "Seventh grade, a video arcade, and the candy that explains the draw. About a minute and forty seconds.",
    src: "/audio/arcade-candy-thats-the-draw.mp3",
    duration: "About 1:40",
    label: "Arcade, candy, and the draw audio sample",
  },
  {
    title: "No idea what addiction was",
    body: "Board certified for years, and still no idea what addiction was. About a minute.",
    src: "/audio/credentials-no-idea-what-addiction-was.mp3",
    duration: "About 1:00",
    label: "No idea what addiction was audio sample",
  },
] as const;

export const topics = [
  "Addiction. Drinking, Gambling, Drugs or Sex, and why it’s a disease and not a choice",
  "The long road to recovery: trip after trip to treatment, and why it finally stuck",
  "Early recovery, one day at a time, when forever is too far to look",
  "What treatment and monitoring feel like from the inside",
  "Professionals with addiction, and how they hide in the profession",
  "Working with the programs rather than against them",
] as const;

export const takeaways = [
  "That understanding is not treatment. I knew the science of my own addiction cold and kept gambling anyway. “These programs didn’t fail. They were all very useful. I just wasn’t willing.”",
  "The one question I ask anyone who wants to go back to treatment…one more time: “What do you think is going to be different this time?”",
  "That recovery is a today thing, not a forever thing. Forever is what kept me paralyzed.",
  "Gambling isn’t the only thing. I’ve dealt for years with depression, emotional eating, and anger, and I handle them the same way, one day at a time. As my sponsor says, each day I try to be a little bit better than I was yesterday.",
  "For the staff in the room: what the people you refer are actually walking into, from someone who walked into it more than once.",
  "Why honesty with a program is the practical move and not the noble one. The fastest way to damage that relationship is to lie to them, or to skip facts that are going to come out anyway.",
] as const;

export const formats = [
  { label: "Short engagement", length: "30 to 45 minutes" },
  { label: "Keynote", length: "1 hour" },
  { label: "Workshop", length: "Half day" },
  { label: "Staff in-service", length: "Full day" },
  {
    label: "Family program",
    length: "On Zoom, 2 to 3 days based on the number of participants",
  },
] as const;

export const otherSpeakers =
  "Some audiences want more than one voice. I can also arrange speakers who work inside a professional health program, and clinicians who have treated professionals going through one. Tell me what your audience needs and I’ll tell you honestly whether I can put it together.";

export const about = {
  who: "Marshall R. Naquin, M.D.",
  cred: "Board certified, American Board of Emergency Medicine",
  bio: "“My name’s Marshall, and I’m a compulsive gambler.” That is how Marshall R. Naquin, M.D., introduces himself. He is a board-certified emergency physician in recovery from gambling addiction, and it took him trip after trip to treatment before it stuck. His work has ranged from offshore in the oil and gas industry to medical director of an emergency room. He speaks to people in treatment and recovery, and to the clinicians, staff, and programs that work with them, about addiction and the long road back.",
  pairAlt: "Marshall Naquin with his wife, Tracey, on a dock at sunset",
} as const;

export const bookingBand = {
  title: "Book a talk",
  body: "Tell me about the room and the dates. I’ll write back.",
  cta: "Book a talk",
} as const;

export const bookingPage = {
  title: "Book a talk",
  lead: "Tell me the room, the dates, and what you need. I’ll write back.",
} as const;

export const colophon = {
  disclaimer:
    "Everything here is informational and based on my personal experience. Visitors remain ultimately responsible for their own decision-making. It’s not legal advice, not medical care, and not a substitute for either. No physician-patient relationship is created by reading this site or speaking with me. If you’re in immediate danger, call",
  consulting: "Health-program guides",
} as const;

export const audienceTypes = [
  "Treatment or recovery room",
  "GA or 12-step meeting",
  "Conference or staff",
  "Mixed room",
  "Other",
] as const;

export const formatOptions = [
  "Short engagement",
  "Keynote",
  "Workshop",
  "Staff in-service",
  "Family program",
  "Other / not sure",
] as const;
