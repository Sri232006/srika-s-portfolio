import React from 'react';
import { ExternalLink, AlertCircle, CheckCircle, Cpu, LayoutDashboard, School, Store, Calculator, Target, Lock } from 'lucide-react';
import { GithubIcon } from './Icons';

export const projectsData = [
  {
    title: 'Edu Analytics',
    tech: ['React.js', 'Tailwind CSS', 'Flask', 'MongoDB'],
    problem: 'Academic performance tracking across departments is often fragmented, manual, and lacks interactive visual analytics.',
    built: 'Student performance analytics platform to track and visualize academic progress.',
    result: 'Responsive UI with React.js and Tailwind CSS, with backend APIs integrated for data management.',
    github: 'https://github.com/Sri232006/ISTE/tree/main',
    live: null,
    statusTag: 'Built for ISTE',
    mockupIcon: LayoutDashboard,
    mockupLabel: 'Student Analytics Dashboard',
  },
  {
    title: 'Klyvora – School Management System',
    tech: ['React.js'],
    problem: 'School administrations need structured, modular systems to handle multi-role administrative workflows seamlessly across faculty, students, and staff.',
    built: 'Responsive frontend to manage students, faculty, academics, attendance, fees, and other core school administration activities.',
    result: 'Modules built with reusable React components and a clean, organized frontend structure for enterprise school operations.',
    github: null,
    live: null,
    statusTag: 'Internship project at Zeshin (private)',
    mockupIcon: School,
    mockupLabel: 'School Portal Interface',
  },
  {
    title: 'Sri Lakshmi Tiles & Granites',
    tech: ['React.js'],
    problem: 'Product showcase websites for granite and tiles businesses require high visual appeal, intuitive layout catalogs, and cross-device responsiveness.',
    built: 'Responsive website for a tiles and granite business showcasing product lines, texture galleries, and contact details.',
    result: 'User-friendly interfaces with clean responsive layouts tailored for desktop, tablet, and mobile customer browsing.',
    github: null,
    live: null,
    statusTag: 'Client project at Blunar.Co',
    mockupIcon: Store,
    mockupLabel: 'Catalog & Gallery Showcase',
  },
  {
    title: 'GPA Genius',
    tech: ['React.js', 'Firebase'],
    problem: 'Students lack a simplified, persistent web application to calculate and monitor term GPA and cumulative CGPA over time.',
    built: 'GPA calculator with real-time GPA and CGPA tracking.',
    result: 'Firebase used for authentication and cloud data storage.',
    github: 'https://github.com/Sri232006/GPAGENIUS/tree/main',
    live: 'https://mini-project-675a8.web.app',
    statusTag: null,
    mockupIcon: Calculator,
    mockupLabel: 'GPA/CGPA Calculation Suite',
  },
  {
    title: 'Goal Map',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
    problem: 'Productivity mapping requires a clean, focused task interface with real-time sync across devices.',
    built: 'Productivity and goal-tracking web application.',
    result: 'User-friendly interfaces with secure Firebase integration.',
    github: 'https://github.com/Sri232006/SAEC-Hackfinity.git',
    live: 'https://goalmap-e0bd5.web.app',
    statusTag: null,
    mockupIcon: Target,
    mockupLabel: 'Goal Tracker Canvas',
  },
];

