"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function InteractiveHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-60 h-60 rounded-full border border-blue-200 dark:border-blue-900/30 -left-20 top-[20%] opacity-60 dark:opacity-20" />
        <div className="absolute w-80 h-80 rounded-full border border-blue-200 dark:border-blue-900/30 -right-20 top-[10%] opacity-60 dark:opacity-20" />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent top-[5%] left-[30%] opacity-40 dark:opacity-20"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      <motion.div
        style={{ y }}
        className="relative z-10 container mx-auto px-6 text-center max-w-3xl"
      >
        <motion.div initial="hidden" animate={controls} className="space-y-8">
          <motion.p
            custom={0}
            variants={itemVariants}
            className="text-blue-600 dark:text-blue-400 font-medium tracking-wide uppercase text-sm bg-blue-50 dark:bg-blue-900/30 py-2 px-4 rounded-full inline-block"
          >
            Software Development Engineer
          </motion.p>

          <motion.h1
            custom={1}
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight"
          >
            Monkey D.{" "}
            <span className="text-blue-600 dark:text-blue-400">Luffy</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable web applications with clean code and innovative
            solutions. 2+ years of experience in full-stack development.
          </motion.p>

          <motion.div
            custom={3}
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-8 py-6 rounded-lg font-medium group"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-6 rounded-lg transition-all duration-300 font-medium group"
            >
              <Download className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-1" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Interactive 3D card effect */}
        <motion.div
          custom={4}
          variants={itemVariants}
          className="mt-20 relative w-full max-w-xl mx-auto perspective"
          initial="hidden"
          animate={controls}
        >
          <div className="w-full h-20 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/30 dark:to-transparent rounded-lg relative">
            <motion.div
              className="absolute inset-0 border border-blue-200 dark:border-blue-800 rounded-lg"
              animate={{
                rotateX: [0, 2, 0, -2, 0],
                rotateY: [0, -2, 0, 2, 0],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <code className="text-slate-500 dark:text-slate-400 font-mono text-sm">
                  const developer = new SoftwareEngineer("Luffy");
                </code>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mouse scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.8, 0.4, 0.8],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-600 flex justify-center pt-1">
          <motion.div
            className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
