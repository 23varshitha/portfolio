import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const homeImageURL = isDarkTheme
        ? 'https://img.freepik.com/premium-photo/photo-professional-young-indian-business-woman-dressed-up-generative-ai_849906-8198.jpg'
        : 'https://img.freepik.com/premium-photo/photo-professional-young-indian-business-woman-dressed-up-generative-ai_849906-8198.jpg'

      const homeTextClassName = isDarkTheme
        ? 'home-text-light'
        : 'home-text-dark'

      return (
        <div className={`home-app-container ${homeBgClassName}`}>
          <Navbar />
          <div className="home-responsive-container">
            <div className="home-container">
              <div className="home-right">
                <h1 className={`home-heading ${homeTextClassName}`}>
                  Hello! <br /> I am Varshitha
                </h1>
                <p className={`home-para ${homeTextClassName}`}>
                  UI/UX Designer, Frontend Developer & Thinker Based in India
                </p>
              </div>
            </div>
            <div className="home-left">
              <img className="home-image" src={homeImageURL} alt="home" />
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
