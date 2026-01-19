import { Award, Code, Trophy, ExternalLink } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'LeetCode Problem Solver',
      description: 'Solved 100+ coding problems on LeetCode, sharpening problem-solving skills',
      date: 'Nov 2025',
      icon: Code,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Hackathon Host',
      description: 'Hosted and efficiently managed Humble Coders Hackathon in Lovely Professional University',
      date: 'Oct 2025',
      icon: Trophy,
      color: 'from-blue-500 to-sky-500'
    },
    {
      title: 'HackerRank Top Badge',
      description: 'Earned top badge on HackerRank, including a 3-star rating in C++ for consistent performance',
      date: 'Oct 2024',
      icon: Award,
      color: 'from-sky-500 to-teal-500'
    }
  ];

  const certificates = [
    {
      title: 'Foundations of Coding Full-Stack',
      issuer: 'Microsoft – Coursera',
      date: 'Nov 2025'
    },
    {
      title: 'Master Generative AI & Generative AI tools',
      issuer: 'Infosys Springboard',
      date: 'Aug 2025'
    },
    {
      title: 'Query Optimization and CRUD Operations',
      issuer: 'MongoDB',
      date: 'Aug 2025'
    },
    {
      title: 'Social Networks',
      issuer: 'NPTEL',
      date: 'Apr 2025'
    },
    {
      title: 'Data Structures and Algorithm',
      issuer: 'Neo Colab',
      date: 'Dec 2024'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCode Camp',
      date: 'Oct 2023'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Achievements & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Notable Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {achievement.title}
                    </h4>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {achievement.description}
                    </p>

                    <span className="text-sm text-slate-500 font-medium">
                      {achievement.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Award className="text-white" size={20} />
                    </div>

                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-slate-600 text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <span className="text-xs text-slate-500 font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
