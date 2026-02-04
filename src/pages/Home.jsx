import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">John Doe</span>
            </h1>
            <h2 className="hero-subtitle">Front End Developer</h2>
            <p className="hero-description">
              I create beautiful, responsive, and user-friendly web experiences
              using modern technologies. Passionate about clean code and
              intuitive design.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar-placeholder">
              <svg
                width="300"
                height="300"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
                <circle cx="100" cy="80" r="30" fill="#fff" />
                <ellipse cx="100" cy="140" rx="50" ry="40" fill="#fff" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="200">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Creating intuitive and beautiful user interfaces</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Performance</h3>
              <p>Optimized code for lightning-fast load times</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive</h3>
              <p>Works seamlessly across all devices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
