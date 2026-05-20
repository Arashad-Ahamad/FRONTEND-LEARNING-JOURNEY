import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    { icon: <FiMail />, title: 'Email', value: '96arashad@gmail.com', link: 'mailto:96arashad@gmail.com' },
    { icon: <FiMapPin />, title: 'Location', value: 'Noida, India', link: null },
    { icon: <FiPhone />, title: 'Phone', value: '+91 9696333696', link: 'tel:+919696333696' },
  ]

  const socialLinks = [
    { icon: <FiGithub />, name: 'GitHub', url: 'https://github.com/Arashad-Ahamad' },
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com/in/arashad-ahamad-768935337' },
    { icon: <FiTwitter />, name: 'Twitter', url: 'https://twitter.com/ArashadAhamad10' },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact <span>Me</span></h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">Have a project in mind? Let's work together!</p>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h3> Get in Touch</h3>
            <p>Feel free to reach out to me for any questions, collaboration, or just to say hello!</p>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="info-item">
                <div className="info-icon">{info.icon}</div>
                <div className="info-content">
                  <h4>{info.title}</h4>
                  {info.link ? (
                    <a href={info.link}>{info.value}</a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links - Connect with Me */}
            <div className="social-connect">
              <h4> Connect with Me</h4>
              <div className="social-links-contact">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-contact-icon"
                    aria-label={social.name}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <h3> Send a Message</h3>
            {isSubmitted && <div className="success-msg">✅ Thank you! I'll get back to you soon.</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                <FiSend /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact