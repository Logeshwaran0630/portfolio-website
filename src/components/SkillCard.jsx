import { motion } from 'framer-motion';
import './SkillCard.css';

const SkillCard = ({ category, skills }) => {
  return (
    <motion.div
      className="skill-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="skill-category">{category}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;