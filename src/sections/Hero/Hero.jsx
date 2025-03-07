import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'


const Hero = () => {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark;

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
            alt='Color mode icon' 
            className={styles.colorMode}
            onClick={toggleTheme}/>
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
          <p className={styles.description}>With a passion for developing modern web sites and apps for any kind of busimesses</p>
          <a href={CV} download>
            <button className='hover'>Download CV</button>
          </a>
        </div>
      </section>
      
    </div>
  )
}

export default Hero
