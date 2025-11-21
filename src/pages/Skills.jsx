import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: '💻',
      title: 'Programming Languages',
      description: 'A strong foundation across system-level, application-level, and scripting languages, enabling both problem-solving and full-stack development.',
      skills: ['C++', 'Java', 'JavaScript', 'Python', 'C#', 'SQL'],
      highlights: [
        'C++ for DSA, performance, and competitive problem-solving',
        'Java for backend logic and object-oriented design',
        'JavaScript for both frontend & backend web development',
        'Python for automation and quick prototyping',
        'C# for Unity game development',
        'SQL for database querying and optimized data operations'
      ]
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Experienced in building responsive, modern web apps with clean UI and efficient backend workflows.',
      skills: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express.js'],
      frontend: [
        'Component-based development',
        'Reusable UI patterns',
        'Hooks & state management',
        'Mobile-first layouts'
      ],
      backend: [
        'REST API development',
        'Authentication & middleware',
        'Routing & controllers',
        'API integrations'
      ]
    },
    {
      icon: '🗄️',
      title: 'Databases',
      description: 'Practical experience with structured and real-time database solutions.',
      skills: ['PostgreSQL', 'Supabase'],
      capabilities: [
        'Schema design',
        'Query optimization',
        'CRUD operations',
        'Realtime updates via Supabase'
      ]
    },
    {
      icon: '🧰',
      title: 'Tools & Platforms',
      description: 'Tools I use every day to build, test, deploy, and collaborate.',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Render', 'Vercel'],
      workflows: [
        'Version control with Git',
        'Debugging & API testing in Postman',
        'Deployment using Render & Vercel',
        'Collaborative workflow using GitHub'
      ]
    },
    {
      icon: '🎮',
      title: 'Game Development',
      description: 'Hands-on experience building interactive gameplay, mechanics, and UI systems.',
      skills: ['Unity Engine (C#)'],
      experience: [
        '2D game mechanics',
        'Player movement & combat',
        'Enemy AI logic',
        'UI/UX for games',
        'Level design'
      ]
    }
  ];

  const skillHighlights = [
    {
      icon: '⚡',
      title: 'Full-Stack Capabilities',
      description: 'Able to build complete applications—from frontend UI to backend APIs and database integration.'
    },
    {
      icon: '🔢',
      title: 'Strong DSA Background',
      description: '500+ LeetCode problems solved, improving logic, optimization, and algorithmic problem-solving.'
    },
    {
      icon: '🚀',
      title: 'Real-World Project Experience',
      description: 'Developed production-ready apps including FleetGuard AI, Green Trails, SilentSOS, and The Last Protector game.'
    },
    {
      icon: '✨',
      title: 'Fast Learner & Clean Coder',
      description: 'Focus on writing maintainable, structured, and scalable code across all projects.'
    }
  ];

  const currentlyImproving = [
    'Advanced React patterns',
    'Better backend API architecture',
    'Mobile UI animations & structure',
    'System design principles'
  ];

  return (
    <div className="skills-page">
      <div className="container">
        {/* Header Section */}
        <AnimatedSection>
          <div className="skills-header">
            <motion.h1 
              className="skills-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Technical Skills
            </motion.h1>
            <motion.p 
              className="skills-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A comprehensive overview of my technical expertise and development capabilities
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Main Skills Grid */}
        <AnimatedSection delay={0.3}>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="skill-category-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <p className="category-description">{category.description}</p>

                {/* Skills Tags */}
                <div className="skills-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>

                {/* Category Details */}
                <div className="category-details">
                  {category.highlights && (
                    <div className="detail-section">
                      <h4>Highlights:</h4>
                      <ul>
                        {category.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.frontend && (
                    <div className="detail-section">
                      <h4>Frontend Development:</h4>
                      <ul>
                        {category.frontend.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.backend && (
                    <div className="detail-section">
                      <h4>Backend Development:</h4>
                      <ul>
                        {category.backend.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.capabilities && (
                    <div className="detail-section">
                      <h4>What I can do:</h4>
                      <ul>
                        {category.capabilities.map((capability, idx) => (
                          <li key={idx}>{capability}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.workflows && (
                    <div className="detail-section">
                      <h4>Workflows:</h4>
                      <ul>
                        {category.workflows.map((workflow, idx) => (
                          <li key={idx}>{workflow}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.experience && (
                    <div className="detail-section">
                      <h4>Experience:</h4>
                      <ul>
                        {category.experience.map((exp, idx) => (
                          <li key={idx}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skill Highlights */}
        <AnimatedSection delay={0.5}>
          <div className="highlights-section">
            <h2 className="section-title">Skill Highlights</h2>
            <div className="highlights-grid">
              {skillHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Currently Improving Section */}
        <AnimatedSection delay={0.7}>
          <div className="improving-section">
            <div className="improving-card">
              <div className="improving-header">
                <span className="improving-icon">⭐</span>
                <h3 className="improving-title">Currently Improving</h3>
              </div>
              <p className="improving-subtitle">
                A small section that shows you're growing (recruiters love this):
              </p>
              <div className="improving-grid">
                {currentlyImproving.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="improving-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="improving-bullet">⟳</span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Skills;