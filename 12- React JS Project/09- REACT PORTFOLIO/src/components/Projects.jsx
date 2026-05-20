import { FiGithub, FiExternalLink } from 'react-icons/fi'

import shophubImg from '../assets/images/shophub.jpg'
import worldAtlasImg from '../assets/images/world-atlas.jpg'
import crudAppImg from '../assets/images/crud-app.jpg'
import portfolioImg from '../assets/images/portfolio.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ShopHub E-Commerce App',
      description: 'Modern e-commerce app with cart management, Redux Toolkit state management, and fully responsive design.',
      features: ['Add/Remove items', 'Update quantity', 'Auto-calculate price', 'LocalStorage persistence', 'Toast notifications'],
      tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Axios', 'FakeStore API'],
      github: 'https://github.com/Arashad-Ahamad/shophub-ecommerce-app.git',
      live: 'https://shophub-ecommerce-app.vercel.app/',
      image: shophubImg
    },
    {
      id: 2,
      title: 'World Atlas - Country Explorer',
      description: 'Explore countries worldwide with detailed information, search, filter by region, and sort functionality.',
      features: ['Browse all countries', 'Search by name', 'Filter by region', 'Sort alphabetically', 'Country details page'],
      tech: ['React', 'React Router', 'Axios', 'CSS', 'REST Countries API'],
      github: 'https://github.com/Arashad-Ahamad/react-world-atlas.git',
      live: 'https://world-atlas-arashad.netlify.app/',
      image: worldAtlasImg
    },
    {
      id: 3,
      title: 'React CRUD App',
      description: 'Complete CRUD application with API integration. Create, Read, Update, Delete posts in real-time.',
      features: ['Create new posts', 'Read all posts', 'Update existing posts', 'Delete posts', 'Form validation'],
      tech: ['React', 'Axios', 'REST API', 'CSS', 'JSONPlaceholder'],
      github: 'https://github.com/Arashad-Ahamad/react-crud-app.git',
      live: 'https://react-crud-app-arashad.netlify.app/',
      image: crudAppImg
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      description: 'Modern portfolio website showcasing skills, projects, and professional experience.',
      features: ['Dark/Light mode', 'Fully responsive', 'Smooth scrolling', 'Active navigation', 'Contact form'],
      tech: ['React', 'CSS', 'React Icons', 'Vite'],
      github: 'https://github.com/Arashad-Ahamad/react-portfolio',
      live: 'https://react-portfolio-arashad.vercel.app/',
      image: portfolioImg
    }
  ]

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">Here are some of my recent projects</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image-img"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<span class="project-image-emoji">${
                      project.id === 1 ? '🛒' : project.id === 2 ? '🌍' : project.id === 3 ? '📝' : '🎨'
                    }</span>`
                  }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <span className="features-title"> Key Features:</span>
                  <div className="features-list">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                    <FiGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects