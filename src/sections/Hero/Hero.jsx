import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'


const Hero = () => {
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
            <a href='https:/twitter.com/' target='_blank'>
              <img src={twitterIcon} alt='Twitter Icon'/>
            </a>
            <a href='https:/github.com/' target='_blank'>
              <img src={githubIcon} alt='Github Icon'/>
            </a>
            <a href='https:/linkedin.com/' target='_blank'>
              <img src={linkedinIcon} alt='Linkedin Icon'/>
            </a>
          </span>
        </div>
      </section>
      
    </div>
  )
}

export default Hero
