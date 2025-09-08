import React from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-blue-600 dark:text-white"
        >
          {/* &lt; tapan &gt; */}
          &lt; tapan &gt;
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {["About", "Projects", "Skills", "Experience", "Contact"].map(
            (item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
              >
                {item}
              </motion.a>
            )
          )}
          <AnimatedThemeToggler />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
          <AnimatedThemeToggler />
          <MobileNav />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
