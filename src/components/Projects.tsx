import { ExternalLink, Github, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Mobile Platform for Democratizing Sports Talent Assessment',
      period: 'Sep 2025 – Nov 2025',
      description: 'Built a full-stack sports talent assessment platform enabling athletes to upload performance videos and receive structured evaluations based on predefined metrics.',
      highlights: [
        'Implemented secure user authentication and role-based access (athlete/coach/admin)',
        'Developed modules for video upload, scoring system and performance history dashboard',
        'Optimized backend APIs for faster data retrieval and scalable multi-user access',
        'Integrated MySQL for normalized data storage'
      ],
      technologies: ['ReactJS', 'NodeJS', 'Express', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/prashantgupta2601/sportNova',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Inventory Management System',
      period: 'Feb 2025 - May 2025',
      description: 'Full-Stack PHP Web Application with session-based authentication and responsive dashboard for managing product inventory.',
      highlights: [
        'Implemented session-based authentication for protected access',
        'Designed responsive dashboard to display product details',
        'Built maintainable code architecture with separate views',
        'Deployed using XAMPP/Apache with JSON-based storage'
      ],
      technologies: ['PHP', 'HTML', 'Tailwind CSS', 'JSON', 'Apache'],
      github: 'https://github.com/PrashantGupta',
      gradient: 'from-blue-500 to-sky-600'
    },
    {
      title: 'Wav Music Player',
      period: 'June 2025 - July 2025',
      description: 'Functional GUI-based audio player built with Java Swing featuring play/pause controls, track navigation, and progress visualization.',
      highlights: [
        'Built with Java Swing components and layouts',
        'Implemented exception handling and modular programming',
        'Real-time media handling within Java applications',
        'Achieved A grades in project evaluation'
      ],
      technologies: ['Java', 'Swing', 'OOP', 'GUI Development'],
      gradient: 'from-sky-500 to-teal-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 md:mb-0">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{project.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
                          <span className="text-slate-600 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm">View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
