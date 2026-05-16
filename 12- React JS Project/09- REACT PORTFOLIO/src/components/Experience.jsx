import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Web Development Intern',
      company: 'Genicminds',
      location: 'Noida, India',
      period: 'Feb 2026 – Present',
      description: [
        'Building responsive frontend UI using React.js and Tailwind CSS',
        'Working on reusable components and API integration for dynamic functionality',
        'Improving mobile responsiveness and UI consistency across all devices',
        'Collaborating with team members using Git and GitHub for version control',
        'Following clean code and frontend best practices',
      ],
      technologies: [
        'React.js',
        'Tailwind CSS',
        'JavaScript',
        'Git',
        'REST API',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          My <span>Experience</span>
        </h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          Professional Experience My journey so far
        </p>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <div>
                  <h3>{exp.title}</h3>
                  <div className="company">{exp.company}</div>
                </div>
                {/* Duration badge removed - ab nahi dikhega */}
              </div>

              <div className="timeline-details">
                <span>
                  <FiMapPin /> {exp.location}
                </span>
                <span>
                  <FiCalendar /> {exp.period}
                </span>
                <span>
                  <FiBriefcase /> Internship
                </span>
              </div>

              <ul>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="tech-stack">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
