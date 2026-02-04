import './About.css'

function About() {
  return (
    <div className="page-container">
      <section className="about-page">
        <div className="container">
          <h1 className="page-title">About Me</h1>
          
          <div className="about-content">
            <div className="about-text">
              <div className="about-section">
                <h2>Who I Am</h2>
                <p>
                  I'm a passionate front-end developer with a love for creating
                  beautiful and functional web experiences. With expertise in
                  modern JavaScript frameworks and a keen eye for design, I
                  transform ideas into digital realities.
                </p>
              </div>

              <div className="about-section">
                <h2>My Journey</h2>
                <p>
                  My journey in web development started with curiosity and has
                  evolved into a career. I've worked on various projects ranging
                  from small business websites to complex web applications,
                  always striving to deliver quality and user satisfaction.
                </p>
              </div>

              <div className="about-section">
                <h2>My Philosophy</h2>
                <p>
                  I believe in writing clean, maintainable code and creating
                  intuitive user experiences. Every project is an opportunity to
                  learn, grow, and push the boundaries of what's possible on the web.
                </p>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">30+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="timeline">
            <h2 className="timeline-title">Experience</h2>
            <div className="timeline-item">
              <div className="timeline-year">2023 - Present</div>
              <div className="timeline-content">
                <h3>Senior Front End Developer</h3>
                <p>Leading front-end development for multiple client projects</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021 - 2023</div>
              <div className="timeline-content">
                <h3>Front End Developer</h3>
                <p>Developed responsive web applications using React and Vue.js</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019 - 2021</div>
              <div className="timeline-content">
                <h3>Junior Web Developer</h3>
                <p>Started my journey building websites with HTML, CSS, and JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
