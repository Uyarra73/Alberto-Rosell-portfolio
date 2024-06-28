import styles from './SkillStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            {/* We use the generic componet SkillList assigning the values of the props */}
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='JavaScript'/>
            <SkillList src={checkMarkIcon} skill='React'/>
            <SkillList src={checkMarkIcon} skill='Bootstrap'/>
            <SkillList src={checkMarkIcon} skill='Tailwind'/>
            <SkillList src={checkMarkIcon} skill='Git'/>
        </div>
        <hr/>
    </section>
  );
}

export default Skills;
