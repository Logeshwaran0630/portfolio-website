import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

const About = () => {
  const corePrinciples = [
    {
      icon: '🎯',
      title: 'Build with Purpose',
      description: 'Every project I work on aims to solve a real need—whether it\'s simplifying fleet operations, improving eco-volunteer coordination, or enhancing personal safety through mobile apps.'
    },
    {
      icon: '🧹',
      title: 'Keep It Clean & Scalable',
      description: 'I value well-structured code, readable components, modular logic, and maintainable architectures. I\'m always working to balance performance with simplicity.'
    },
    {
      icon: '🚀',
      title: 'Learn Fast, Improve Faster',
      description: 'From React and Node.js to Unity and React Native, I constantly explore new tools and patterns. Continuous learning is my biggest strength as a developer.'
    }
  ];

  const engineeringActivities = [
    'Solving problems on LeetCode',
    'Building production-ready apps',
    'Learning new frameworks & patterns',
    'Exploring UI/UX design',
    'Creating game prototypes',
    'Contributing to open-source ideas'
  ];

  const personalInterests = [
    { icon: '🎮', text: 'Playing PC games' },
    { icon: '📱', text: 'Designing app concepts' },
    { icon: '⚡', text: 'Learning productivity techniques' },
    { icon: '🌿', text: 'Thinking of new project ideas' }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Header Section */}
        <AnimatedSection>
          <div className="about-header">
            <motion.h1 
              className="about-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h1>
          </div>
        </AnimatedSection>

        {/* Main Introduction */}
        <AnimatedSection delay={0.2}>
          <div className="main-intro">
            <p className="intro-lead">
              I'm <span className="highlight">Logeshwaran J</span>, an aspiring Software Development Engineer passionate about building meaningful digital products.
            </p>
            <p className="intro-text">
              I enjoy transforming ideas into real applications through clean architecture, intuitive design, and well-structured code.
            </p>
            <p className="intro-text">
              My engineering journey has been shaped by curiosity—whether it's solving algorithmic challenges, designing smooth user experiences, or developing full-stack solutions that work reliably in real-world scenarios. I believe technology becomes powerful when it solves everyday problems, and that mindset drives every project I build.
            </p>
          </div>
        </AnimatedSection>

        {/* Core Principles */}
        <AnimatedSection delay={0.3}>
          <div className="principles-section">
            <h2 className="section-title">What Defines My Work</h2>
            <p className="section-subtitle">
              I approach development with three core principles:
            </p>
            <div className="principles-grid">
              {corePrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  className="principle-card"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="principle-icon">{principle.icon}</div>
                  <h3 className="principle-title">{principle.title}</h3>
                  <p className="principle-description">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Engineering Journey */}
        <AnimatedSection delay={0.4}>
          <div className="journey-section">
            <div className="journey-content">
              <div className="journey-text">
                <h2 className="section-title">My Engineering Journey</h2>
                <p>
                  I'm currently pursuing my <span className="highlight">Bachelor of Engineering in Computer Science (2024–2028)</span> at Chennai Institute of Technology. Outside academics, I spend time:
                </p>
                <div className="activities-grid">
                  {engineeringActivities.map((activity, index) => (
                    <motion.div
                      key={index}
                      className="activity-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <span className="activity-bullet">▸</span>
                      {activity}
                    </motion.div>
                  ))}
                </div>
                <p className="journey-conclusion">
                  This balance between <span className="highlight">DSA + Development + Creativity</span> helps me grow as a full-stack engineer.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Goals & Interests */}
        <div className="goals-interests-grid">
          {/* Career Goals */}
          <AnimatedSection delay={0.5}>
            <div className="goals-section">
              <h2 className="section-title">What I Aim For</h2>
              <div className="goals-card">
                <p>
                  I want to build <span className="highlight">scalable systems, polished interfaces, and impactful digital products</span> that users genuinely love. My long-term goal is to become a strong Full-Stack SDE who can design, build, deploy, and refine applications end-to-end.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Personal Interests */}
          <AnimatedSection delay={0.6}>
            <div className="interests-section">
              <h2 className="section-title">Outside of Tech</h2>
              <div className="interests-card">
                <p>When I'm not coding, I enjoy:</p>
                <div className="interests-grid">
                  {personalInterests.map((interest, index) => (
                    <motion.div
                      key={index}
                      className="interest-item"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="interest-icon">{interest.icon}</span>
                      <span>{interest.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Final Statement */}
        <AnimatedSection delay={0.7}>
          <div className="final-statement">
            <div className="statement-card">
              <h3 className="statement-title">In One Line</h3>
              <p className="statement-text">
                I'm a developer who loves solving problems, building useful applications, and constantly improving with every project I create.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={0.8}>
          <div className="cta-section">
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.a
                href="/resume.pdf"
                className="cta-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Download Resume
              </motion.a>
              <motion.a
                href="/projects"
                className="cta-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 View My Projects
              </motion.a>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;