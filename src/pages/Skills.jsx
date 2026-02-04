import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 88 },
        { name: 'Vue.js', level: 85 },
        { name: 'TypeScript', level: 82 },
      ],
    },
    {
      category: 'Tools & Libraries',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Webpack', level: 80 },
        { name: 'Redux', level: 85 },
        { name: 'Jest', level: 78 },
        { name: 'Sass/SCSS', level: 88 },
      ],
    },
    {
      category: 'Design',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'UI/UX Design', level: 87 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
  ]

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Vue.js', icon: '🟢' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git', icon: '🔀' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'MongoDB', icon: '🍃' },
  ]

  return (
    <div className="page-container">
      <section className="skills-page">
        <div className="container">
          <h1 className="page-title">Skills & Technologies</h1>
          <p className="page-subtitle">
            Technologies and tools I use to bring ideas to life.
          </p>

          <div className="skills-content">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h2 className="category-title">{category.category}</h2>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="technologies-section">
            <h2 className="section-title">Technologies I Work With</h2>
            <div className="technologies-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-card">
                  <div className="tech-icon">{tech.icon}</div>
                  <div className="tech-name">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
