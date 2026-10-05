import React from 'react';
import { GraduationCap, School, Calendar, MapPin, Edit } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-[#F9F3EE]/60 dark:bg-[#23171A]/60 border-y border-[#E0B9C0]/30 dark:border-[#4A3237]/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-[#B36470] dark:text-[#E8A2AB]">
            Academic Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
            Education
          </h2>
          <div className="w-12 h-0.5 bg-[#C87D87] dark:bg-[#E8A2AB] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Engineering Degree Card */}
          <div className="bg-[#FFFFFF] dark:bg-[#281B1E] p-6 sm:p-8 rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] shadow-sm flex flex-col justify-between space-y-6 relative group">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center text-[#B36470] dark:text-[#E8A2AB] border border-[#E0B9C0]/40 dark:border-[#4A3237]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#7C6267] dark:text-[#C7B4B8] bg-[#F9F3EE] dark:bg-[#1A1214]">
                  <Calendar className="w-3.5 h-3.5 text-[#B36470] dark:text-[#E8A2AB]" />
                  2023 – 2027
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                  B.E. Computer Science &amp; Engineering
                </h3>
                <p className="text-sm font-semibold text-[#B36470] dark:text-[#E8A2AB] mt-1">
                  Syed Ammal Engineering College
                </p>
                <p className="text-xs text-[#7C6267] dark:text-[#C7B4B8] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Ramanathapuram, Tamil Nadu
                </p>
              </div>
            </div>

            {/* 
              ============================================================
              EASY SPOT TO ADD CGPA LATER (SRIKA):
              Uncomment the block below when you want to display your CGPA:
              
              <div className="p-3 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] border border-[#E0B9C0]/40 dark:border-[#4A3237]">
                <p className="text-xs font-semibold text-[#3D262A] dark:text-[#FBF7F5]">
                  CGPA: <span className="text-[#B36470] dark:text-[#E8A2AB] font-bold">[PLACEHOLDER: Add CGPA e.g. 8.5/10]</span>
                </p>
              </div>
              ============================================================
            */}

            <div className="pt-4 border-t border-[#E0B9C0]/20 dark:border-[#4A3237]/30 flex items-center justify-between text-[11px] font-mono text-[#7C6267] dark:text-[#C7B4B8]">
              <span>Undergraduate Program</span>
            </div>

          </div>

          {/* Schooling Card */}
          <div className="bg-[#FFFFFF] dark:bg-[#281B1E] p-6 sm:p-8 rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] shadow-sm flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center text-[#B36470] dark:text-[#E8A2AB] border border-[#E0B9C0]/40 dark:border-[#4A3237]">
                  <School className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#7C6267] dark:text-[#C7B4B8] bg-[#F9F3EE] dark:bg-[#1A1214]">
                  Schooling
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                  Higher Secondary Education
                </h3>
                <p className="text-sm font-semibold text-[#B36470] dark:text-[#E8A2AB] mt-1">
                  National Academy Matric Hr. Sec. School
                </p>
                <p className="text-xs text-[#7C6267] dark:text-[#C7B4B8] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Uchipuli, Tamil Nadu
                </p>
              </div>
            </div>

            {/* 
              ============================================================
              EASY SPOT TO ADD 12TH MARKS LATER (SRIKA):
              Uncomment the block below when you want to display your 12th marks:
              
              <div className="p-3 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] border border-[#E0B9C0]/40 dark:border-[#4A3237]">
                <p className="text-xs font-semibold text-[#3D262A] dark:text-[#FBF7F5]">
                  HSC Score: <span className="text-[#B36470] dark:text-[#E8A2AB] font-bold">[PLACEHOLDER: Add 12th Score e.g. 92%]</span>
                </p>
              </div>
              ============================================================
            */}

            <div className="pt-4 border-t border-[#E0B9C0]/20 dark:border-[#4A3237]/30 flex items-center justify-between text-[11px] font-mono text-[#7C6267] dark:text-[#C7B4B8]">
              <span>Secondary Schooling</span>
              <span className="text-[10px] text-[#7C6267] dark:text-[#C7B4B8]">
                Standard Curriculum
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
