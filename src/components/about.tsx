import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Github, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { PixelImage } from "./ui/pixel-image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div className="mx-auto">
              <PixelImage
                src="/profile.jpeg"
                customGrid={{ rows: 8, cols: 8 }}
                grayscaleAnimation
                animate={isInView}
              />
            </motion.div>
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I'm a passionate Software Development Engineer with 2+ years of
                experience building scalable web applications. I specialize in
                creating efficient, maintainable solutions that solve real-world
                problems.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Currently working at TechCorp Solutions, I focus on full-stack
                development using modern technologies like React, Node.js, and
                cloud platforms. I'm committed to writing clean code and
                following best practices.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-slate-700 dark:text-slate-300">
                    San Francisco, CA
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-slate-700 dark:text-slate-300">
                    2+ Years Experience
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white">
                  <Mail className="mr-2 w-4 h-4" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <Github className="mr-2 w-4 h-4" />
                  View GitHub
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
