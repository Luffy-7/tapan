"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 hero-bg relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Floating Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl floating" />
          <div
            className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl floating"
            style={{ animationDelay: "2s" }}
          />

          {/* Main Content */}
          <Card className="glass border-0 p-8 max-w-4xl mx-auto backdrop-blur-xl bg-background/40 dark:bg-background/20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6 relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                style={{
                  background:
                    "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Monkey D. <span className="block">Luffy</span>
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="text-yellow-400 w-8 h-8" />
                </motion.div>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-4 mb-8"
              >
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                  Full Stack Developer & Future Pirate King
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Crafting digital adventures with code, determination, and an
                  unbreakable spirit. Ready to conquer the Grand Line of web
                  development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                {/* Enhanced View My Work Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group cursor-hover"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-2xl"
                  >
                    <Eye size={20} className="mr-2" />
                    View My Work
                  </Button>
                </motion.div>

                {/* Enhanced Download CV Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group cursor-hover"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="relative border-2 border-primary/50 hover:border-primary bg-background/50 hover:bg-primary/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm group overflow-hidden"
                  >
                    <Download
                      size={20}
                      className="mr-2 group-hover:animate-bounce"
                    />
                    Download CV
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </Card>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block cursor-hover"
            >
              <ChevronDown
                size={32}
                className="text-muted-foreground hover:text-primary transition-colors"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
