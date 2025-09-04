import React from 'react'
import { Link } from 'react-router'

export default function HeroSection() {
  return (
    <section className='hero'>
      <h1>Jack Cain</h1>
      <p>Software Engineer</p>
      <p>
        Full-stack developer with data analytics expertise, experienced in
        building React/Python applications at scale and leveraging AI/ML
        technologies.
      </p>
      <div>
        <Link to='/projects'>See what I'm working on</Link>
        <a href='mailto:jackcaindev@gmail.com'>Email Me</a>
      </div>
    </section>
  )
}
