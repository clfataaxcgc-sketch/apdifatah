import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '🛒',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      tech: ['Vue.js', 'Firebase', 'TypeScript'],
      image: '📋',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts and interactive maps.',
      tech: ['React', 'API Integration', 'Chart.js'],
      image: '🌤️',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media performance with comprehensive data visualization.',
      tech: ['Next.js', 'D3.js', 'PostgreSQL'],
      image: '📊',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with smooth animations.',
      tech: ['React', 'CSS3', 'Framer Motion'],
      image: '💼',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness tracking app with workout plans, progress tracking, and statistics.',
      tech: ['React Native', 'Redux', 'GraphQL'],
      image: '💪',
    },
  ]

  return (
    <div className="page-container">
      <section className="projects-page">
        <div className="container">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            A collection of projects I've worked on, showcasing my skills and
            passion for web development.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-icon">{project.image}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <button className="project-btn">View Details</button>
                  <button className="project-btn secondary">GitHub</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
