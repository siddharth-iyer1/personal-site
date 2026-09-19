import { StrictMode, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { experiences, profile, projects, type ProjectImage } from './content'
import './styles.css'

export function Photo({ image }: { image: ProjectImage }) {
  return <figure>
    <a className="photo-link" href={image.src} target="_blank" rel="noreferrer" aria-label={`${image.alt} (open full-size image in a new tab)`}>
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
    </a>
    {image.caption && <figcaption>{image.caption}</figcaption>}
  </figure>
}

export function PhotoGallery({ images }: { images: ProjectImage[] }) {
  return <div className={images.length === 1 ? 'gallery gallery-single' : 'gallery'}>
    {images.map(image => <Photo key={image.src} image={image} />)}
  </div>
}

function ResumeLink() {
  return profile.resumeUrl
    ? <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Resume <span className="file-label">PDF ↗</span></a>
    : <span className="unavailable" title="The resume PDF has not been added yet">Resume <span className="file-label">Soon</span></span>
}

function Home() {
  return <>
    <header className="page-heading home-heading">
      <p className="eyebrow">{profile.role}</p>
      <h1>Hi, I’m {profile.name}.</h1>
      <p className="lead">{profile.intro}</p>
    </header>
    <section className="about" aria-labelledby="about-title">
      <h2 id="about-title">A little about me</h2>
      {profile.about.map(text => <p key={text}>{text}</p>)}
    </section>
    <section className="contact" aria-labelledby="contact-title"><h2 id="contact-title">Get in touch</h2>
      {profile.email ? <p>You can reach me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.</p> : <p className="muted">Contact links will be added here.</p>}
    </section>
  </>
}

function ExperiencePage() {
  return <><header className="page-heading"><p className="eyebrow">The work so far</p><h1>Experience</h1><p className="lead">The teams, products, and problems I’ve worked on.</p></header>
    <div className="experience-list">{experiences.map((entry, index) => <article className="experience" key={`${entry.company}-${index}`}>
      <p className="entry-date">{entry.period}</p><div><h2>{entry.role}</h2><p className="company">{entry.company}{entry.location && ` · ${entry.location}`}</p>
      <ul>{entry.highlights.map(text => <li key={text}>{text}</li>)}</ul></div>
    </article>)}</div><p className="resume-note">For a full overview: <ResumeLink /></p>
  </>
}

function ProjectsPage() {
  return <><header className="page-heading"><p className="eyebrow">Made with curiosity</p><h1>Projects</h1><p className="lead">A collection of things I’ve built.</p></header>
    <div className="project-list">{projects.map(project => <article className="project-row" key={project.slug}>
      <div><h2><Link to={`/projects/${project.slug}`}>{project.title}</Link></h2><p>{project.summary}</p></div><span className="entry-date">{project.year}</span>
    </article>)}</div>
  </>
}

function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <NotFound />
  return <><Link className="back-link" to="/projects">← All projects</Link>
    <header className="page-heading project-heading"><p className="eyebrow">{project.year}</p><h1>{project.title}</h1><p className="lead">{project.summary}</p>
    <p className="technologies">{project.technologies.join(' / ')}</p>
    {(project.sourceUrl || project.liveUrl) && <div className="project-links">{project.sourceUrl && <a href={project.sourceUrl}>Source code ↗</a>}{project.liveUrl && <a href={project.liveUrl}>Visit project ↗</a>}</div>}
    </header>
    <section aria-labelledby="overview-title"><h2 id="overview-title">Overview</h2>{project.paragraphs.map(text => <p key={text}>{text}</p>)}</section>
    <section className="project-photos" aria-labelledby="photos-title"><h2 id="photos-title">A closer look</h2>
    {project.images.length ? <PhotoGallery images={project.images} /> : <div className="photo-placeholder"><span aria-hidden="true">▧</span><p>Project pictures go here.</p><small>Sample content · Add screenshots or photos of your work.</small></div>}
    </section>
  </>
}

function NotFound() {
  return <header className="page-heading"><p className="eyebrow">404</p><h1>Page not found.</h1><p>This page may have moved, or the link may be incorrect.</p><Link to="/">Back to home →</Link></header>
}

function App() {
  const location = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const previousPath = useRef(location.pathname)
  useEffect(() => {
    const path = location.pathname.replace(/\/$/, '') || '/'
    const project = projects.find(item => `/projects/${item.slug}` === path)
    const page = path === '/' ? 'Home' : path === '/experience' ? 'Experience' : path === '/projects' ? 'Projects' : project?.title ?? 'Page not found'
    document.title = `${page} · ${profile.name}`
    if (previousPath.current !== location.pathname) {
      window.scrollTo(0, 0)
      mainRef.current?.focus({ preventScroll: true })
      previousPath.current = location.pathname
    }
  }, [location.pathname])
  return <div className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><Link className="wordmark" to="/">{profile.name}<span aria-hidden="true">.</span></Link>
      <nav aria-label="Main navigation"><NavLink to="/" end>Home</NavLink><NavLink to="/experience">Experience</NavLink><NavLink to="/projects">Projects</NavLink><ResumeLink /></nav>
    </header>
    <main id="main" ref={mainRef} tabIndex={-1}><Routes><Route path="/" element={<Home />} /><Route path="/experience" element={<ExperiencePage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/projects/:slug" element={<ProjectPage />} /><Route path="*" element={<NotFound />} /></Routes></main>
    <footer><span>© {new Date().getFullYear()} {profile.name}</span><div>{profile.github && <a href={profile.github}>GitHub ↗</a>}{profile.linkedin && <a href={profile.linkedin}>LinkedIn ↗</a>}{profile.email && <a href={`mailto:${profile.email}`}>Email ↗</a>}</div></footer>
  </div>
}

createRoot(document.getElementById('root')!).render(<StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>)
