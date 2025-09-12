import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const codeSnippet = `function findPage(url) {
  const routes = ['/home', '/about', '/projects', '/contact'];
  const match = routes.find(route => route === url);
  
  if (!match) {
    throw new Error('404: Page not found');
  }
  
  return match;
}

// Current URL: "${window.location.pathname}"
// Status: Page does not exist
// Suggestion: Navigate back to safety`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-8">
            <span className="text-red-400 drop-shadow-[0_0_20px_rgba(248,113,113,0.5)]">404</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-400">Page</span>
            <span className="text-white ml-4">Not Found</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-green-400 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <div className="bg-gray-800/50 border border-red-500/20 rounded-lg p-8 backdrop-blur-sm text-left max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-red-400">
                <span className="text-gray-500">// </span>
                Error Log
              </h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <pre className="text-sm text-gray-300 leading-relaxed overflow-x-auto">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            <span className="text-green-400">// </span>
            Looks like you've ventured into uncharted territory. The page you're looking for 
            doesn't exist in this dimension of the web.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-green-500/20 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            <Home size={18} />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 px-8 py-3 border border-gray-600 text-gray-400 rounded-lg hover:border-green-500 hover:text-green-400 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-red-400/10 text-6xl font-bold"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: Math.random() * 360,
              }}
              animate={{
                y: [null, -100],
                rotate: [null, 360],
                opacity: [0.1, 0, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              404
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
