import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, ShieldCheck, Star } from 'lucide-react';
import nptelPdf from '../assets/NPTEL_certificate.pdf';
import vdartPdf from '../assets/VDart_Certificate.pdf';

export default function Certificates() {
  const [eliteVisible, setEliteVisible] = useState(false);
  const eliteRef = useRef(null);

  const eliteCert = {
    title: 'NPTEL Elite Certification – Python for Data Science',
    issuer: 'IIT Madras',
    period: 'Jan–Feb 2026 (4-week course)',
    score: '69%',
    breakdown: {
      assignments: '24.17 / 25',
      proctoredExam: '45 / 75',
    },
    badge: 'Elite',
    link: nptelPdf || '/NPTEL_certificate.pdf',
  };

  const otherCerts = [
    {
      title: 'Full Stack Development Internship Certificate',
      issuer: 'VDart Academy, Trichy',
      period: 'Jun 2026',
      link: vdartPdf || '/Srika S - A2004 - Completion_Certificate.pdf',
      downloadName: 'Srika_S_VDart_Completion_Certificate.pdf',
      buttonText: 'View & Download Credential',
    },
    {
      title: 'Python Internship Certificate',
      issuer: 'Oasis Infobyte',
      period: 'Jul 2025',
      link: 'https://www.linkedin.com/posts/activity-7365250370291355649-9JF9?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAFo68okBfjem4GJAKsAGxCOK4O9Kbzp8MKQ&utm_campaign=copy_link',
      buttonText: 'View Oasis Infobyte Certificate',
    },
    {
      title: 'HTML5 – The Language',
      issuer: 'Infosys Springboard',
      period: 'Aug 2024',
      link: 'https://drive.google.com/file/d/1sY8LRoX0pDT-JFpfFf9u_9lYkGhoV6z9/view?usp=drivesdk',
      buttonText: 'View HTML5 Credential',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Infosys Springboard',
      period: 'Aug 2024',
      link: 'https://drive.google.com/file/d/1sItL128CNixvoYHDQYaFYNbkkC1DU1Vy/view?usp=drivesdk',
      buttonText: 'View Python Credential',
    },
    {
      title: 'SQL Intermediate',
      issuer: 'Sololearn',
      period: 'Aug 2025',
      link: 'https://api2.sololearn.com/v2/certificates/CC-2FYWCTBX/image/png?t=638905945383421910',
      buttonText: 'View Sololearn Certificate',
    },
  ];

  useEffect(() => {
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setEliteVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEliteVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (eliteRef.current) {
      observer.observe(eliteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificates" className="py-16 md:py-24 bg-[#F9F3EE]/60 dark:bg-[#23171A]/60 border-y border-[#E0B9C0]/30 dark:border-[#4A3237]/30 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-[#B36470] dark:text-[#E8A2AB]">
            Verified Achievements
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
            Certifications &amp; Courses
          </h2>
          <div className="w-12 h-0.5 bg-[#C87D87] dark:bg-[#E8A2AB] mx-auto rounded-full" />
        </div>

        {/* Featured NPTEL Elite Certificate Card */}
        <div className="max-w-4xl mx-auto mb-12" ref={eliteRef}>
          <div className="relative bg-[#FFFFFF] dark:bg-[#281B1E] p-6 sm:p-8 rounded-3xl border-2 border-[#C87D87] dark:border-[#E8A2AB] shadow-lg overflow-hidden group">
            
            {/* Subtle Shine Sweep when Elite card first appears */}
            {eliteVisible && (
              <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 dark:via-rose-300/20 to-transparent pointer-events-none animate-shine-sweep" />
            )}

            {/* Top Accent Ribbon */}
            <div className="absolute top-0 right-0 bg-[#B36470] dark:bg-[#E8A2AB] text-white dark:text-[#1A1214] text-[11px] font-bold uppercase tracking-widest px-6 py-1.5 rounded-bl-2xl shadow-sm flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
              <span>NPTEL Elite Highlight</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Badge & Icon (Left 3 Cols) */}
              <div className="md:col-span-3 flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-[#F6E8EA] dark:bg-[#3D262C] border border-[#E0B9C0]/40 dark:border-[#4A3237]">
                <Award className="w-12 h-12 text-[#B36470] dark:text-[#E8A2AB] mb-2" aria-hidden="true" />
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#B36470] text-white dark:bg-[#E8A2AB] dark:text-[#1A1214]">
                  {eliteCert.badge}
                </span>
                <span className="text-[11px] font-mono text-[#7C6267] dark:text-[#C7B4B8] mt-2">
                  Score: {eliteCert.score}
                </span>
              </div>

              {/* Details & Score Breakdown (Right 9 Cols) */}
              <div className="md:col-span-9 space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#3D262A] dark:text-[#FBF7F5] pr-12">
                    {eliteCert.title}
                  </h3>
                  <p className="text-sm font-medium text-[#B36470] dark:text-[#E8A2AB] mt-1">
                    {eliteCert.issuer} &bull; <span className="text-[#7C6267] dark:text-[#C7B4B8] font-normal">{eliteCert.period}</span>
                  </p>
                </div>

                {/* Score Breakdown Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#FDFBF7] dark:bg-[#1A1214] border border-[#E0B9C0]/30 dark:border-[#4A3237]">
                    <span className="text-[10px] text-[#7C6267] dark:text-[#C7B4B8] block">Consolidated</span>
                    <strong className="text-sm text-[#3D262A] dark:text-[#FBF7F5]">{eliteCert.score}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FDFBF7] dark:bg-[#1A1214] border border-[#E0B9C0]/30 dark:border-[#4A3237]">
                    <span className="text-[10px] text-[#7C6267] dark:text-[#C7B4B8] block">Online Assignments</span>
                    <strong className="text-sm text-[#3D262A] dark:text-[#FBF7F5]">{eliteCert.breakdown.assignments}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FDFBF7] dark:bg-[#1A1214] border border-[#E0B9C0]/30 dark:border-[#4A3237] col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-[#7C6267] dark:text-[#C7B4B8] block">Proctored Exam</span>
                    <strong className="text-sm text-[#3D262A] dark:text-[#FBF7F5]">{eliteCert.breakdown.proctoredExam}</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={eliteCert.link}
                    download="NPTEL_Python_For_Data_Science_Srika_S.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#B36470] hover:bg-[#9E4D59] dark:bg-[#E8A2AB] dark:text-[#1A1214] dark:hover:bg-[#F0B3BC] transition-all shadow-sm"
                  >
                    <span>View &amp; Download NPTEL Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Other Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {otherCerts.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] dark:bg-[#281B1E] p-6 rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] hover:border-[#C87D87]/60 dark:hover:border-[#E8A2AB]/60 shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center text-[#B36470] dark:text-[#E8A2AB]">
                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-mono text-[#7C6267] dark:text-[#C7B4B8]">
                    {cert.period}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#B36470] dark:text-[#E8A2AB] mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E0B9C0]/20 dark:border-[#4A3237]/30">
                {!cert.link.startsWith('[PLACEHOLDER') ? (
                  <a
                    href={cert.link}
                    {...(cert.downloadName ? { download: cert.downloadName } : {})}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#B36470] hover:bg-[#9E4D59] dark:bg-[#E8A2AB] dark:text-[#1A1214] dark:hover:bg-[#F0B3BC] transition-all shadow-sm"
                  >
                    <span>{cert.buttonText || 'View Credential'}</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7C6267] dark:text-[#C7B4B8] border border-dashed border-[#C87D87]/40 dark:border-[#E8A2AB]/30 px-3 py-1 rounded-full">
                    <span>Credential: [Placeholder]</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
