import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Terminal, 
  Globe,
  Github,
  Cpu,
  Code2,
  Database,
  Lock,
  Gamepad2,
  Activity,
  Calculator,
  User,
  ExternalLink,
  ShieldCheck,
  Search,
  KeyRound,
  FileText
} from "lucide-react";

// Full repository archive list
const ALL_PROJECTS = [
  // Core Applications
  { title: "Attendance-Tracker", category: "Core", link: "https://github.com/adityapatel5912/Attendance-Tracker" },
  { title: "Multi-Page-Web-App", category: "Core", link: "https://github.com/adityapatel5912/Multi-Page-Web-App" },
  { title: "To-Do-List", category: "Core", link: "https://github.com/adityapatel5912/To-Do-List" },
  { title: "Employee-Details", category: "Core", link: "https://github.com/adityapatel5912/Employee-Details" },
  { title: "Blood-Donation-Camp", category: "Core", link: "https://github.com/adityapatel5912/Blood-Donation-Camp" },
  
  // Calculators & Finance
  { title: "BMI-Calculator", category: "Finance", link: "https://github.com/adityapatel5912/BMI-Calculator" },
  { title: "Loan-Calculator", category: "Finance", link: "https://github.com/adityapatel5912/Loan-Calculator" },
  { title: "Payment-Bill", category: "Finance", link: "https://github.com/adityapatel5912/Payment-Bill" },
  
  // Utility & Security Tools
  { title: "Extract-Contact", category: "Tool", link: "https://github.com/adityapatel5912/Extract-Contact" },
  { title: "URL-Extract", category: "Tool", link: "https://github.com/adityapatel5912/URL-Extract" },
  { title: "IP-Extract", category: "Tool", link: "https://github.com/adityapatel5912/IP-Extract" },
  { title: "Date-Extract", category: "Tool", link: "https://github.com/adityapatel5912/Date-Extract" },
  { title: "Emoji-Converter", category: "Tool", link: "https://github.com/adityapatel5912/Emoji-Converter" },
  { title: "Desktop-Notifier", category: "Tool", link: "https://github.com/adityapatel5912/Desktop-Notifier" },
  { title: "Password-Strength-Checker", category: "Security", link: "https://github.com/adityapatel5912/Password-Strength-Checker" },
  { title: "Password-Checker", category: "Security", link: "https://github.com/adityapatel5912/Password-Checker" },
  
  // Logic & Games
  { title: "Guess-The-number-Game", category: "Game", link: "https://github.com/adityapatel5912/Guess-The-number-Game" },
  { title: "Anagram-Game", category: "Game", link: "https://github.com/adityapatel5912/Anagram-Game" },
  { title: "Hangman-Game", category: "Game", link: "https://github.com/adityapatel5912/Hangman-Game" },
  
  // Personal
  { title: "my-website", category: "Personal", link: "https://github.com/adityapatel5912/my-website" },
  { title: "Resume", category: "Personal", link: "https://github.com/adityapatel5912/Resume" }
];

const LOGOS = [
  { name: "Python", color: "#3776AB", icon: <Cpu className="w-6 h-6" /> },
  { name: "React", color: "#61DAFB", icon: <Globe className="w-6 h-6" /> },
  { name: "Tailwind", color: "#06B6D4", icon: <Code2 className="w-6 h-6" /> },
  { name: "FastAPI", color: "#05998B", icon: <Terminal className="w-6 h-6" /> },
  { name: "Pydantic", color: "#E92063", icon: <ShieldCheck className="w-6 h-6" /> },
  { name: "GitHub", color: "#ffffff", icon: <Github className="w-6 h-6" /> },
  { name: "Vercel", color: "#ffffff", icon: <ExternalLink className="w-6 h-6" /> }
];

