import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SnakeGame from "../components/SnakeGame";

const Projects = () => {
  const [showGame, setShowGame] = useState(true);
  const [gameCompleted, setGameCompleted] = useState(false);
  const navigate = useNavigate();

  const handleGameWin = () => {
    setGameCompleted(true);
    setShowGame(false);
    // Remove automatic navigation - let users explore projects
    // setTimeout(() => {
    //   navigate("/about");
    // }, 2000);
  };

  const handleSkipGame = () => {
    setShowGame(false);
    // Remove automatic navigation - let users see projects
    // setTimeout(() => {
    //   navigate("/contact");
    // }, 1000);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      tech: ["React", "OpenWeather API", "Chart.js"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-8">
            <span className="text-green-400">My</span>
            <span className="text-white ml-4">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mb-8"></div>
        </motion.div>

        {showGame ? (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-4">
                <span className="text-gray-500">// </span>
                Interactive Challenge
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Before exploring my projects, prove your skills! Win the Snake game 
                to unlock the full portfolio, or skip to continue browsing.
              </p>
            </div>
            <div className="flex justify-center">
              <SnakeGame onWin={handleGameWin} onSkip={handleSkipGame} />
            </div>
          </motion.div>
        ) : (
          <>
            {gameCompleted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center mb-12"
              >
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">🎉 Congratulations!</h3>
                  <p className="text-gray-300">You've unlocked the full experience!</p>
                  <p className="text-sm text-gray-400 mt-2">Explore my projects below!</p>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                  className="bg-gray-800/50 border border-green-500/20 rounded-lg p-6 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex-1 text-center py-2 border border-gray-600 text-gray-400 rounded hover:border-green-500 hover:text-green-400 transition-all duration-300 text-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 text-center py-2 bg-green-500/20 border border-green-500 text-green-400 rounded hover:bg-green-500/30 transition-all duration-300 text-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;