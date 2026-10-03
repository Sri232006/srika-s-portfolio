import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', text: string, emailLink?: string }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // 1. Validate fields before sending
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setSubmitStatus({
        type: 'error',
        text: "Please fill out all required fields."
      });
      return;
    }

    // 2. Check for botcheck spam trigger
    if (formState.botcheck) {
      console.warn("Spam protection triggered (botcheck is checked).");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    // Log key presence (Boolean only, never the key itself)
    console.log('Web3Forms Access Key present:', Boolean(accessKey && accessKey !== 'your_access_key_here'));

    // 3. Case 1: Key Missing or Default Placeholder
    if (!accessKey || accessKey.trim() === '' || accessKey === 'your_access_key_here') {
      console.log("Contact form is not configured yet: VITE_WEB3FORMS_KEY is missing or using placeholder in .env.");
      setSubmitStatus({
        type: 'error',
        text: "Contact form is not configured yet (missing VITE_WEB3FORMS_KEY in .env). Please email me directly at ",
        emailLink: "srithikasrika@gmail.com"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        access_key: accessKey.trim(),
        name: formState.name.trim(),
        email: formState.email.trim(),
        message: formState.message.trim(),
        subject: 'New message from your portfolio',
        from_name: 'Portfolio Contact Form'
      };

      // Only include botcheck if marked
      if (formState.botcheck) {
        payload.botcheck = formState.botcheck;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      console.log('Web3Forms HTTP status code:', response.status);

      const data = await response.json();
      console.log('Web3Forms response payload:', data);

      // 4. Case 2: API Rejection (response.ok false or data.success false)
      if (!response.ok || !data.success) {
        console.log('Web3Forms API rejection message:', data.message);
        setSubmitStatus({
          type: 'error',
          text: `Couldn't send: ${data.message || 'API rejected submission'}. Please email me directly at `,
          emailLink: "srithikasrika@gmail.com"
        });
      } else {
        // Success
        setSubmitStatus({
          type: 'success',
          text: "Message sent. I'll reply soon."
        });
        setFormState({ name: '', email: '', message: '', botcheck: false });
      }
    } catch (err) {
      // 5. Case 3: Network Error / Exception
      console.error('Web3Forms network failure:', err);
      setSubmitStatus({
        type: 'error',
        text: `Network error: ${err.message || "Could not connect to service"}. Please email me directly at `,
        emailLink: "srithikasrika@gmail.com"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-[#B36470] dark:text-[#E8A2AB]">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
            Contact Me
          </h2>
          <p className="text-sm text-[#7C6267] dark:text-[#C7B4B8]">
            Whether you have a job opportunity, project inquiry, or just want to connect — my inbox is always open.
          </p>
          <div className="w-12 h-0.5 bg-[#C87D87] dark:bg-[#E8A2AB] mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Contact Direct Cards (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 1. Email Card */}
            <a
              href="mailto:srithikasrika@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#281B1E] border border-[#E0B9C0]/40 dark:border-[#4A3237] hover:border-[#C87D87]/60 dark:hover:border-[#E8A2AB]/60 shadow-sm transition-all group focus:outline-none focus:ring-2 focus:ring-[#C87D87] dark:focus:ring-[#E8A2AB]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center text-[#B36470] dark:text-[#E8A2AB] group-hover:scale-110 transition-transform shrink-0">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#7C6267] dark:text-[#C7B4B8] uppercase">Email</span>
                <p className="text-sm font-semibold text-[#3D262A] dark:text-[#FBF7F5] group-hover:text-[#B36470] dark:group-hover:text-[#E8A2AB] transition-colors">
                  srithikasrika@gmail.com
                </p>
              </div>
            </a>

            {/* 2. LinkedIn Card */}
            <a
              href="https://linkedin.com/in/srika-s"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#281B1E] border border-[#E0B9C0]/40 dark:border-[#4A3237] hover:border-[#C87D87]/60 dark:hover:border-[#E8A2AB]/60 shadow-sm transition-all group focus:outline-none focus:ring-2 focus:ring-[#C87D87] dark:focus:ring-[#E8A2AB]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center text-[#B36470] dark:text-[#E8A2AB] group-hover:scale-110 transition-transform shrink-0">
                <LinkedinIcon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#7C6267] dark:text-[#C7B4B8] uppercase">LinkedIn</span>
                <p className="text-sm font-semibold text-[#3D262A] dark:text-[#FBF7F5] group-hover:text-[#B36470] dark:group-hover:text-[#E8A2AB] transition-colors">
                  linkedin.com/in/srika-s
                </p>
              </div>
            </a>

            {/* 3. GitHub Card */}
            <a
              href="https://github.com/Sri232006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#281B1E] border border-[#E0B9C0]/40 dark:border-[#4A3237] hover:border-[#C87D87]/60 dark:hover:border-[#E8A2AB]/60 shadow-sm transition-all group focus:outline-none focus:ring-2 focus:ring-[#C87D87] dark:focus:ring-[#E8A2AB]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center text-[#B36470] dark:text-[#E8A2AB] group-hover:scale-110 transition-transform shrink-0">
                <GithubIcon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#7C6267] dark:text-[#C7B4B8] uppercase">GitHub</span>
                <p className="text-sm font-semibold text-[#3D262A] dark:text-[#FBF7F5] group-hover:text-[#B36470] dark:group-hover:text-[#E8A2AB] transition-colors">
                  github.com/Sri232006
                </p>
              </div>
            </a>

            {/* 4. Location Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#281B1E] border border-[#E0B9C0]/40 dark:border-[#4A3237] shadow-sm transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] flex items-center justify-center text-[#B36470] dark:text-[#E8A2AB] shrink-0">
                <MapPin className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#7C6267] dark:text-[#C7B4B8] uppercase">Location</span>
                <p className="text-sm font-semibold text-[#3D262A] dark:text-[#FBF7F5]">
                  Ramanathapuram, Tamil Nadu, India
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Web3Forms Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] dark:bg-[#281B1E] p-6 sm:p-8 rounded-2xl border border-[#E0B9C0]/40 dark:border-[#4A3237] shadow-sm relative">
            
            <div className="flex items-center gap-2 mb-6 border-b border-[#E0B9C0]/20 dark:border-[#4A3237]/30 pb-4">
              <MessageSquare className="w-5 h-5 text-[#B36470] dark:text-[#E8A2AB]" aria-hidden="true" />
              <h3 className="font-serif text-xl font-bold text-[#3D262A] dark:text-[#FBF7F5]">
                Send a Message
              </h3>
            </div>

            {/* Status Feedback Banner with aria-live */}
            <div aria-live="polite">
              {submitStatus && submitStatus.type === 'success' && (
                <div className="p-4 rounded-xl bg-[#F6E8EA] dark:bg-[#3D262C] border border-[#E0B9C0] dark:border-[#4A3237] text-left flex items-start gap-3 text-sm text-[#3D262A] dark:text-[#FBF7F5] mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#B36470] dark:text-[#E8A2AB] shrink-0 mt-0.5" aria-hidden="true" />
                  <p>{submitStatus.text}</p>
                </div>
              )}

              {submitStatus && submitStatus.type === 'error' && (
                <div className="p-4 rounded-xl bg-[#FFF5F5] dark:bg-[#34181C] border border-[#F8B4B4] dark:border-[#68232B] text-left flex items-start gap-3 text-sm text-[#9B2C2C] dark:text-[#FEB2B2] mb-4">
                  <AlertCircle className="w-5 h-5 text-[#C53030] dark:text-[#F87171] shrink-0 mt-0.5" aria-hidden="true" />
                  <p>
                    {submitStatus.text}
                    {submitStatus.emailLink && (
                      <a
                        href={`mailto:${submitStatus.emailLink}`}
                        className="underline font-semibold hover:text-[#9E4D59] dark:hover:text-[#F0B3BC]"
                      >
                        {submitStatus.emailLink}
                      </a>
                    )}
                  </p>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden Botcheck Honeypot for Web3Forms Spam Protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                onChange={handleChange}
                checked={formState.botcheck}
                tabIndex="-1"
                autoComplete="off"
              />

              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-[#3D262A] dark:text-[#FBF7F5] mb-1">
                  Your Name <span className="text-[#B36470] dark:text-[#E8A2AB]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FDFBF7] dark:bg-[#1A1214] border border-[#E0B9C0]/50 dark:border-[#4A3237] text-sm text-[#3D262A] dark:text-[#FBF7F5] focus:outline-none focus:ring-2 focus:ring-[#C87D87] dark:focus:ring-[#E8A2AB] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-[#3D262A] dark:text-[#FBF7F5] mb-1">
                  Your Email <span className="text-[#B36470] dark:text-[#E8A2AB]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FDFBF7] dark:bg-[#1A1214] border border-[#E0B9C0]/50 dark:border-[#4A3237] text-sm text-[#3D262A] dark:text-[#FBF7F5] focus:outline-none focus:ring-2 focus:ring-[#C87D87] dark:focus:ring-[#E8A2AB] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-[#3D262A] dark:text-[#FBF7F5] mb-1">
                  Message <span className="text-[#B36470] dark:text-[#E8A2AB]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Hi Srika, I'd like to discuss a frontend opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FDFBF7] dark:bg-[#1A1214] border border-[#E0B9C0]/50 dark:border-[#4A3237] text-sm text-[#3D262A] dark:text-[#FBF7F5] focus:outline-none focus:ring-2 focus:ring-[#C87D87] dark:focus:ring-[#E8A2AB] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#B36470] hover:bg-[#9E4D59] dark:bg-[#E8A2AB] dark:text-[#1A1214] dark:hover:bg-[#F0B3BC] transition-all shadow-sm active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#C87D87] dark:focus:ring-[#E8A2AB]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
