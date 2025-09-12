import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/cv/Palak (4).pdf'; // Updated to match your actual filename
    link.download = 'Palak_Kumari_CV.pdf'; // This will be the downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="text-center z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-white">Palak</span>
            <span className="text-green-400 ml-4">Kumari</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-400 mb-8">
            <span className="text-green-400">const</span> role = 
            <span className="text-yellow-400"> "Front-end Developer"</span>;
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="text-green-400">// </span>
            Welcome to my digital universe.
            <br />
            <span className="text-green-400">// </span>
            Find my profile on Github:<br></br>
            <span className="text-blue-400">const</span> github = 
            <a 
              href="https://github.com/palak413" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 ml-1"
            >
              "https://github.com/palak413"
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <Link 
            to="/projects"
            className="px-8 py-3 bg-green-500/20 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            View Projects
          </Link>
          <button 
            onClick={handleDownloadCV}
            className="px-8 py-3 border border-gray-600 text-gray-400 rounded-lg hover:border-green-500 hover:text-green-400 transition-all duration-300"
          >
            Download CV
          </button>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-green-400" size={32} />
      </motion.div>
    </motion.div>
  );
};

export default Home;