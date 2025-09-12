import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Code, Mail } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/about", icon: User, label: "About" },
    { path: "/projects", icon: Code, label: "Projects" }, // Changed from Portfolio to Projects
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;