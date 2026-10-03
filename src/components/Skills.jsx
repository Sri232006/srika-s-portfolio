import React, { useEffect, useRef, useState } from 'react';
import { Layout, Server, Database, Wrench, Layers } from 'lucide-react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      description: 'Building modern, high-performance responsive web user interfaces.'
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      skills: ['Flask', 'REST API Integration'],
      description: 'Connecting frontend components seamlessly with backend web services.'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'Firebase'],
      description: 'Managing structured and real-time data storage solutions.'
    },
    {
      title: 'Version Control & Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub'],
      description: 'Collaborative code management, branching workflows, and repository hosting.'
    },
    {
      title: 'Core Concepts',
      icon: Layers,
      skills: ['Responsive Web Design', 'Reusable UI Components', 'Web Application Development'],
      description: 'Architecting scalable, mobile-friendly component layouts and modular systems.'
    },
  ];

  useEffect(() => {
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-[#B36470] dark:text-[#E8A2AB]">
            Technical Competencies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
            Skills &amp; Technologies
          </h2>
          <div className="w-12 h-0.5 bg-[#C87D87] dark:bg-[#E8A2AB] mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className={`bg-[#FFFFFF] dark:bg-[#281B1E] p-6 rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] hover:border-[#C87D87]/60 dark:hover:border-[#E8A2AB]/60 shadow-sm hover:shadow-md transition-all duration-500 ease-out group flex flex-col justify-between ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center text-[#B36470] dark:text-[#E8A2AB] border border-[#E0B9C0]/30 dark:border-[#4A3237] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#7C6267] dark:text-[#C7B4B8] mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F9F3EE] dark:bg-[#1A1214] text-[#3D262A] dark:text-[#FBF7F5] border border-[#E0B9C0]/40 dark:border-[#4A3237] hover:bg-[#F6E8EA] dark:hover:bg-[#3D262C] hover:text-[#B36470] dark:hover:text-[#E8A2AB] transition-all duration-300 ${
                          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                        style={{ transitionDelay: isVisible ? `${idx * 100 + sIdx * 50}ms` : '0ms' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E0B9C0]/20 dark:border-[#4A3237]/40 text-[10px] font-mono text-[#7C6267] dark:text-[#C7B4B8] flex justify-between items-center">
                  <span>{cat.skills.length} competencies</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C87D87] dark:bg-[#E8A2AB]" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
