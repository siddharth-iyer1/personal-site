// Replace the sample content here to personalize every page.
export const profile = {
  name: 'Your name',
  role: 'Software engineer',
  intro: 'I build software with care and curiosity.',
  about: [
    'This is a small corner of the internet for my work, the things I’m building, and a little about me.',
    'Add a few sentences here about your engineering interests, the problems you enjoy solving, and what you’re looking to do next.',
  ],
  // Put your PDF in public/resume.pdf, then set this to '/resume.pdf'.
  resumeUrl: null as string | null,
  // Add real links here; empty values are not displayed.
  email: '',
  github: '',
  linkedin: '',
}

export type ProjectImage = {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
}

export type Project = {
  slug: string
  title: string
  summary: string
  year: string
  technologies: string[]
  paragraphs: string[]
  images: ProjectImage[]
  sourceUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'example-project',
    title: 'Example project',
    summary: 'A short sentence about what you built and why it matters.',
    year: 'Sample',
    technologies: ['React', 'TypeScript'],
    paragraphs: [
      'This is a sample project page. Replace it with the story of something you’ve built: the problem, your approach, and the result.',
      'Keep the explanation focused on your contribution. Describe a meaningful technical decision, what you learned, or how the project helped its users.',
    ],
    images: [],
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  location?: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Company name',
    role: 'Your role',
    period: 'Start — End',
    highlights: [
      'Sample entry — describe your responsibilities and the team or product you worked on.',
      'Add one or two specific contributions, including outcomes where possible.',
    ],
  },
]
