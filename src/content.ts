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
  production?: {
    beforeLink: string
    linkText: string
    linkUrl: string
    afterLink: string
    images: ProjectImage[]
  }
  videos?: { id: string; title: string }[]
  sourceUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'privacycheck',
    title: 'PrivacyCheck, a project for the UT Center for Identity',
    category: 'Engineering',
    year: '2025',
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
  {
    slug: 'texas-raas',
    title: 'Texas Raas Dance Team',
    category: 'Side quest',
    year: '2021–2025',
    context: 'Member & Captain · 2021–2025',
    summary: 'Four years of dance, production, and learning to lead.',
    technologies: [],
    paragraphs: [
      'I was a member of the Texas Raas Dance Team from 2021-2025, and I served as captain in my final year of college. Although dance was new to me, I found that the team was an amazing outlet for performance and to feel as though I was part of something bigger than myself.',
      "As a team, we were quite successful, having placed at the Raas All-Stars National Championship in 2022, 2023, and 2024. In my final year, though we had many setbacks and losses, I learned many tough, but important lessons about leadership under adversity, iterating through several rounds of feedback, and how to persevere when everything seems like it's going wrong.",
    ],
    production: {
      beforeLink: "It wasn't just dance that we got to do. We had the opportunity to build beautiful productions to bring the audience into the world of our sets' themes. Furthermore, I had a hand in music production to develop our mixes, engineering props for our performance (linked here are ",
      linkText: '“fireworks,”',
      linkUrl: 'https://ishan-chhatbar.com/led-firework-canvas/',
      afterLink: ' a project my friends Jay and Ishan led), and so much more.',
      images: [
        { src: '/images/raas-set-building.png', alt: 'Team members assembling a painted winter village backdrop in a makerspace.', caption: 'Developing the set.', width: 3024, height: 4032 },
        { src: '/images/raas-train-prop.png', alt: 'A hand-painted blue and yellow Texas Raas Express train prop on the workshop floor.', caption: 'The Texas Raas Express.', width: 4284, height: 5712 },
      ],
    },
    videos: [
      { id: 'a56SeuEItkc', title: 'Texas Raas performance 1' },
      { id: 'x3LoaJe83bY', title: 'Texas Raas performance 2' },
      { id: 'EBr6-f8xkk8', title: 'Texas Raas performance 3' },
      { id: '4iL-YvaZ9ds', title: 'Texas Raas performance 4' },
    ],
    images: [],
  },
  {
    slug: 'whole-foods-sustainable-packaging',
    title: 'Whole Foods Market',
    category: 'Side quest',
    year: '2023',
    context: 'Project Manager · Fall 2023',
    summary: 'Researching sustainable food packaging through competitive analysis and rollout cost modeling.',
    technologies: ['Excel'],
    paragraphs: [
      'In fall 2023, I served as project manager for a six-person team analyzing sustainable food packaging for Whole Foods Market.',
      'We developed and presented a competitive analysis supported by a database of 20 competitors. The research brought together packaging approaches to support comparison across the market.',
      'We also built Excel tools for calculating rollout costs, pairing the competitive research with a way to assess the costs of implementation.',
    ],
    images: [
      { src: '/images/whole-foods-team.png', alt: 'Six project team members standing together in front of a Whole Foods Market sign.', caption: 'Our Whole Foods Market project team.', width: 1280, height: 960 },
    ],
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
  {
    company: 'Kershner Trading Group',
    role: 'Software Engineer Intern',
    period: 'Jun 2022 — Aug 2022',
    highlights: [
      'Built trader view dashboards for equities traders and wrote scripts to backtest trading strategies. Also had the fun opportunity to make trades on my own with beginner capital!',
    ],
  },
  {
    company: 'Applied Research Laboratories (ARL:UT)',
    role: 'Software Engineer Intern',
    period: 'Jun 2021 — Aug 2021',
    highlights: [
      'Built a data-transfer engine to convert live multicast messages into JSON and Pandas DataFrames, with command-line editing tools for satellite-data workflows.',
    ],
  },
  {
    company: 'Code Ninjas',
    role: 'Code Sensei',
    period: 'Aug 2019 — May 2021',
    highlights: [
      'Led beginner programming lessons for students aged 5-14. Taught primarily JavaScript, using a game-dev structured curriculum.',
    ],
  },
]
