import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'New York, USA',
      link: null,
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/johndoe',
      link: 'https://linkedin.com/in/johndoe',
    },
  ]

  return (
    <div className="page-container">
      <section className="contact-page">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Have a project in mind or want to collaborate? Let's talk!
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <h2 className="info-title">Contact Information</h2>
              <p className="info-description">
                Feel free to reach out through any of these channels. I'm always
                open to discussing new projects, creative ideas, or opportunities
                to be part of your visions.
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-detail">
                    <div className="detail-icon">{info.icon}</div>
                    <div className="detail-content">
                      <div className="detail-label">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="detail-value"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="detail-value">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
