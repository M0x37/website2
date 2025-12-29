import Snowfall from 'react-snowfall';
import { useState, useEffect } from 'react';
import { Github, Mail, Code2, ArrowRight, Terminal, Globe, MessageCircle } from 'lucide-react';

function TypingText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayedText}</span>;
}

function FloatingOrb({ delay, size, position }: { delay: number; size: string; position: string }) {
  return (
    <div
      className={`absolute ${position} ${size} rounded-full blur-3xl opacity-20 animate-float`}
      style={{
        background: 'radial-gradient(circle, rgba(34,211,238,0.8), rgba(59,130,246,0))',
        animationDelay: `${delay}s`,
        filter: 'blur(40px)'
      }}
    />
  );
}

function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "G-Logger",
      description: "G-Logger is a tool for generating Python scripts.",
      tech: ["Python", "Diffrent Lib", ],
      icon: Terminal,
      url: "https://github.com/M0x37/The-G-Logger"
    },
    {
      title: "The-Finder",
      description: "A recreation of the Tool Sherlock",
      tech: ["React", "TypeScript", "Node.js", "Elasticsearch"],
      icon: Globe,
      url: "https://github.com/M0x37/The-Finder"
    },
  ];

  const skills = [
    "Python", "JavaScript", "React", "Web Development",
    "Scripting", "System Tools", "Git", "Problem Solving"
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Snowfall
        color="white"
        snowflakeCount={100}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 1
        }}
      />

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <FloatingOrb delay={0} size="w-96 h-96" position="top-20 left-0" />
        <FloatingOrb delay={2} size="w-72 h-72" position="top-1/3 right-10" />
        <FloatingOrb delay={4} size="w-80 h-80" position="bottom-20 left-1/3" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <nav className="py-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-cyan-400 animate-spin-slow" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MAX
              </span>
            </div>
            <div className="flex gap-6">
              <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </nav>

          <section className="min-h-screen flex flex-col md:flex-row justify-center items-center py-20 px-6 md:px-12 gap-12">
            <div className="space-y-8 max-w-3xl z-10 order-2 md:order-1">
              <div className="space-y-4">
                <p className="text-cyan-400 font-mono text-lg">Hello, I'm Max</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                  Full Stack
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
              </div>

              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
                <TypingText text="I create innovative solutions with code. From Python scripts to modern web applications and well-thought system architectures." />
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="mailto:contact@m0x.de"
                  className="group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold
                           hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  Contact Me
                  <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-gray-600 rounded-lg font-semibold hover:border-cyan-400
                           transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 flex items-center gap-2"
                >
                  GitHub
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <div className="flex gap-8 pt-8">
                <div className="space-y-2">
                  <p className="text-4xl font-black text-cyan-400">5+</p>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-black text-cyan-400">100%</p>
                  <p className="text-gray-400">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="relative order-1 md:order-2 mb-12 md:mb-0 group">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-500">
                <img 
                  src="/images/profil.jpg" 
                  alt="Max's Profile" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </section>

          <section className="py-32 space-y-16">
            <div className="space-y-4">
              <p className="text-cyan-400 font-mono">Featured Projects</p>
              <h2 className="text-5xl md:text-6xl font-black">My Work</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-gray-800 rounded-2xl" />

                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500" />

                    <div className="relative h-full p-8 flex flex-col justify-between z-10">
                      <div className="space-y-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className={`text-gray-400 leading-relaxed transition-all duration-300 ${
                          hoveredProject === index ? 'opacity-100' : 'opacity-75'
                        }`}>
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs bg-gray-800/50 rounded-full text-cyan-300 border border-gray-700
                                       group-hover:border-cyan-400 group-hover:bg-gray-700/50 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all duration-300">
                          View on GitHub <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                      background: 'radial-gradient(circle at center, rgba(34,211,238,0.1), transparent)',
                    }} />
                  </a>
                );
              })}
            </div>
          </section>

          <section className="py-32 space-y-16">
            <div className="space-y-4">
              <p className="text-cyan-400 font-mono">Expertise</p>
              <h2 className="text-5xl md:text-6xl font-black">Skills & Technologien</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800
                           hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20
                           hover:scale-105 cursor-default text-center"
                >
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-32 space-y-16">
            <div className="space-y-4">
              <p className="text-cyan-400 font-mono">Get In Touch</p>
              <h2 className="text-5xl md:text-6xl font-black">Let's Create Something Great</h2>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-12 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">Contact me</h3>
                  <p className="text-gray-400 text-lg max-w-xl">
                    Let me know how I can help you. I will respond as soon as possible!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:max@m0x2.de?subject=Contact from Portfolio&body=Hello Max,%0D%0A%0D%0A"
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold
                             hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 text-center
                             hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send me a Email 
                  </a>
                  <a
                    href="https://discord.com/users/1190586999623667753"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border-2 border-gray-600 rounded-lg font-semibold hover:border-cyan-400
                             transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    My Discord
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className="py-16 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 Max. Crafted with coffee and passion.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
