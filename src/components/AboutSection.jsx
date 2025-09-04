export default function AboutSection() {
  const highlights = [
    {
      title: 'Rising Star Award',
      description:
        'One of 13 winners out of 1,000+ professionals at Meta in 2023',
    },
    {
      title: 'Full-Stack Experience',
      description: 'React.js frontend with Python/FastAPI backend expertise',
    },
    {
      title: 'AI/ML Integration',
      description: 'Experience with OpenAI APIs, LangChain, and RAG systems',
    },
  ]

  return (
    <section id='about' className='section-even'>
      <h2>About Me</h2>
      <p>
        Software Engineer combining full-stack development expertise with a data
        analytics background. Experienced building React/Python applications at
        scale at Meta while leveraging AI/ML technologies.
      </p>
      <div className='cards-grid'>
        {highlights.map((highlight, index) => (
          <article key={index} className='card'>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
