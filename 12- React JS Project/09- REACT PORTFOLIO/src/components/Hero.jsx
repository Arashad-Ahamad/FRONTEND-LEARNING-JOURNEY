import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from 'react-icons/fi'
import profilePhoto from '../assets/images/photo.jpg'   

const Hero = () => {
  const socialLinks = {
    github: 'https://github.com/Arashad-Ahamad',
    linkedin: 'https://www.linkedin.com/in/arashad-ahamad-768935337/',
    twitter: 'https://x.com/ArashadAhamad10'
  }

  const resumeLink = 'https://drive.google.com/uc?export=download&id=1is9B3UFIVNy8vQW2K5z-2_AKxNhqLkmO'

  const handleDownloadResume = () => {
    // Create hidden anchor tag and trigger download
    const link = document.createElement('a')
    link.href = resumeLink
    link.download = 'Arashad_Ahamad_Resume.pdf' // File name for download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleHireMe = () => {
    window.location.href = 'mailto:96arashad@gmail.com'
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="greeting"> Hi, I'm</div>
          <h1>Arashad <span>Ahamad</span></h1>
          <div className="title">Frontend Developer | React.js</div>
          <p>
            Building responsive, user-friendly web applications with modern JavaScript and React.js.
            Currently interning at Genicminds.
          </p>
          
          <div className="btn-group">
            <button onClick={handleHireMe} className="btn-primary">
              <FiMail /> Hire Me
            </button>
            
            <button onClick={handleDownloadResume} className="btn-outline">
              <FiDownload /> Resume
            </button>
          </div>

          <div className="social-links">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"><FiGithub /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
          </div>
        </div>

        <div className="hero-image">
          <div className="avatar">
            <img 
              src={profilePhoto}    
              alt="Arashad Ahamad"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero