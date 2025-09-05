export default function ProjectsSection() {
  const skillCategories = [
    {
      title: 'Todo App',
      short_description: '',
    },
    {
      title: 'Backend',
      short_description: '',
    },
    {
      title: 'Cloud & DevOps',
      short_description: '',
    },
    {
      title: 'AI/ML',
      short_description: '',
    },
  ]

  return (
    <section id='projects'>
      <h2>My Projects</h2>
      <div className='cards-grid'>
        {skillCategories.map((category, index) => (
          <article key={index} className='card skill-card'>
            <h3>{category.title}</h3>
            <p>description</p>
            <p>See full description</p>
          </article>
        ))}
      </div>
    </section>
  )
}
