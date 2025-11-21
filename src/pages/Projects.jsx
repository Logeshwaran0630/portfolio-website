import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'FleetGuard AI',
      type: 'Full Stack + AI Application',
      description: 'Developed an intelligent fleet management platform with AI-powered damage detection and automated repair cost estimation. Integrated Gemini Vision API for real-time vehicle analysis.',
      tech: ['React', 'Express.js', 'Node.js', 'Supabase', 'Tailwind', 'Gemini Vision API'],
      github: 'https://github.com',
      live: 'https://fleetguard-demo.com',
      image: '/api/placeholder/400/250',
      category: 'ai'
    },
    {
      id: 2,
      title: 'Green Trails',
      type: 'Full Stack Mobile App',
      description: 'Created a real-time eco-tourism tracking app with live Google Maps integration and QR-based volunteer check-ins. Designed gamified badges and eco-leaderboards.',
      tech: ['React Native', 'Node.js', 'Firebase', 'PostgreSQL', 'Google Maps'],
      github: 'https://github.com',
      live: 'https://greentrails-app.com',
      image: '/api/placeholder/400/250',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'The Last Protector',
      type: '2D Action-Adventure Game',
      description: 'Designed and developed a 2D action-adventure game with enemy AI, combat mechanics, player controls, and UI systems. Entirely built in Unity using C#.',
      tech: ['Unity', 'C#', 'itch.io'],
      github: 'https://github.com',
      live: 'https://lastprotector.itch.io',
      image: '/api/placeholder/400/250',
      category: 'game'
    },
    {
      id: 4,
      title: 'SilentSOS',
      type: 'Emergency Mobile App',
      description: 'Built a safety-first mobile app enabling users to silently send emergency alerts with live location sharing. Implemented secure authentication and real-time tracking.',
      tech: ['React Native', 'Firebase', 'Node.js', 'Google Maps API'],
      github: 'https://github.com',
      live: 'https://silentsos-app.com',
      image: '/api/placeholder/400/250',
      category: 'mobile'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="projects-page">
      <div className="container">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="projects-hero">
            <motion.h1 
              className="projects-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </motion.h1>
            <motion.p 
              className="projects-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A collection of my best full-stack, AI, and game development work
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatedSection delay={0.4}>
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Tech Stack Overview */}
        <AnimatedSection delay={0.6}>
          <div className="tech-overview">
            <h3 className="tech-title">Technologies I Work With</h3>
            <div className="tech-tags">
              {['React', 'React Native', 'Node.js', 'Express.js', 'Unity', 'C#', 
                'Firebase', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Gemini AI'].map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;