
import styles from './ProjectStyles.module.css';
import camino from '../../assets/camino.jpg'

const Project = () => {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <a href='https://caminovisualworks.netlify.app/' target='_blank'>
                <img className='hover' src={camino} alt='Camino landing page'/>
                <h3>Camino landing page</h3>
                <p>An atractive landing page for a visual works compony</p>
            </a>
        </div>
    </section>
  );
}

export default Project;
