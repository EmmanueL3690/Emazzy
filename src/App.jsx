import { useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Braces,
  Check, Code2, Command, ExternalLink, Github, Globe2, Layers3, Mail,
  MousePointer2, MoveUpRight, Send, Sparkles, X, Zap
} from 'lucide-react'
import Navbar from './components/Navbar'
import Reveal from './components/Reveal'
import { ThemeProvider } from './components/ThemeContext'
import { projects } from './data/projects'
import { skillGroups } from './data/skills'

function Eyebrow({ children, number }) {
  return <div className="eyebrow"><span>{number}</span><i />{children}</div>
}

function ProjectVisual({ project }) {
  return <div className={`project-visual project-visual--${project.theme}`}>
    <div className="visual-top"><span>EMAZZY / SELECTED WORK</span><span>{project.number} — 03</span></div>
    {project.theme === 'stock' && <div className="stock-ui">
      <div className="mock-sidebar"><b>S.</b><i/><i/><i/><i/></div>
      <div className="mock-main"><div className="mock-heading">Overview <span>↗</span></div><div className="mock-metrics"><i/><i/><i/></div><div className="mock-chart"><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/></div><div className="mock-bottom"><i/><i/></div></div>
      <div className="visual-caption">INVENTORY / CONTROL</div>
    </div>}
    {project.theme === 'ieurion' && <div className="ieurion-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="orbit-core">I<span>.</span></div><span className="orbit-label label-a">RESEARCH</span><span className="orbit-label label-b">BUILD</span><span className="orbit-label label-c">IMAGINE</span><div className="visual-caption">IDEAS INTO IMPACT</div></div>}
    {project.theme === 'numbers' && <div className="numbers-art"><div className="number-window"><div className="window-bar"><i/><i/><i/><span>NUMBERS TO SOLUTIONS</span></div><div className="number-equation"><span>57</span><b>+</b><span>90</span><b>=</b><strong>147</strong></div><div className="number-lines"><i/><i/><i/></div><div className="number-result"><Check size={14}/> RESULT GENERATED</div></div><div className="visual-caption">INPUT → INSIGHT</div></div>}
    {project.theme === 'quickcrow' && <div className="brand-visual quickcrow-visual"><div className="food-orbit">Q</div><div className="food-card food-card-one">FRESH<br/><b>CHOICES.</b></div><div className="food-card food-card-two">GOOD FOOD<br/><b>GOOD MOOD.</b></div><div className="visual-caption">DISCOVER / CHOOSE / ENJOY</div></div>}
    {project.theme === 'natur' && <div className="brand-visual natur-visual"><div className="natur-bottle"><span>N</span><small>NATURSIP</small></div><div className="fruit fruit-one"/><div className="fruit fruit-two"/><div className="visual-caption">FRESH IDEAS, FRESH SIPS</div></div>}
    {project.theme === 'story' && <div className="brand-visual story-project-visual"><div className="story-card-shape"><span>THE STORY</span><b>DATA<br/>WITH<br/><em>MEANING.</em></b><small>PORTFOLIO / 2026</small></div><div className="visual-caption">A CLIENT PORTFOLIO BUILD</div></div>}
    {project.theme === 'geomancy' && <div className="brand-visual geomancy-visual"><div className="geometry-mark">✳</div><span className="orbit-label">PRIVATE PROJECT</span><div className="visual-caption">INTERACTIVE REACT EXPERIENCE</div></div>}
    {project.theme === 'cmms' && <div className="brand-visual cmms-visual"><div className="cmms-mark"><span>CM</span><i/><i/><i/></div><div className="visual-caption">SOFTWARE PROJECT / PRIVATE</div></div>}
  </div>
}

function ProjectModal({ project, onClose }) {
  if (!project) return null
  return <AnimatePresence><motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
    <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{ opacity: 0, y: 25, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15 }} onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close project details"><X size={19}/></button>
      <Eyebrow number={project.number}>PROJECT NOTES</Eyebrow>
      <h2 id="modal-title">{project.name}<span>.</span></h2>
      <p>{project.note}</p>
      <div className="modal-meta"><div><small>ROLE</small><strong>{project.role}</strong></div><div><small>FOCUS</small><strong>{project.type}</strong></div></div>
      <div className="tag-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
      <div className="modal-repo">{project.repo ? <a href={project.repo} target="_blank" rel="noreferrer">VIEW PUBLIC REPOSITORY <ExternalLink size={14}/></a> : <span>PRIVATE REPOSITORY — SOURCE LINK NOT SHARED</span>}</div>
      <p className="modal-footnote">Repository visibility is shown as supplied. Project descriptions are concise summaries and can be expanded with verified details later.</p>
    </motion.div>
  </motion.div></AnimatePresence>
}

