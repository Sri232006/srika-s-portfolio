import React from 'react';
import { Trophy, Users, FileText, Zap, Sparkles } from 'lucide-react';

export default function Events() {
  const paperPresentations = [
    {
      title: 'Bytstrom',
      description: 'Symposium Paper Presentation',
      venue: 'Mohammed Sathak Engineering College, Kilakarai',
      year: '2025',
      status: 'Participated',
    },
    {
      title: "Nexora'25",
      description: 'Symposium Paper Presentation',
      venue: 'Mangayarkarasi College of Engineering, Madurai',
      year: '2025',
      status: 'Participated',
    },
  ];

  const hackathons = [
    {
      title: "CodeFurry'25",
      duration: '24 hrs',
      level: 'Inter-level',
      venue: 'Syed Ammal Engineering College, Ramanathapuram',
      year: '2025',
      status: 'Participated',
    },
    {
      title: 'Hackfinity',
      duration: '24 hrs',
      level: 'Intra-level',
      venue: 'Syed Ammal Engineering College, Ramanathapuram',
      year: '2025',
      status: 'Participated',
    },
    {
      title: "Hackspora'25",
      duration: '24 hrs',
      level: 'Inter-level',
      venue: 'Karpagam Academy of Higher Education, Coimbatore',
      year: '2025',
      status: 'Participated',
    },
    {
      title: "Hacknext'25",
      duration: '30 hrs',
      level: 'Inter-level',
      venue: 'SNS College of Technology, Coimbatore',
      year: '2025',
      status: 'Participated',
    },
    {
      title: 'DataXscape',
      duration: '24 hrs',
      level: 'Inter-level',
      venue: 'Panimalar Engineering College, Chennai',
      year: '2026',
      status: 'Participated',
    },
  ];

  const summits = [
    {
      title: 'MakeGPT Summit 2025',
      venue: 'IIT Madras Research Park, Chennai',
      year: '2025',
      status: 'Participated',
    },
  ];

  return (
    <section id="events" className="py-16 md:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-[#B36470] dark:text-[#E8A2AB]">
            Engagement &amp; Exposure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
            Hackathons, Symposiums &amp; Events
          </h2>
          <p className="text-xs text-[#7C6267] dark:text-[#C7B4B8]">
            Active participant in technical paper presentations, competitive hackathons, and AI summits.
          </p>
          <div className="w-12 h-0.5 bg-[#C87D87] dark:bg-[#E8A2AB] mx-auto rounded-full mt-2" />
        </div>

        <div className="space-y-12">
          
          {/* Paper Presentations Subsection */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#E0B9C0]/30 dark:border-[#4A3237]/40 pb-3">
              <FileText className="w-5 h-5 text-[#B36470] dark:text-[#E8A2AB]" />
              <h3 className="font-serif text-2xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                Paper Presentations
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paperPresentations.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] dark:bg-[#281B1E] p-6 rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] shadow-sm flex justify-between items-start"
                >
                  <div className="space-y-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F6E8EA] dark:bg-[#3D262C] text-[#B36470] dark:text-[#E8A2AB]">
                      {item.status}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6E555A] dark:text-[#D4C4C7]">
                      {item.description}
                    </p>
                    <p className="text-xs text-[#7C6267] dark:text-[#C7B4B8]">
                      {item.venue}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#7C6267] dark:text-[#C7B4B8] shrink-0">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons Subsection */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#E0B9C0]/30 dark:border-[#4A3237]/40 pb-3">
              <Zap className="w-5 h-5 text-[#B36470] dark:text-[#E8A2AB]" />
              <h3 className="font-serif text-2xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                Hackathons
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hackathons.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] dark:bg-[#281B1E] p-6 rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] shadow-sm flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F6E8EA] dark:bg-[#3D262C] text-[#B36470] dark:text-[#E8A2AB]">
                        {h.status}
                      </span>
                      <span className="text-[11px] font-mono text-[#7C6267] dark:text-[#C7B4B8]">
                        {h.year}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                      {h.title}
                    </h4>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#B36470] dark:text-[#E8A2AB] mt-1">
                      <span>{h.duration}</span>
                      <span>&bull;</span>
                      <span>{h.level}</span>
                    </div>

                    <p className="text-xs text-[#7C6267] dark:text-[#C7B4B8] mt-3 leading-relaxed">
                      {h.venue}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E0B9C0]/20 dark:border-[#4A3237]/30 text-[10px] font-mono text-[#7C6267] dark:text-[#C7B4B8] flex items-center justify-between">
                    <span>Participation Record</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C87D87] dark:bg-[#E8A2AB]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summits & Conferences Subsection */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#E0B9C0]/30 dark:border-[#4A3237]/40 pb-3">
              <Sparkles className="w-5 h-5 text-[#B36470] dark:text-[#E8A2AB]" />
              <h3 className="font-serif text-2xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                Summits &amp; Tech Events
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {summits.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] dark:bg-[#281B1E] p-6 rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] shadow-sm flex justify-between items-start"
                >
                  <div className="space-y-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F6E8EA] dark:bg-[#3D262C] text-[#B36470] dark:text-[#E8A2AB]">
                      {item.status}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#7C6267] dark:text-[#C7B4B8]">
                      {item.venue}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#7C6267] dark:text-[#C7B4B8] shrink-0">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
