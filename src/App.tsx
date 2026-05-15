import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Moon, 
  Sun, 
  ChevronRight, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Database, 
  Terminal, 
  Layout, 
  Cpu,
  ArrowRight
} from 'lucide-react';
import { personalInfo, skills, projects, education } from './data';

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const hoverCard = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -10,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync theme with document class
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-brand-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center font-bold text-white shadow-lg shadow-brand-500/20 italic">
              V
            </div>
            <span className="font-bold tracking-tight text-lg hidden sm:block">Vishal.dev</span>
          </motion.div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {["About", "Projects", "Skills", "Education"].map((item) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  whileHover={{ y: -2 }}
                  className="hover:text-brand-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personalInfo.email}`}
              className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md shadow-brand-500/25"
            >
              Hire Me
            </motion.a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section id="about" className="max-w-7xl mx-auto px-4 py-16 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
              Available for Opportunities
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              I'm <span className="text-brand-600">{personalInfo.name}</span>, a professional <span className="italic font-light">Full-Stack Engineer.</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 items-center"
            >
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
                <MapPin size={18} className="text-brand-600" />
                {personalInfo.location}
              </div>
              <div className="h-4 w-px bg-slate-300 dark:bg-slate-800 hidden sm:block"></div>
              <div className="flex gap-4">
                {[ 
                  { icon: Github, link: personalInfo.socials.github },
                  { icon: Linkedin, link: personalInfo.socials.linkedin },
                  { icon: Mail, link: `mailto:${personalInfo.email}` }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 5, color: "#2563eb" }}
                    href={social.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-400 transition-colors"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* Animated Glow Rings */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: 360
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute w-[110%] h-[110%] rounded-full border-2 border-dashed border-brand-500/20 z-0"
            ></motion.div>
            
            <motion.div 
              animate={{ 
                scale: [1.1, 1, 1.1],
                rotate: -360
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute w-[120%] h-[120%] rounded-full border border-brand-600/10 z-0"
            ></motion.div>

            {/* Main Image Container with Advanced Shadows */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="aspect-square w-full max-w-[400px] rounded-full bg-slate-200 dark:bg-slate-900 overflow-hidden border-4 border-white dark:border-slate-800 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] dark:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.4)] relative z-10"
            >
              {personalInfo.profileImage ? (
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                  }}
                />
              ) : null}
              
              <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-500/10 to-transparent fallback-icon ${personalInfo.profileImage ? 'hidden' : ''}`}>
                <Cpu size={120} className="text-brand-600/20" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">System Architecture</p>
                  <p className="text-xl font-bold">Scalable Java Backend</p>
                </div>
              </div>
            </motion.div>
            
            {/* Pulsing Aura */}
            <motion.div 
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.1, 0, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-brand-500 rounded-full blur-[80px] z-0"
            ></motion.div>
            
            {/* Floating Decorative background elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/20 blur-3xl rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-600/10 blur-3xl rounded-full"
            ></motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-slate-100/50 dark:bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
            >
              <div>
                <h2 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-sm mb-3">Portfolio</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                A selection of high-impact applications focused on real-time data, scalability, and secure user experiences.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all border-b-4 hover:border-b-brand-600 flex flex-col h-full"
                >
                  <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden shrink-0">
                    <img 
                      src={(project as any).image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-0"></div>
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
                      {project.tech.map(t => (
                        <span key={t} className="px-2 py-1 bg-white/90 dark:bg-slate-900/60 backdrop-blur-md rounded text-[10px] font-bold text-brand-700 dark:text-white border border-white/20 uppercase shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold mb-3 group-hover:text-brand-600 transition-colors uppercase tracking-tight text-slate-800 dark:text-slate-100">{project.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex gap-4">
                        <motion.a whileHover={{ y: -3 }} href={project.links.github} className="text-slate-400 dark:text-slate-500 hover:text-brand-600 transition-colors">
                          <Github size={18} />
                        </motion.a>
                        <motion.a whileHover={{ y: -3 }} href={project.links.demo} className="text-slate-400 dark:text-slate-500 hover:text-brand-600 transition-colors">
                          <ExternalLink size={18} />
                        </motion.a>
                      </div>
                      <motion.button 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-1 text-sm font-bold text-brand-600 transition-all"
                      >
                        Details <ChevronRight size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-sm mb-3">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Toolset</h3>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.4)" }}
                className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all cursor-default"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="text-lg font-bold uppercase tracking-wider">{skillGroup.category}</h4>
                  {index === 0 && <Layout size={20} className="text-brand-500" />}
                  {index === 1 && <Terminal size={20} className="text-brand-500" />}
                  {index === 2 && <Database size={20} className="text-brand-500" />}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(skill => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "#ffffff" }}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all shadow-sm border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 bg-brand-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.1" fill="none" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-brand-400 font-bold uppercase tracking-[0.2em] text-sm mb-3">Background</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Academic Milestone</h3>
                <p className="text-brand-100/70 text-lg leading-relaxed mb-8 max-w-md">
                  Foundational knowledge in Computer Science with a strong focus on engineering principles and multi-layered system architecture.
                </p>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 text-brand-100 font-medium bg-brand-800/40 p-4 rounded-2xl w-fit border border-brand-700"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-brand-400 tracking-tighter">Honors</p>
                    <p>8.5 CGPA in CSE B.Tech</p>
                  </div>
                </motion.div>
              </motion.div>

              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-700">
                {education.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full border-4 border-brand-900 bg-brand-600 flex items-center justify-center z-10 shadow-lg shadow-brand-600/50">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <motion.div 
                      whileHover={{ x: 10, backgroundColor: "rgba(30, 58, 138, 0.6)" }}
                      className="bg-brand-800/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-700 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">{item.duration}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-brand-700 text-brand-100 border border-brand-600">{item.result}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-1">{item.degree}</h4>
                      <p className="text-brand-200 text-sm">{item.institution}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 dark:bg-brand-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Briefcase size={200} />
            </div>
            <motion.h3 
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10"
            >
              Ready to build something <span className="italic font-light">exceptional?</span>
            </motion.h3>
            <p className="text-slate-400 dark:text-brand-100 text-lg mb-12 max-w-xl mx-auto relative z-10">
              I'm currently looking for new opportunities to contribute to high-performance engineering teams. Let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
              <motion.a 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personalInfo.email}`}
                className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
              >
                Send an Email <ArrowRight size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-2 border-white/20 text-white transition-all flex items-center justify-center gap-2"
              >
                LinkedIn Profile
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center font-bold text-white dark:text-slate-900 italic">
              V
            </div>
            <span className="font-bold tracking-tighter text-xl">Vishal Patil.</span>
          </motion.div>
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Designed & Engineered by Vishal Patil. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[ 
              { icon: Github, link: personalInfo.socials.github },
              { icon: Linkedin, link: personalInfo.socials.linkedin },
              { icon: Mail, link: `mailto:${personalInfo.email}` }
            ].map((social, i) => (
              <motion.a 
                key={i}
                whileHover={{ y: -5, color: "#2563eb" }}
                href={social.link} 
                className="text-slate-400 transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