function Hero() {
  const reduce = useReducedMotion()
  return <section className="hero section-pad" id="home">
    <div className="hero-grid" />
    <div className="hero-glow" />
    <div className="container hero-inner">
      <motion.div className="hero-kicker" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}><span className="kicker-dot"/> INDEPENDENT DEVELOPER / DIGITAL CRAFT</motion.div>
      <div className="hero-title-wrap">
        <motion.p className="hero-intro" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>HELLO, I'M EMMANUEL.</motion.p>
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .2, ease: [0.22, 1, 0.36, 1] }}>
          I BUILD DIGITAL<br/><span>EXPERIENCES</span> THAT<br/>MAKE IDEAS <em>ALIVE.</em>
        </motion.h1>
      </div>
      <div className="hero-bottom">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>I'm Emmanuel Izuchukwu Innocent — a frontend developer passionate about building modern web experiences, developing useful digital products and transforming ideas into functional software.</motion.p>
        <motion.div className="hero-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }}>
          <a href="#projects" className="button button-primary">EXPLORE MY WORK <ArrowUpRight size={16}/></a>
          <a href="#contact" className="button button-quiet">LET'S CONNECT <ArrowDownRight size={16}/></a>
        </motion.div>
      </div>
      <div className="hero-side-note"><span>DESIGN-MINDED.</span><span>CODE-DRIVEN.</span><span>ALWAYS LEARNING.</span></div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      <div className="hero-index">01 <i/> 06</div>
    </div>
  </section>
}


