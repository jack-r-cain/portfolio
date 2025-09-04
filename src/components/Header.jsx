export default function Header() {
  return (
    <header>
      <nav>
        <div className='logo'>
          <img src='/logo.svg' alt='python logo' style={{ height: '60px' }} />
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
  )
}
