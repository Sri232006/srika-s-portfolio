import React from 'react';
import { Compass, Sparkles, Code2, LayoutTemplate, ChefHat, CakeSlice, Music, Crown } from 'lucide-react';

export default function StorySection() {
  const hobbies = [
    { label: 'Learning to code', icon: Code2 },
    { label: 'Building websites in my free time', icon: LayoutTemplate },
    { label: 'Cooking', icon: ChefHat },
    { label: 'Baking', icon: CakeSlice },
    { label: 'Listening to music', icon: Music },
    { label: 'Playing chess', icon: Crown },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F9F3EE]/60 dark:bg-[#23171A]/60 border-y border-[#E0B9C0]/30 dark:border-[#4A3237]/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-[#B36470] dark:text-[#E8A2AB]">
            My Story &amp; Passions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
            Behind the Code
          </h2>
          <div className="w-12 h-0.5 bg-[#C87D87] dark:bg-[#E8A2AB] mx-auto rounded-full" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Personal Journey Card (Left 7 Columns) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] dark:bg-[#281B1E] p-6 sm:p-8 rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] shadow-sm flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[#E0B9C0]/20 dark:border-[#4A3237]/40 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center border border-[#E0B9C0]/30 dark:border-[#4A3237]">
                  <Compass className="w-5 h-5 text-[#B36470] dark:text-[#E8A2AB]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                  Personal Journey
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#3D262A] dark:text-[#FBF7F5] leading-relaxed font-normal">
                <p>
                  I'm a Computer Science and Engineering student at Syed Ammal Engineering College, Ramanathapuram, and I enjoy building things people can actually use. My journey began with the basics: HTML5 and Python courses, and a Python internship at Oasis Infobyte. Then I moved into frontend development with React.js, where I love watching a design turn into a working screen.
                </p>
                <p>
                  Since then I have built websites for real businesses at Blunar.Co, worked on a School Management System at Zeshin, and taken part in hackathons and paper presentations across Tamil Nadu. I'm now looking for opportunities to keep growing as a frontend developer.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E0B9C0]/20 dark:border-[#4A3237]/30 flex items-center justify-between text-xs font-mono text-[#7C6267] dark:text-[#C7B4B8]">
              <span>Frontend Engineering Focus</span>
              <span className="w-2 h-2 rounded-full bg-[#B36470] dark:bg-[#E8A2AB]" aria-hidden="true" />
            </div>

          </div>

          {/* Hobbies & Interests Card (Right 5 Columns) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] dark:bg-[#281B1E] p-6 sm:p-8 rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] shadow-sm flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[#E0B9C0]/20 dark:border-[#4A3237]/40 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center border border-[#E0B9C0]/30 dark:border-[#4A3237]">
                  <Sparkles className="w-5 h-5 text-[#B36470] dark:text-[#E8A2AB]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                  Hobbies &amp; Interests
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {hobbies.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FDFBF7] dark:bg-[#1A1214] border border-[#E0B9C0]/40 dark:border-[#4A3237] text-xs font-semibold text-[#3D262A] dark:text-[#FBF7F5] flex items-center gap-3 shadow-2xs hover:border-[#C87D87]/60 dark:hover:border-[#E8A2AB]/60 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#B36470] dark:text-[#E8A2AB]" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <span className="leading-snug">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E0B9C0]/20 dark:border-[#4A3237]/30 text-xs font-mono text-[#7C6267] dark:text-[#C7B4B8] flex items-center justify-between">
              <span>Personal Pursuits</span>
              <span className="text-[10px] text-[#B36470] dark:text-[#E8A2AB] bg-[#F6E8EA] dark:bg-[#3D262C] px-2 py-0.5 rounded-full">
                6 Interests
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
