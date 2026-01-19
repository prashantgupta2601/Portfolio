import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:prashantguptagzp2708@gmail.com"
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-slate-400 break-all">prashantguptagzp2708@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+917309211871"
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-slate-400">+91-7309211871</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/PrashantGupta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                  <p className="text-slate-400">github.com/PrashantGupta</p>
                </div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/PrashantGupta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                  <p className="text-slate-400">linkedin.com/in/PrashantGupta</p>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-slate-400 mb-8">
              <MapPin size={20} />
              <span>Punjab, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-12 pt-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-400">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