export default function App() {
  return (
    <div className="min-h-screen bg-bg selection:bg-accent selection:text-bg font-sans overflow-x-hidden">
      <main className="max-w-[1400px] mx-auto p-4 md:p-6 space-y-3">
        
        {/* Top Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-3 h-auto lg:h-[600px]">
          {/* Hero Sidebar */}
          <section id="hero" className="panel-border p-8 flex flex-col justify-center relative group">
            <div className="absolute top-4 left-4 font-mono text-[10px] text-accent opacity-50 uppercase tracking-widest">Core_Identity</div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tighter">
                Aditya<br/>
                <span className="text-accent">Patel</span>
              </h1>
              <div className="space-y-4">
                <p className="text-text-dim text-sm leading-relaxed font-mono">
                  Founder at ADDIX Labs.<br/>
                  Python Developer.<br/>
                  Class 9 Innovator.
                </p>
                <div className="pt-4 space-y-2">
                  <p className="text-text-main font-medium border-l-2 border-accent pl-4 text-sm">
                    Building the Future of AI & Backend Systems.
                  </p>
                </div>
              </div>
              <a
                href="https://scholar-model-v3-7dnx.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full text-center py-4 border border-accent text-accent font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-bg transition-all glow-accent"
              >
                Launch ADDIX Scholars
              </a>
            </motion.div>
          </section>

          {/* Featured Flagship Project */}
          <section id="featured-project" className="accent-border p-8 md:p-12 relative flex flex-col justify-center bg-gradient-to-br from-[#1a1a20] to-bg overflow-hidden group">
            <div className="absolute top-0 right-10 bg-accent text-bg px-4 py-1 font-mono text-[10px] font-bold">FLAGSHIP_PROJECT</div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.05),transparent_70%)] pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-6 max-w-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold group-hover:text-accent transition-colors">ADDIX Scholars</h2>
              <p className="text-lg text-text-dim leading-relaxed">
                A next-generation AI validation and educational interface by ADDIX Labs, designed for high-performance academic modeling. Streamlining knowledge acquisition for the modern era through autonomous validation logic.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://scholar-model-v3-7dnx.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-accent text-bg font-bold font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-bg transition-all flex items-center gap-2 glow-accent"
                >
                  Visit Live Site <Globe className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 text-text-dim text-[10px] font-mono uppercase tracking-widest">
                  <Terminal className="w-3.5 h-3.5" /> PROD-READY_ENV
                </div>
              </div>
            </motion.div>
          </section>
        </div>

        {/* Highlighted Live App & Tech Stack Rail */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-3">
          {/* Tech Stack Marquee (Redesigned with Icons) */}
          <div className="panel-border overflow-hidden flex items-center h-20 relative group">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-panel to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-panel to-transparent z-10" />
            <motion.div
              animate={{ x: [0, -400] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 px-6 whitespace-nowrap items-center"
            >
              {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                <div key={i} className="flex items-center gap-3 group/logo cursor-default">
                  <div 
                    className="p-2 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 group-hover/logo:accent-border"
                    style={{ '--tw-border-opacity': '0.3' } as any}
                  >
                    <div className="text-text-dim group-hover/logo:text-accent transition-colors">
                      {logo.icon}
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold tracking-widest text-text-dim group-hover/logo:text-white transition-colors">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Live ChatBot Card */}
          <div className="panel-border p-5 border-green-500/50 flex flex-col justify-between group h-20 lg:h-auto">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold uppercase tracking-widest">Terminal ChatBot</h3>
                  <p className="text-[10px] text-text-dim font-mono">LIVE_ACTIVE_AGENT</p>
                </div>
              </div>
              <a 
                href="https://github.com/adityapatel5912/ChatBot" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Repository Archive Section */}
        <section id="archive" className="space-y-4 pt-10">
          <div className="flex items-center justify-between px-2">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">Repository Archive</h2>
              <p className="text-xs font-mono text-text-dim uppercase tracking-wider">Historical System Records // Entire Project Portfolio</p>
            </div>
            <div className="h-px flex-1 bg-border/50 mx-6 hidden md:block" />
            <div className="text-right font-mono text-[10px] text-accent/50 uppercase tracking-widest">
              Total_Rec: {ALL_PROJECTS.length}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {ALL_PROJECTS.map((project, idx) => (
              <motion.a 
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="panel-border p-5 group hover:accent-border transition-all flex flex-col justify-between min-h-[140px]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <ProjectIcon category={project.category} />
                    <Github className="w-3.5 h-3.5 text-text-dim group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold group-hover:text-accent transition-colors truncate">
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-text-dim font-mono uppercase tracking-widest opacity-60">
                      SYS_{project.category}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-text-dim group-hover:text-accent transition-colors">VIEW_SOURCE</span>
                  <ExternalLink className="w-3 h-3 text-text-dim group-hover:text-accent" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 px-8 py-12 border-t border-border mt-10">
          <ContactDetail label="PHONE" value="+91 9316749110" href="tel:+919316749110" />
          <ContactDetail label="BUSINESS_MAIL" value="addixlabs06@gmail.com" href="mailto:addixlabs06@gmail.com" />
          <ContactDetail label="PERSONAL_MAIL" value="adityapatel5912@gmail.com" href="mailto:adityapatel5912@gmail.com" />
          <div className="lg:text-right">
            <span className="block font-mono text-[10px] text-accent uppercase tracking-widest mb-1">GITHUB</span>
            <span className="text-sm font-bold tracking-[0.2em] uppercase">/adityapatel5912</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ProjectIcon({ category }: { category: string }) {
  const icoClass = "w-4 h-4 text-accent/60 group-hover:text-accent transition-colors";
  switch (category) {
    case 'Core': return <Cpu className={icoClass} />;
    case 'Finance': return <Calculator className={icoClass} />;
    case 'Tool': return <Terminal className={icoClass} />;
    case 'Security': return <Lock className={icoClass} />;
    case 'Game': return <Gamepad2 className={icoClass} />;
    case 'Personal': return <User className={icoClass} />;
    default: return <Code2 className={icoClass} />;
  }
}

function ContactDetail({ label, value, href }: { label: string, value: string, href: string }) {
  return (
    <div>
      <span className="block font-mono text-[10px] text-accent uppercase tracking-widest mb-1">{label}</span>
      <a href={href} className="text-text-main text-xs hover:text-accent transition-colors">{value}</a>
    </div>
  );
}
