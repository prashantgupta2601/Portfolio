import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      period: 'August 2023 - Present',
      location: 'Punjab, India',
      grade: 'CGPA: 6.64',
      icon: '🎓'
    },
    {
      institution: 'Government City Inter College',
      degree: 'Intermediate',
      period: 'June 2021 - May 2022',
      location: 'Ghazipur, Uttar Pradesh',
      grade: 'Percentage: 66%',
      icon: '📚'
    },
    {
      institution: 'Adarsh Inter College',
      degree: 'Matriculation',
      period: 'June 2019 - May 2020',
      location: 'Ghazipur, Uttar Pradesh',
      grade: 'Percentage: 75%',
      icon: '📖'
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/30">
                      <GraduationCap className="text-white" size={32} />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                          {edu.institution}
                        </h3>
                        <p className="text-lg text-slate-700 font-medium">
                          {edu.degree}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-lg font-semibold text-sm">
                          {edu.grade}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
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
