import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'

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
      </section>
      
    </div>
  )
}

export default Hero
