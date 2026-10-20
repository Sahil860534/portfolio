import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, Copy, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a brief message.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Contact</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          I am actively looking for entry-level Software Developer, .NET Developer, or Python Developer roles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Column: Direct Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Fresher Opportunity</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Available immediately as a 2025 graduate. Open to on-site in Pune, relocation, or remote work opportunities.
            </p>
          </div>

          <div className="space-y-2.5">
            {/* Email */}
            <div className="glass-card p-4 rounded-xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">
                    Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                title="Copy email"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl flex items-center gap-3 hover:border-teal-500/50 block group"
            >
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:scale-105 transition-transform">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">
                  GitHub
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                  github.com/Sahil860534
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl flex items-center gap-3 hover:border-teal-500/50 block group"
            >
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">
                  LinkedIn
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                  linkedin.com/in/sahil-rane
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="glass-card p-4 rounded-xl flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">
                  Location
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-7">
          <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-teal-500" />
              <span>Send a Quick Message</span>
            </h3>

            {submitted && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Thank you! Your message has been sent. Sahil will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              <div className="space-y-1">
                <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Recruiter Name"
                  className={`w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border ${
                    errors.name ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500`}
                />
                {errors.name && <p className="text-[10px] text-rose-500">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. hr@company.com"
                  className={`w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border ${
                    errors.email ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500`}
                />
                {errors.email && <p className="text-[10px] text-rose-500">{errors.email}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Hi Sahil, we have an entry-level .NET / Software Developer opening..."
                  className={`w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border ${
                    errors.message ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none`}
                />
                {errors.message && <p className="text-[10px] text-rose-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 shadow-md shadow-teal-600/20 active:scale-95 transition-all disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
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
};
