const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="section-underline"></div>

        <div className="about-content">
          <div className="about-image">
            <div className="avatar-large">
              <span className="placeholder">👨‍💻</span>
            </div>
          </div>

          <div className="about-text">
            <h3>Who Am I?</h3>
            <p>
              I'm a Frontend Developer passionate about building responsive and user-friendly 
              web interfaces using <strong>React.js</strong> and modern JavaScript technologies.
            </p>
            <p>
              Currently interning at <strong>Genicminds</strong>, where I contribute to frontend UI development, 
              reusable components, API integration, and responsive design improvements on real-world projects.
            </p>
            <p>
              Always learning, building, and improving.
            </p>
            <div className="intern-badge">
               Web Development Intern @ Genicminds | 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About