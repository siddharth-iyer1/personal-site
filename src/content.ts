export const profile = {
  name: 'Siddharth Iyer',
  about: [
    "I'm a Senior Software Engineer on the Calling Product at HubSpot. My work spans Distributed Systems, Product Engineering, and AI Agent Development. I love engineering, and I love feeling inspired about solving problems that can improve the experiences of many.",
    'I graduated from The University of Texas at Austin with a B.S. in Electrical and Computer Engineering, and I spent a lot of time doing various side quests. Some of my most fond memories include roaming Paris at 1 AM searching for a hostel while studying abroad, spending countless nights refining dance performances for competitions across the country, and guiding lessons for young students in my community.',
    "Outside of work, I definitely identify as a hobby hopper, but lately I've found joy in running, spending time outside trying new sports, and playing board games.",
  ],
  resumeUrl: '/resume.pdf' as string | null,
  email: 'siddharth.iyer123@gmail.com',
  github: 'https://github.com/siddharth-iyer1',
  linkedin: 'https://www.linkedin.com/in/siyer-ut/',
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
  category: 'Engineering' | 'Side quest'
  summary: string
  year?: string
  context?: string
  technologies: string[]
  paragraphs: string[]
  poster?: ProjectImage
  images: ProjectImage[]
  sourceUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'privacycheck',
    title: 'PrivacyCheck',
    category: 'Engineering',
    context: 'UT Center for Identity',
    summary: 'Tools to understand privacy risks across apps and websites, tailored to what matters to you.',
    technologies: ['React', 'Python', 'FastAPI', 'AWS', 'GPT-4o', 'GPT-4o mini'],
    paragraphs: [
      'At the UT Center for Identity, I worked on PrivacyCheck: tools for scoring privacy risks and helping users understand how applications and websites handle their data.',
      'I delivered a Windows app that scores privacy risks across locally installed applications. I connected a React extension to a Python/FastAPI backend using custom URL protocols and localhost APIs, with PyInstaller packaging and downloads through Amazon S3.',
      'For website privacy scores, I built a workflow that lets users weight 20 privacy metrics by personal importance. This included consent, saved preferences, and REST API submissions to a DynamoDB-backed service.',
      'I also led LLM evaluation for privacy-policy scoring, benchmarking GPT-4o and GPT-4o mini against human-scored policies across User Control and GDPR metrics. Those evaluations informed model selection and prompt refinement.',
    ],
    poster: {
      src: '/images/privacycheck-poster.png',
      alt: 'PrivacyCheck senior design poster: optimizing privacy visibility and control, with LLM privacy-policy scoring, personalized scores, breach notifications, and device privacy scanning.',
      caption: 'PrivacyCheck — Senior Design poster, UT Austin. Click to view the full-size poster.',
      width: 3840,
      height: 2880,
    },
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
    company: 'HubSpot · Calling Product',
    role: 'Senior Software Engineer I',
    period: 'Aug 2026 — Present',
    highlights: [
      'Designed a Java, Kafka, and SQS pipeline to enforce phone-number limits through notifications, grace periods, and decommissioning. It brought 7,500 customers and 30,000 unpaid numbers into compliance, saving over $50K monthly.',
      'Built an issue-reporting platform used across HubSpot, with React and TypeScript UI selection, Sourcegraph-based ownership discovery, and delivery to teams through Slack.',
      'Built an asynchronous, multimodal AI agent to resolve ownership using code-search tools, with regression evaluations and Slack feedback to track routing errors.',
    ],
  },
  {
    company: 'HubSpot · Calling Product',
    role: 'Software Engineer',
    period: 'Aug 2025 — Aug 2026',
    highlights: [
      'Cut call-settings retrieval time by 50% using Memcached caching and parallel API requests.',
      'Consolidated recording settings into an extensible REST API serving over 15 consumers and 2 million requests per day.',
      'Designed Twilio-integrated APIs and a React interface for pause-recording controls on a platform handling 1 million calls per day.',
      'Migrated phone-number metadata to a single source of truth, retired legacy read/write paths, and reduced table size by 20%.',
    ],
  },
  {
    company: 'HubSpot · Sandboxes and Portability',
    role: 'Software Engineer Intern',
    period: 'Jun 2024 — Aug 2024',
    highlights: [
      'Built Java/Dropwizard APIs for over 10,000 sandbox users to manage and sync custom CRM objects between test and production, using Kafka and Amazon SQS for asynchronous processing and dependency handling.',
    ],
  },
  {
    company: 'Capital One · Cyber SRE',
    role: 'Software Engineer Intern',
    period: 'Jun 2023 — Aug 2023',
    highlights: [
      'Automated engineering-standards reviews across over 500 repositories, delivering on-demand findings through Slack. Built the Python service on AWS Fargate with Route 53 and an Application Load Balancer.',
    ],
  },
]
