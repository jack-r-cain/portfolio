import { Link } from 'react-router'

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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/projects'>My Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
