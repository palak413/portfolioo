import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Git"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-8">
            <span className="text-green-400">About</span>
            <span className="text-white ml-4">Me</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 border border-green-500/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-400 mb-4">
                <span className="text-gray-500">01.</span> Background
              </h2>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-green-400">// </span>
                I am a design and development enthusiast currently sharpening my skills in Javascript , React and modern UI/UX design. I enjoy experimenting with new ideas ,
                building projects , learning by doing .My goal is to grow into a creative technologist someone who can design ,develop , and deliver solutions that look good and work even better.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-green-500/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-400 mb-4">
                <span className="text-gray-500">02.</span> Philosophy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-green-400">// </span>
                Clean code is not written by following a set of rules. Clean code 
                is written by someone who cares about the craft and takes pride in their work.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-gray-800/50 border border-green-500/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-400 mb-6">
                <span className="text-gray-500">03.</span> Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-400/20 to-blue-500/20 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities and exciting projects.
            </p>
            <button className="px-8 py-3 bg-green-500/20 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
