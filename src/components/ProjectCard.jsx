import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const getCategoryColor = (category) => {
    const colors = {
      ai: '#10b981',
      mobile: '#3b82f6',
      game: '#f59e0b',
      web: '#8b5cf6'
    };
    return colors[category] || '#6b7280';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      ai: '🤖',
      mobile: '📱',
      game: '🎮',
      web: '🌐'
    };
    return icons[category] || '🚀';
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {/* Project Image */}
      <div className="project-image">
        <div 
          className="project-placeholder"
          style={{ 
            background: `linear-gradient(135deg, ${getCategoryColor(project.category)}20, ${getCategoryColor(project.category)}40)`
          }}
        >
          <span className="project-category-icon">
            {getCategoryIcon(project.category)}
          </span>
          <span className="project-title-overlay">{project.title}</span>
        </div>
        <div className="project-overlay">
          <div className="project-links">
            <motion.a
              href={project.live}
              className="project-link live-demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.category === 'game' ? '🎮 Play Game' : project.category === 'mobile' ? '📱 Live App' : '⭐ Live Demo'}
            </motion.a>
            <motion.a
              href={project.github}
              className="project-link github"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 GitHub
            </motion.a>
          </div>
        </div>
        
        {/* Project Type Badge */}
        <div 
          className="project-type-badge"
          style={{ backgroundColor: getCategoryColor(project.category) }}
        >
          {getCategoryIcon(project.category)} {project.type}
        </div>
      </div>
      
      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="project-tech">
          {project.tech.map((tech, techIndex) => (
            <motion.span 
              key={techIndex}
              className="tech-badge"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <div 
        className="project-glow"
        style={{ 
          background: `radial-gradient(circle at center, ${getCategoryColor(project.category)}20, transparent 70%)`
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;