function StoryExperience() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [65, -65])
  const rotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-18, 28])
  const chapters = [
    ['01', 'THE QUESTION', 'Every useful product begins with a problem worth understanding.'],
    ['02', 'THE BUILD', 'I shape the idea into an interface, connect the pieces and make it work.'],
    ['03', 'THE EXPERIENCE', 'The details come together to make something people can actually use.']
  ]
  return <section className="story-section section-pad" ref={ref} aria-label="My approach to building">
    <div className="container">
      <Eyebrow number="01 / THE STORY">A SMALL STORY ABOUT THE WORK</Eyebrow>
      <div className="story-layout">
        <div className="story-visual">
          <motion.div className="story-disc" style={{ y, rotate }}>
            <div className="disc-ring disc-ring-one"/><div className="disc-ring disc-ring-two"/>
            <div className="disc-center"><span>EM</span><small>IDEA / INTERFACE / IMPACT</small></div>
            <div className="disc-orbit-dot"/>
          </motion.div>
          <div className="story-visual-caption"><span>FIG. 01</span><span>THE CREATIVE LOOP</span></div>
        </div>
        <div className="story-content">
          <h2>From a spark<br/>to <span>something real.</span></h2>
          <p className="story-lead">I like the journey between “what if?” and “it works.”</p>
          <div className="story-chapters">
            {chapters.map(([n, title, copy]) => <div className="story-chapter" key={n}>
              <span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={17}/>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  </section>
}

function About() {
  return <section className="section-pad about-section" id="about">
    <div className="container">
      <Eyebrow number="02">A LITTLE ABOUT ME</Eyebrow>
      <div className="about-layout">
        <Reveal className="about-heading"><h2>Curiosity is<br/>where the <span>build</span><br/>begins<span className="blue-dot">.</span></h2>
          <div className="portrait-frame">
        <img
          src="/images/emmanuel-photo.jpeg"
          alt="Portrait of Emmanuel Izuchukwu Innocent"
          onError={(e) => {
            console.error("Image failed to load:", e.currentTarget.src);
            e.currentTarget.style.display = 'none';
          }}
        />
            <div className="portrait-placeholder"><span>YOUR PHOTO GOES HERE</span><b>EMAZZY®</b><small>Add your image as public/images/emmanuel-photo.jpg</small></div>
            <span className="portrait-index">EM / 001</span>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={.12}>
          <p className="lead">I’m Emmanuel Izuchukwu Innocent, a frontend developer who enjoys turning ideas into useful, well-crafted digital experiences.</p>
          <p>I care about the details people feel when they use a product — how clearly it communicates, how naturally it works and how it adapts to the real world. I enjoy learning, solving problems and collaborating to bring software ideas to life.</p>
          <p>My work sits at the intersection of thoughtful interfaces and practical functionality. I’m always looking for the next thing to understand, improve or build.</p>
          <a className="text-link" href="#contact">A PROJECT IN MIND? LET'S TALK <ArrowUpRight size={15}/></a>
        </Reveal>
      </div>
      <div className="about-strip"><span>BASED IN NIGERIA</span><span>FRONTEND DEVELOPMENT</span><span>PRODUCT-MINDED THINKING</span><span>GROWTH IN PROGRESS ↗</span></div>
    </div>
  </section>
}

function Expertise() {
  return <section className="section-pad expertise-section" id="expertise">
    <div className="container">
      <Eyebrow number="03">WHAT I BRING TO THE TABLE</Eyebrow>
      <div className="section-heading-row"><h2>Tools for turning<br/><span>thought into form.</span></h2><p>My toolkit is always evolving. These are the technologies and practices I use to build reliable, responsive web experiences.</p></div>
      <div className="expertise-grid">
        {skillGroups.map((group, i) => <Reveal className="skill-card" key={group.title} delay={i * .08}>
          <div className="skill-card-top"><span>0{i+1} / 03</span>{i === 0 ? <Code2/> : i === 1 ? <Braces/> : <Layers3/>}</div>
          <h3>{group.title}</h3><div className="skill-items">{group.items.map(item => <span key={item}>{item}<ArrowUpRight size={12}/></span>)}</div>
        </Reveal>)}
      </div>
    </div>
  </section>
}

function Projects({ onSelect }) {
  return <section className="section-pad projects-section" id="projects">
    <div className="container">
      <Eyebrow number="04">A FEW THINGS I'VE BEEN BUILDING</Eyebrow>
      <div className="section-heading-row projects-heading"><h2>Selected work<span className="blue-dot">.</span></h2><p>Different problems. Different people. One consistent goal: make the digital experience work better.</p></div>
      <div className="project-list">
        {projects.map((project, i) => <Reveal key={project.number} className="project-row" delay={i * .07}>
          <button className="project-open" onClick={() => onSelect(project)} aria-label={`View details for ${project.name}`}>
            <ProjectVisual project={project}/>
            <div className="project-info">
              <div className="project-info-top"><span>{project.number} / 03</span><span>{project.type}</span></div>
              <h3>{project.name}<ArrowUpRight className="project-arrow" size={24}/></h3>
              <p>{project.description}</p>
              <div className="project-bottom"><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><span className="view-details">VIEW PROJECT NOTES <ArrowUpRight size={14}/></span></div>
              <div className="project-repo-row"><span className={project.repo ? 'repo-public' : 'repo-private'}>{project.repo ? '↗ ' : '● '}{project.visibility}</span> </div>
            </div>
          </button>
        </Reveal>)}
      </div>
      <div className="project-disclaimer"><Asterisk size={15}/> Project summaries are intentionally concise. External links can be added as each project is published.</div>
    </div>
  </section>
}

function Services() {
  const services = [
    ['01', 'Frontend development', 'Building interactive, maintainable interfaces with modern JavaScript and React.', Code2],
    ['02', 'Responsive websites', 'Creating layouts that feel considered and usable across screen sizes.', Globe2],
    ['03', 'UI implementation', 'Translating product ideas and design direction into clean, functional interfaces.', MousePointer2],
    ['04', 'API integration', 'Connecting frontend experiences to existing services and data workflows.', Zap],
  ]
  return <section className="section-pad services-section">
    <div className="container services-layout">
      <div className="services-intro"><Eyebrow number="05">HOW I CAN HELP</Eyebrow><h2>Good ideas<br/>deserve a <span>great build.</span></h2><p>From a first interface to a growing product, I enjoy making the web more useful, one thoughtful build at a time.</p></div>
      <div className="service-list">{services.map(([n, title, desc, Icon]) => <Reveal className="service-item" key={n}><span className="service-number">{n}</span><div><h3>{title}</h3><p>{desc}</p></div><Icon className="service-icon" size={21}/></Reveal>)}</div>
    </div>
  </section>
}

function Process() {
  const steps = [['01','Discover','Understand the problem, the people and what success should feel like.'],['02','Plan','Break the idea into clear priorities and a practical direction.'],['03','Build','Turn the plan into a responsive, working experience.'],['04','Refine','Test the details, improve the interactions and fix what gets in the way.'],['05','Deliver','Prepare the work for real use and keep learning from what comes next.']]
  return <section className="section-pad process-section">
    <div className="container">
      <Eyebrow number="06">A THOUGHTFUL WAY OF WORKING</Eyebrow>
      <div className="section-heading-row"><h2>From first thought<br/>to <span>finished detail.</span></h2><p>A simple process keeps the work focused without losing room for curiosity and iteration.</p></div>
      <div className="process-grid">{steps.map(([n,t,d],i) => <Reveal className="process-step" key={n} delay={i*.06}><span>{n}</span><div className="process-line"/><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
    </div>
  </section>
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [notice, setNotice] = useState('')
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})
  const update = e => { setForm({ ...form, [e.target.name]: e.target.value }); setErrors({ ...errors, [e.target.name]: '' }); setNotice('') }
  const submit = async e => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.subject.trim()) next.subject = 'Add a subject.'
    if (form.message.trim().length < 12) next.message = 'Please add a little more detail (at least 12 characters).'
    setErrors(next)
    if (Object.keys(next).length) return
    setSending(true)
    setNotice('')
    try {
      const response = await fetch('https://formspree.io/f/mnpddvea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message })
      })
      if (!response.ok) throw new Error('Form submission failed')
      setNotice('Thanks — your message has been sent successfully.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setNotice('Sorry, the message could not be sent. Please try again in a moment.')
    } finally {
      setSending(false)
    }
  }
  return <section className="section-pad contact-section" id="contact">
    <div className="container">
      <Eyebrow number="07">HAVE SOMETHING IN MIND?</Eyebrow>
      <div className="contact-layout">
        <div className="contact-copy"><h2>Let's make<br/>something <span>matter.</span></h2><p>Have a project, an idea or an opportunity worth discussing? I’d like to hear about it.</p><a href="#home" className="contact-back">BACK TO THE TOP <ArrowUpRight size={14}/></a><div className="contact-stamp"><span>GOOD WORK</span><Asterisk size={25}/><span>STARTS WITH</span><b>A CONVERSATION.</b></div></div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-row"><label>YOUR NAME<input name="name" value={form.name} onChange={update} placeholder="How should I call you?" aria-invalid={!!errors.name}/>{errors.name && <small>{errors.name}</small>}</label><label>EMAIL ADDRESS<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" aria-invalid={!!errors.email}/>{errors.email && <small>{errors.email}</small>}</label></div>
          <label>SUBJECT<input name="subject" value={form.subject} onChange={update} placeholder="What's this about?" aria-invalid={!!errors.subject}/>{errors.subject && <small>{errors.subject}</small>}</label>
          <label>YOUR MESSAGE<textarea name="message" rows="4" value={form.message} onChange={update} placeholder="Tell me a little about it..." aria-invalid={!!errors.message}/>{errors.message && <small>{errors.message}</small>}</label>
          <button className="button button-primary submit-button" type="submit" disabled={sending}>{sending ? 'SENDING…' : 'SEND MESSAGE'} <Send size={15}/></button>
          {notice && <p className="form-notice" role="status">{notice}</p>}
          <p className="form-caption">Messages are submitted securely through the Formspree endpoint configured for this portfolio.</p>
        </form>
      </div>
    </div>
  </section>
}

function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-main"><a className="wordmark footer-wordmark" href="#home">EMAZZY<span>®</span></a><p>Building with curiosity.<br/>Making the digital feel useful.<br/><a className="footer-github" href="https://github.com/EmmanueL3690" target="_blank" rel="noreferrer"><Github size={14}/> GITHUB / @EMMANUEL3690</a></p><a className="footer-top" href="#home">BACK TO TOP <ArrowUpRight size={15}/></a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} EMAZZY. ALL RIGHTS RESERVED.</span><span>EMMANUEL IZUCHUKWU INNOCENT</span><span>DESIGNED & BUILT WITH INTENTION <Asterisk size={13}/></span></div>
  </div></footer>
}

function Portfolio() {
  const [selected, setSelected] = useState(null)
  return <><Navbar/><main><Hero/><StoryExperience/><About/><Expertise/><Projects onSelect={setSelected}/><Services/><Process/><Contact/></main><Footer/><ProjectModal project={selected} onClose={() => setSelected(null)}/></>
}

export default function App() {
  return <ThemeProvider><Portfolio/></ThemeProvider>
}
