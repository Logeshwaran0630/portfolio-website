import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <AnimatedSection>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Logeshwaran J
            </motion.h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Software Development Engineer | Full Stack + Mobile Developer
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building intelligent apps using React, Spring Boot, C++, Java, and Cloud.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button href="/resume.pdf" target="_blank">
                View Resume
              </Button>
              <Button variant="outline" href="#contact">
                Contact Me
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
