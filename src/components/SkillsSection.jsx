export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Backend',
      skills: ['Python', 'FastAPI', 'Express.js', 'RESTful APIs', 'GraphQL'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Git/GitHub'],
    },
    {
      title: 'AI/ML',
      skills: ['OpenAI APIs', 'LangChain', 'Hugging Face', 'RAG Systems'],
    },
  ]

  return (
    <section id='skills' className='section-odd'>
      <h2>Skills</h2>
      <div className='cards-grid'>
        {skillCategories.map((category, index) => (
          <article key={index} className='card skill-card'>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
