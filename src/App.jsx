function App() {
  return (
    <>
      <title>Jack Cain</title>
      <div>
        <header>
          <nav>
            <div className='logo'>
              <img
                src='/logo.svg'
                alt='python logo'
                style={{ height: '80px' }}
              />
              <h1>Jack Cain Dev</h1>
            </div>
            <ul>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#skills'>Skills</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section>
            <h1>Jack Cain</h1>
            <h3>Software Engineer</h3>
            <p>
              Hi! I am a Full-stack developer experienced in building
              React/Python applications at scale and leveraging AI/ML
              technologies.
            </p>
            <div>
              <a href='#contact'>See my projects!</a>
              <a href='mailto:jackcaindev@gmail.com'>Email Me</a>
            </div>
          </section>

          <section id='about'>
            <h2>About Me</h2>
            <p>
              Software Engineer combining full-stack development expertise with
              a data analytics background. Experienced building React/Python
              applications at scale at Meta while leveraging AI/ML technologies.
            </p>
            <div>
              <article>
                <h3>Rising Star Award</h3>
                <p>One of 13 winners out of 1,000+ professionals in 2023</p>
              </article>
              <article>
                <h3>Full-Stack Experience</h3>
                <p>
                  React.js frontend with Python/FastAPI/Node.js backend
                  expertise
                </p>
              </article>
              <article>
                <h3>AI/ML Integration</h3>
                <p>
                  Experienced integrating AI into full-stack apps. Knowledgeable
                  in OpenAI/GCP APIs, LangChain, Vector Search and RAG systems
                </p>
              </article>
            </div>
          </section>

          <section id='skills'>
            <h2>Skills</h2>
            <div>
              <article>
                <h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </article>
              <article>
                <h3>Backend</h3>
                <ul>
                  <li>Python</li>
                  <li>FastAPI</li>
                  <li>Express.js</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                </ul>
              </article>
              <article>
                <h3>Cloud & DevOps</h3>
                <ul>
                  <li>AWS (EC2, S3, Lambda)</li>
                  <li>Docker</li>
                  <li>Git/GitHub</li>
                </ul>
              </article>
              <article>
                <h3>AI/ML</h3>
                <ul>
                  <li>OpenAI APIs</li>
                  <li>LangChain</li>
                  <li>Hugging Face</li>
                  <li>RAG Systems</li>
                </ul>
              </article>
            </div>
          </section>
        </main>

        <footer id='contact'>
          <p>&copy; 2025 Jack Cain</p>
          <div>
            <a href='https://linkedin.com/in/cain-jack'>LinkedIn</a>
            <a href='mailto:jackcaindev@gmail.com'>jackcaindev@gmail.com</a>
            <a href='https://github.com/jack-r-cain'>Github</a>
            <span>Atlanta, Georgia</span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