export default function Projects() {
  const projects = projectsData;

  return (
    <section id="projects" className="py-16 md:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-[#B36470] dark:text-[#E8A2AB]">
            Case Studies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
            Featured Projects
          </h2>
          <p className="text-sm text-[#7C6267] dark:text-[#C7B4B8]">
            Detailed breakdown of problems solved, architecture built, tech stack used, and results achieved.
          </p>
          <div className="w-12 h-0.5 bg-[#C87D87] dark:bg-[#E8A2AB] mx-auto rounded-full mt-2" aria-hidden="true" />
        </div>

        {/* Projects Case Study Cards */}
        <div className="space-y-12">
          {projects.map((proj, idx) => {
            const MockupIcon = proj.mockupIcon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] dark:bg-[#281B1E] rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] shadow-sm hover:shadow-md transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                
                {/* Designed UI Wireframe Mockup (Left 5 cols) */}
                <div className="lg:col-span-5 bg-[#FAF3EE] dark:bg-[#1E1517] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E0B9C0]/30 dark:border-[#4A3237]/40 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7C6267] dark:text-[#C7B4B8] mb-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C87D87] dark:bg-[#E8A2AB]" aria-hidden="true" />
                      Case Study #{idx + 1}
                    </span>
                    <span>UI Wireframe</span>
                  </div>

                  {/* Styled Wireframe Card */}
                  <div className="my-auto py-8 px-6 rounded-xl bg-[#FDFBF7] dark:bg-[#281B1E] border border-[#E0B9C0]/50 dark:border-[#4A3237] text-center space-y-4 shadow-inner">
                    <div className="w-16 h-16 rounded-2xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center mx-auto border border-[#E0B9C0]/40 dark:border-[#4A3237]">
                      <MockupIcon className="w-10 h-10 text-[#B36470] dark:text-[#E8A2AB]" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                        {proj.title}
                      </h4>
                      <p className="text-xs text-[#7C6267] dark:text-[#C7B4B8] mt-1 font-mono">
                        {proj.mockupLabel}
                      </p>
                    </div>

                    {/* Wireframe Mock Action Bar */}
                    <div className="pt-2 flex justify-center gap-1.5" aria-hidden="true">
                      <span className="w-2 h-2 rounded-full bg-[#E0B9C0] dark:bg-[#4A3237]" />
                      <span className="w-2 h-2 rounded-full bg-[#E0B9C0] dark:bg-[#4A3237]" />
                      <span className="w-2 h-2 rounded-full bg-[#E0B9C0] dark:bg-[#4A3237]" />
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#E0B9C0]/20 dark:border-[#4A3237]/30 flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#F6E8EA] dark:bg-[#3D262C] text-[#B36470] dark:text-[#E8A2AB]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Detailed Breakdown (Right 7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <h3 className="font-serif text-2xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                        {proj.title}
                      </h3>

                      {/* Header Status Tag */}
                      {proj.statusTag && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#B36470] dark:text-[#E8A2AB] bg-[#F6E8EA] dark:bg-[#3D262C] border border-[#E0B9C0]/40 dark:border-[#4A3237]">
                          {proj.statusTag.includes('private') ? (
                            <Lock className="w-3 h-3" aria-hidden="true" />
                          ) : null}
                          <span>{proj.statusTag}</span>
                        </span>
                      )}
                    </div>

                    {/* Problem & Solution Breakdown */}
                    <div className="space-y-4 text-xs sm:text-sm text-[#6E555A] dark:text-[#D4C4C7]">
                      
                      {/* Problem */}
                      <div className="p-3.5 rounded-xl bg-[#F9F3EE]/80 dark:bg-[#1A1214]/60 border border-[#E0B9C0]/30 dark:border-[#4A3237]/40">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#B36470] dark:text-[#E8A2AB] mb-1">
                          <AlertCircle className="w-4 h-4" aria-hidden="true" />
                          <span>The Problem</span>
                        </div>
                        <p className="leading-relaxed">{proj.problem}</p>
                      </div>

                      {/* What I Built */}
                      <div className="p-3.5 rounded-xl bg-[#FDFBF7] dark:bg-[#23171A] border border-[#E0B9C0]/30 dark:border-[#4A3237]/40">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#3D262A] dark:text-[#FBF7F5] mb-1">
                          <Cpu className="w-4 h-4 text-[#B36470] dark:text-[#E8A2AB]" aria-hidden="true" />
                          <span>What I Built</span>
                        </div>
                        <p className="leading-relaxed">{proj.built}</p>
                      </div>

                      {/* Result */}
                      <div className="p-3.5 rounded-xl bg-[#F6E8EA]/50 dark:bg-[#3D262C]/30 border border-[#E0B9C0]/40 dark:border-[#4A3237]/40">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#B36470] dark:text-[#E8A2AB] mb-1">
                          <CheckCircle className="w-4 h-4" aria-hidden="true" />
                          <span>Results &amp; Impact</span>
                        </div>
                        <p className="leading-relaxed">{proj.result}</p>
                      </div>

                    </div>
                  </div>

                  {/* Project Links & Intentional Status Footer */}
                  <div className="pt-4 border-t border-[#E0B9C0]/30 dark:border-[#4A3237]/40 flex flex-wrap items-center gap-3">
                    
                    {/* GitHub Button (Rendered only if repo URL is provided) */}
                    {proj.github && proj.github.startsWith('http') && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#B36470] hover:bg-[#9E4D59] dark:bg-[#E8A2AB] dark:text-[#1A1214] transition-all shadow-xs"
                      >
                        <GithubIcon className="w-4 h-4" aria-hidden="true" />
                        <span>View GitHub Code</span>
                      </a>
                    )}

                    {/* Live Button (Rendered only if live URL is provided) */}
                    {proj.live && proj.live.startsWith('http') && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#3D262A] dark:text-[#FBF7F5] border border-[#C87D87]/40 dark:border-[#E8A2AB]/40 hover:bg-[#F6E8EA] dark:hover:bg-[#3D262C] transition-all shadow-xs"
                      >
                        <ExternalLink className="w-4 h-4 text-[#B36470] dark:text-[#E8A2AB]" aria-hidden="true" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {/* Live Link Placeholder (Rendered only if explicitly set to placeholder) */}
                    {proj.live && proj.live.startsWith('[PLACEHOLDER') && (
                      <span
                        title="Placeholder: Live demo link will be added"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#F9F3EE] dark:bg-[#1A1214] text-[#7C6267] dark:text-[#C7B4B8] border border-dashed border-[#C87D87]/40 dark:border-[#E8A2AB]/30"
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        <span>Live Link: [Placeholder]</span>
                      </span>
                    )}

                    {/* Quiet Status Label Tag */}
                    {proj.statusTag && (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#7C6267] dark:text-[#C7B4B8] bg-[#F9F3EE] dark:bg-[#1A1214] border border-[#E0B9C0]/40 dark:border-[#4A3237]">
                        {proj.statusTag.includes('private') ? (
                          <Lock className="w-3 h-3 text-[#B36470] dark:text-[#E8A2AB]" aria-hidden="true" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B36470] dark:bg-[#E8A2AB]" aria-hidden="true" />
                        )}
                        <span>{proj.statusTag}</span>
                      </span>
                    )}

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
