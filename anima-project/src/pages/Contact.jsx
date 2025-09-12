import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "palaksingh06005@gmail.com",
      href: "mailto:palaksingh06005@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "6387314945",
      href: "tel:+916387314945"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#"
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
            <span className="text-green-400">Get</span>
            <span className="text-white ml-4">In Touch</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl">
            <span className="text-green-400">// </span>
            Ready to bring your ideas to life? Let's collaborate and build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-gray-800/50 border border-green-500/20 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-400 mb-6">
                <span className="text-gray-500">// </span>
                Send Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <span className="text-green-400">const</span> name = 
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-green-500/30 rounded-lg px-4 py-3 text-green-400 focus:border-green-500 focus:outline-none transition-colors font-mono"
                      placeholder='"Your Name"'
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <span className="text-green-400">const</span> email = 
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-green-500/30 rounded-lg px-4 py-3 text-green-400 focus:border-green-500 focus:outline-none transition-colors font-mono"
                      placeholder='"your.email@example.com"'
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <span className="text-green-400">const</span> message = 
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-black/50 border border-green-500/30 rounded-lg px-4 py-3 text-green-400 focus:border-green-500 focus:outline-none transition-colors font-mono resize-none"
                      placeholder='"Tell me about your project..."'
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500/20 border border-green-500 text-green-400 py-3 rounded-lg hover:bg-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 border border-green-500/20 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-400 mb-6">
                <span className="text-gray-500">// </span>
                Contact Info
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <info.icon className="text-green-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-green-400 font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 border border-green-500/20 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-green-400 mb-4">
                <span className="text-gray-500">// </span>
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about technology and development.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/palak-kumari-6980a7314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500/30 transition-colors"
                >
                  <Linkedin className="text-green-400" size={18} />
                </a>
                <a
                  href="https://github.com/palak413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500/30 transition-colors"
                >
                  <Github className="text-green-400" size={18} />
                </a>
                <a
                  href="https://twitter.com/your-twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500/30 transition-colors"
                >
                  <Twitter className="text-green-400" size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;