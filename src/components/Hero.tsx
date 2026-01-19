import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl shadow-cyan-500/50">
              PG
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
            Prashant Gupta
          </h1>

          <p className="text-2xl md:text-3xl text-slate-300 mb-4">
            Full-Stack Developer
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Computer Science Student. Passionate about building scalable web applications
            with modern technologies and solving complex problems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/PrashantGupta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 border border-slate-700"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/PrashantGupta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 border border-slate-700"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:prashantguptagzp2708@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>

            <a
              href="tel:+917309211871"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 border border-slate-700"
            >
              <Phone size={20} />
              <span>+91-7309211871</span>
            </a>
          </div>

          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-slate-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
