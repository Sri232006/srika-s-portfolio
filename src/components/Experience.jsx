import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const experiencesData = [
  {
    role: 'Frontend Development Intern',
    company: 'Zeshin',
    period: 'Aug 2026 – Present',
    location: 'Full-time',
    points: [
      'Developing a responsive frontend for a School Management System using React.js.',
      'Designing user-friendly interfaces for student and school administration modules.',
    ],
    current: true,
  },
  {
    role: 'Full Stack Development Intern',
    company: 'VDart Academy',
    period: 'Jun 2026',
    location: 'Trichy',
    points: [
      'Developed a GPA and CGPA calculator website collaboratively with a team member.',
      'Built user interfaces and implemented GPA/CGPA calculation functionality.',
    ],
    current: false,
  },
  {
    role: 'Frontend Developer',
    company: 'Blunar.Co',
    period: 'Dec 2025 – Aug 2026',
    location: 'Remote / Client Services',
    points: [
      'Developed responsive websites for a tiles and granite business and a salon.',
      'Designed clean, responsive UI layouts for desktop and mobile devices.',
    ],
    current: false,
  },
  {
    role: 'Python Intern',
    company: 'Oasis Infobyte',
    period: 'Jul 2025',
    location: 'Remote Internship',
    points: [
      'Worked on Python-based mini projects.',
      'Improved programming and problem-solving skills.',
    ],
    current: false,
  },
];

export default function Experience() {
  const [lineVisible, setLineVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState({});
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const experiences = experiencesData;

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLineVisible(true);
      const allVisible = {};
      experiences.forEach((_, idx) => { allVisible[idx] = true; });
      setVisibleItems(allVisible);
      return;
    }

    // Observer for central vertical line
    const lineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          lineObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      lineObserver.observe(sectionRef.current);
    }

    // Observer for each timeline item
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            if (index !== null) {
              setVisibleItems((prev) => ({ ...prev, [index]: true }));
              itemObserver.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => {
      lineObserver.disconnect();
      itemObserver.disconnect();
    };
  }, [experiences.length]);

  return (
    <section id="experience" ref={sectionRef} className="py-16 md:py-24 bg-[#F9F3EE]/60 dark:bg-[#23171A]/60 border-y border-[#E0B9C0]/30 dark:border-[#4A3237]/30 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-[#B36470] dark:text-[#E8A2AB]">
            Professional Work History
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
            Work &amp; Internship Experience
          </h2>
          <div className="w-12 h-0.5 bg-[#C87D87] dark:bg-[#E8A2AB] mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line with scaleY transition from top */}
          <div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#E0B9C0] dark:bg-[#4A3237] -translate-x-1/2 origin-top transition-transform duration-700 ease-out"
            style={{ transform: lineVisible ? 'scaleY(1)' : 'scaleY(0)' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const isItemVisible = visibleItems[idx];

              return (
                <div
                  key={idx}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  data-index={idx}
                  className="relative flex flex-col sm:flex-row items-center group"
                >
                  
                  {/* Timeline Dot Badge with Pop-In & Soft Pulse Ring for Present Role */}
                  <div
                    className={`absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-[#FFFFFF] dark:bg-[#281B1E] border-2 border-[#C87D87] dark:border-[#E8A2AB] flex items-center justify-center text-[#B36470] dark:text-[#E8A2AB] shadow-md transition-all duration-500 ease-out ${
                      isItemVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                    } ${exp.current ? 'ring-4 ring-[#B36470]/30 dark:ring-[#E8A2AB]/30 animate-pulse' : ''}`}
                    style={{ transitionDelay: isItemVisible ? `${idx * 120}ms` : '0ms' }}
                  >
                    <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>

                  {/* Experience Card Container with Staggered Slide In */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 transition-all duration-500 ease-out ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10 sm:ml-auto'
                    } ${
                      isItemVisible
                        ? 'translate-x-0 opacity-100'
                        : isEven
                        ? 'sm:-translate-x-6 translate-x-4 opacity-0'
                        : 'translate-x-6 opacity-0'
                    }`}
                    style={{ transitionDelay: isItemVisible ? `${idx * 120 + 80}ms` : '0ms' }}
                  >
                    <div className="bg-[#FFFFFF] dark:bg-[#281B1E] p-6 rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] hover:border-[#C87D87]/60 dark:hover:border-[#E8A2AB]/60 shadow-sm hover:shadow-md transition-all space-y-3 text-left">
                      
                      {/* Row 1: Present Role Tag & Date */}
                      <div className="flex flex-wrap items-center justify-start gap-2.5">
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#F6E8EA] dark:bg-[#3D262C] text-[#B36470] dark:text-[#E8A2AB] border border-[#E0B9C0]/40 dark:border-[#4A3237]">
                            Present Role
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#7C6267] dark:text-[#C7B4B8]">
                          <Calendar className="w-3.5 h-3.5 text-[#B36470] dark:text-[#E8A2AB]" aria-hidden="true" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Row 2 & 3: Role Title & Company Name */}
                      <div className="space-y-0.5 text-left">
                        <h3 className="font-serif text-xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-[#B36470] dark:text-[#E8A2AB] flex items-center gap-1.5 justify-start">
                          <span>{exp.company}</span>
                          <span className="text-[#7C6267] dark:text-[#C7B4B8] text-xs font-normal">({exp.location})</span>
                        </p>
                      </div>

                      {/* Row 4: Bullet List */}
                      <ul className="space-y-2 text-xs sm:text-sm text-[#6E555A] dark:text-[#D4C4C7] text-left">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-left">
                            <CheckCircle2 className="w-4 h-4 text-[#B36470] dark:text-[#E8A2AB] mt-0.5 shrink-0" aria-hidden="true" />
                            <span className="flex-1">{pt}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
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
