import { 
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiGit, DiNpm 
} from 'react-icons/di'
import { 
  SiTailwindcss, SiRedux, SiAxios, SiVite, SiGithub, SiNetlify, SiVercel
} from 'react-icons/si'
import { 
  BiMobile, BiCodeAlt, BiDesktop, BiBugAlt 
} from 'react-icons/bi'
import { 
  FaDatabase, FaServer, FaCode 
} from 'react-icons/fa'

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: <DiHtml5 /> },
    { name: 'CSS3', icon: <DiCss3 /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Responsive Design', icon: <BiMobile /> },
    { name: 'JavaScript (ES6+, DOM, OOPs)', icon: <DiJavascript1 /> },
    { name: 'Async/Await, API Integration', icon: <DiJavascript1 /> },
    { name: 'React JS', icon: <DiReact /> },
    { name: 'React Router', icon: <BiCodeAlt /> },
    { name: 'Redux Toolkit', icon: <SiRedux /> },
  ]

  const otherSkills = [
    { name: 'REST API & Fetch API', icon: <FaServer /> },
    { name: 'Axios', icon: <SiAxios /> },
    { name: 'CRUD Operations', icon: <BiCodeAlt /> },
    { name: 'localStorage', icon: <FaDatabase /> },
    { name: 'npm & Vite', icon: <DiNpm /> },
    { name: 'Git & GitHub', icon: <DiGit /> },
    { name: 'Netlify & Vercel', icon: <SiNetlify /> },
    { name: 'VS Code', icon: <FaCode /> },           
    { name: 'Chrome DevTools', icon: <BiBugAlt /> }, 
  ]

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-card-header">
              <h3>Frontend Development</h3>
            </div>
            <div className="skill-badges">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  <span className="badge-icon">{skill.icon}</span>
                  <span className="badge-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <h3>Tools & Technologies</h3>
            </div>
            <div className="skill-badges">
              {otherSkills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  <span className="badge-icon">{skill.icon}</span>
                  <span className="badge-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills