import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [['About', '#about'], ['Projects', '#projects'], ['Expertise', '#expertise'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={close}>EMAZZY<span>®</span></a>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <span className="availability"><i /> OPEN TO OPPORTUNITIES</span>
          <ThemeToggle />
          <a className="nav-cta" href="#contact">LET'S TALK <ArrowUpRight size={14} /></a>
        </div>
        <button className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
          {links.map(([label, href]) => <a key={label} href={href} onClick={close}>{label}<ArrowUpRight size={16} /></a>)}
          <div className="mobile-menu-bottom"><span className="availability"><i /> OPEN TO OPPORTUNITIES</span><ThemeToggle /></div>
          <a className="mobile-contact" href="#contact" onClick={close}>START A CONVERSATION <ArrowUpRight size={16} /></a>
        </motion.div>}
      </AnimatePresence>
    </header>
  )
}
