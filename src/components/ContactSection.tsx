import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Copy, Check, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity',
    message: '',
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger user's mail client with prefilled fields
    const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${formData.subject}] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Syed,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    )}`;

    window.location.href = mailtoUrl;
    setSentSuccess(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-teal-400">
              05. Direct Collaboration
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-2 tracking-tight">
              Get in Touch
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Open for software engineering internships, machine learning research collaborations, and prompt architecture consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#0B101D] border border-slate-800 hover:border-slate-700/80 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Telephone</div>
                  <a
                    href={`tel:${PERSONAL_INFO.contact.phone}`}
                    className="text-sm font-semibold text-white hover:text-teal-400 font-mono"
                  >
                    {PERSONAL_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.contact.phone, 'phone')}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Copy phone number"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-4 h-4 text-teal-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#0B101D] border border-slate-800 hover:border-slate-700/80 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.contact.email}`}
                    className="text-sm font-semibold text-white hover:text-teal-400 font-mono"
                  >
                    {PERSONAL_INFO.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.contact.email, 'email')}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Copy email address"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-teal-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-[#0B101D] border border-slate-800 hover:border-slate-700/80 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Professional Network</div>
                  <a
                    href={PERSONAL_INFO.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-teal-400 font-mono"
                  >
                    {PERSONAL_INFO.contact.linkedinDisplay}
                  </a>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-[#0B101D] border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Base Location</div>
                <div className="text-sm font-semibold text-white">
                  {PERSONAL_INFO.contact.location}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  SNS College of Technology Campus · Tamil Nadu
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B101D] border border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-teal-400" />
                <h3 className="text-lg font-bold text-white font-display">
                  Send a Direct Message
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to generate a preformatted email to Syed Mohamed Muffasil.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700/80 rounded-xl text-white focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700/80 rounded-xl text-white focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Subject / Discussion Area
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700/80 rounded-xl text-white focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="Internship Opportunity">Software Engineering / ML Internship</option>
                    <option value="AutoML Collaboration">AutoML Platform Project / Testing</option>
                    <option value="Prompt Engineering & Vibe Coding">Prompt Engineering & Vibe Coding</option>
                    <option value="Business Canva Model Mentoring">Business Canva Model / Tutorial Inquiry</option>
                    <option value="General Discussion">General Greeting / Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Syed, I saw your AutoML and Vibe Coding work and would love to connect regarding..."
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700/80 rounded-xl text-white focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>Direct recipient: sidmuffasil@gmail.com</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow-md active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-teal-950/40 border border-teal-500/40 text-xs text-teal-300">
                    Mail application opened! Alternatively, you can copy the email directly from above.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
