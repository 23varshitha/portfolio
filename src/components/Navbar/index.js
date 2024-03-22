import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBgClassName = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'

      const websiteLogoImageURL = isDarkTheme
        ? 'https://scalebranding.com/wp-content/uploads/2022/02/vr-logo-RV-logo-01.jpg'
        : 'https://scalebranding.com/wp-content/uploads/2022/02/vr-logo-RV-logo-01.jpg'

      const navItemClassName = isDarkTheme
        ? 'list-text-dark-theme'
        : 'list-text-light-theme'

      return (
        <div className={`navbar ${navbarBgClassName}`}>
          <div className="navbar-content">
            <img
              className="website-logo"
              src={websiteLogoImageURL}
              alt="website logo"
            />
            <h1 className={`nav-head ${navItemClassName}`}>
              Varshitha Rachabanti
            </h1>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className={`nav-link ${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/about" className={`nav-link ${navItemClassName}`}>
                  About
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/resume" className={`nav-link ${navItemClassName}`}>
                  Resume
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/skills" className={`nav-link ${navItemClassName}`}>
                  Skills
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/projects" className={`nav-link ${navItemClassName}`}>
                  Projects
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/contact" className={`nav-link ${navItemClassName}`}>
                  Contact
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              className="theme-button"
              type="button"
              onClick={onToggleTheme}
            >
              <img className="theme-image" src={themeImageURL} alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
