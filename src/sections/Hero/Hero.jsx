import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'


const Hero = () => {
  const {theme, toggleTheme} = useTheme;
  return (
    <div>
      <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img 
            className={styles.hero} 
            src={heroImg} 
            alt='profile picture'/>
          <img 
            src={themeIcon} 
            alt='Color mode' 
            className={styles.colorMode}/>
        </div>
        <div className={styles.info}>
          <h1>Alberto <br/>Rosell</h1>
          <h2>Frontend Developer</h2>
          <span>
            <a href='https:/github.com/' target='_blank'>
              <img src={githubIcon} alt='Github Icon'/>
            </a>
            <a href='https:/linkedin.com/' target='_blank'>
              <img src={linkedinIcon} alt='Linkedin Icon'/>
            </a>
          </span>
          <p>With a passion for developing modern React web apps for any kind of busimesses</p>
          <a href={CV} download>
            <button className='hover'>Resume</button>
          </a>
        </div>
      </section>
      
    </div>
  )
}

export default Hero
