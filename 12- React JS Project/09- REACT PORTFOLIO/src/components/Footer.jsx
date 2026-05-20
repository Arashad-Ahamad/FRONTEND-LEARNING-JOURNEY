import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = {
    github: 'https://github.com/Arashad-Ahamad',
    linkedin: 'https://www.linkedin.com/in/arashad-ahamad-768935337/',
    twitter: 'https://x.com/ArashadAhamad10',
    email: 'mailto:96arashad@gmail.com'
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content - 3 Columns */}
        <div className="footer-grid">
          
          {/* Column 1 - Brand */}
          <div className="footer-brand">
            <h3>Arashad Ahamad</h3>
            <p>Frontend Developer | React.js</p>
            <p className="footer-tagline">
              Building responsive, user-friendly web applications with modern JavaScript and React.js.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Connect & Contact */}
          <div className="footer-connect">
            <h4>Connect With Me</h4>
            <div className="footer-social">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href={socialLinks.email} aria-label="Email">
                <FiMail />
              </a>
            </div>
            <div className="footer-contact">
              <p> 96arashad@gmail.com</p>
              <p> Noida, India</p>
              <p> +91 9696333696</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="copyright">
          <p>© {currentYear} Arashad Ahamad. All rights reserved.</p>
        </div>

        {/* Scroll to Top Button */}
        <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
          <FiArrowUp />
        </button>
      </div>
    </footer>
  )
}

export default Footer