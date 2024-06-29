
import styles from './ProjectStyles.module.css';
import camino from '../../assets/camino.jpg'
import ProjectCard from '../../common/ProjectCard';

const Project = () => {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            {/* ProjectCard component with customized props. You can add as many projects as you want */}
            <ProjectCard 
                src={camino} 
                link={'https://caminovisualworks.netlify.app/'} 
                h3='Camino landing page' 
                p='HTML, CSS and JS landing page'/>
            <ProjectCard 
                src={camino} 
                link={'https://caminovisualworks.netlify.app/'} 
                h3='Camino landing page' 
                p='HTML, CSS and JS landing page'/>
        </div>
    </section>
  );
}

export default Project;
