import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Monkey D. Luffy. Built with Next.js and
          deployed on Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
