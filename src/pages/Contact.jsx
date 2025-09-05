import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000)
    }, 1000)
  }

  return (
    <>
      <title>Contact</title>
      <Header />

      <section id='contact'>
        <h2>Get In Touch</h2>
        <p>
          Interested in working together? I'd love to hear about your project
          and discuss how I can help bring your ideas to life.
        </p>

        <div className='contact-container'>
          <div className='contact-info'>
            <h3>Let's Connect</h3>
            <div className='contact-item'>
              <strong>Email:</strong>
              <a href='mailto:jackcaindev@gmail.com'>jackcaindev@gmail.com</a>
            </div>
            <div className='contact-item'>
              <strong>Location:</strong>
              <span>Atlanta, Georgia</span>
            </div>
            <div className='contact-item'>
              <strong>LinkedIn:</strong>
              <a
                href='https://linkedin.com/in/cain-jack'
                target='_blank'
                rel='noopener noreferrer'>
                Jack Cain
              </a>
            </div>
          </div>

          <div className='contact-form-wrapper'>
            {submitStatus === 'success' && (
              <div className='success-message'>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form className='contact-form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name *</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email *</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='subject'>Subject</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Project inquiry, job opportunity, etc.'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='message'>Message *</label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='5'
                  required
                  placeholder='Tell me about your project or opportunity...'></textarea>
              </div>

              <button
                type='submit'
                className='submit-btn'
                disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
