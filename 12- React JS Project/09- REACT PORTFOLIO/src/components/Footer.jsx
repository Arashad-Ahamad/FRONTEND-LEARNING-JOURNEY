import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = {
    github: 'https://github.com/Arashad-Ahamad',
    linkedin: 'https://www.linkedin.com/in/arashad-ahamad-768935337/',
    twitter: 'https://x.com/ArashadAhamad10',
    email: 'mailto:96arashad@gmail.com'
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>Arashad Ahamad</h3>
          <div className="social-links">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"><FiGithub /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
            <a href={socialLinks.email}><FiMail /></a>
          </div>
          <div className="copyright">
            © {currentYear} Arashad Ahamad. Built with <span style={{color: '#3b82f6'}}>React</span> & <span style={{color: '#38bdf8'}}>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer