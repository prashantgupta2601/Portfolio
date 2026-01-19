import { Code2, Wrench, Database, Brain, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['C/C++', 'HTML', 'CSS', 'JavaScript', 'Python', 'Java'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Wrench,
      skills: ['Tailwind CSS', 'ReactJS', 'NodeJS', 'Express'],
      color: 'from-blue-500 to-sky-500'
    },
    {
      title: 'Tools & Platforms',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Figma'],
      color: 'from-sky-500 to-cyan-500'
    },
    {
      title: 'Core CS Fundamentals',
      icon: Brain,
      skills: ['DBMS', 'OS', 'SQL', 'OOPs'],
      color: 'from-teal-500 to-emerald-500'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Leadership', 'Time Management', 'Problem-Solving', 'Adaptability', 'Quick Learner'],
      color: 'from-emerald-500 to-green-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
