"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  MapPin,
  Calendar,
  Download,
} from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { InteractiveHero } from "@/components/interactive-hero";
import { ThemeDebug } from "@/components/theme-debug";
import { FluidCursor } from "@/components/fluid-cursor";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Interactive analytics dashboard with data visualization, real-time metrics, and automated reporting capabilities.",
      tech: ["React", "Chart.js", "Express.js", "MySQL", "Redis"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "API Gateway Service",
      description:
        "Microservices API gateway with rate limiting, authentication, and request routing for scalable applications.",
      tech: ["Node.js", "Express", "Docker", "AWS", "Redis"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 82 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 78 },
    { name: "MongoDB", level: 72 },
    { name: "AWS", level: 70 },
    { name: "Docker", level: 68 },
  ];

  const experience = [
    {
      title: "Software Development Engineer I",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Developing and maintaining scalable web applications using modern JavaScript frameworks. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Improved application performance by 40% through code optimization and caching strategies",
        "Led development of 3 major features serving 10,000+ active users daily",
        "Mentored 2 junior developers and established code review best practices",
        "Implemented automated testing reducing production bugs by 35%",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "StartupXYZ",
      period: "2021 - 2022",
      location: "Remote",
      description:
        "Built responsive web applications and RESTful APIs. Worked closely with designers and product managers to implement user-friendly interfaces.",
      achievements: [
        "Developed 5+ full-stack applications from conception to deployment",
        "Reduced bug reports by 30% through comprehensive unit and integration testing",
        "Implemented CI/CD pipelines improving deployment efficiency by 50%",
        "Collaborated with design team to improve user experience metrics by 25%",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Fluid cursor effect */}
      <FluidCursor />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-slate-900 dark:text-white"
          >
            Luffy
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
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <InteractiveHero />

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                About Me
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Luffy - Software Developer"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl mx-auto"
                />
              </motion.div>
              <div>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  I'm a passionate Software Development Engineer with 2+ years
                  of experience building scalable web applications. I specialize
                  in creating efficient, maintainable solutions that solve
                  real-world problems.
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

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on that demonstrate my
              technical skills and problem-solving abilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6">
                      <CardTitle className="text-slate-900 dark:text-white text-xl mb-3">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex justify-between mb-3">
                  <span className="text-slate-900 dark:text-white font-semibold">
                    {skill.name}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-400 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-12 last:mb-0"
              >
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <CardTitle className="text-slate-900 dark:text-white text-2xl mb-2">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 mb-2">
                          {exp.period}
                        </Badge>
                        <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center justify-end gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-semibold mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                          >
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
              I'm always interested in discussing new opportunities and
              challenging projects. Let's connect and build something great
              together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:luffy@example.com"
                className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium group"
              >
                <Mail className="w-5 h-5" />
                Send Message
                <ArrowRight className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="flex items-center gap-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 rounded-lg transition-all duration-300 font-medium"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </div>

            <div className="flex justify-center gap-6">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
              >
                <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:luffy@example.com"
                className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
              >
                <Mail className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Monkey D. Luffy. Built with Next.js and
            deployed on Vercel.
          </p>
        </div>
      </footer>
      <ThemeDebug />
    </div>
  );
}
