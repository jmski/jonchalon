'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r text-transparent bg-clip-text mb-4" style={{fontFamily: 'var(--font-press-start)', backgroundImage: 'linear-gradient(to right, #5FDBFD, #80EED3)'}}>
            Let's Connect
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-semibold max-w-2xl" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="pokemon-card p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.875rem'}}>Email</h3>
            <p className="text-slate-600 dark:text-slate-300 font-semibold" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
              contact@jonchalon.dev
            </p>
          </div>

          <div className="pokemon-card p-6 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.875rem'}}>Phone</h3>
            <p className="text-slate-600 dark:text-slate-300 font-semibold" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
              (555) 123-4567
            </p>
          </div>

          <div className="pokemon-card p-6 text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.875rem'}}>Social</h3>
            <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300 font-semibold" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
              <p>Twitter / X</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="pokemon-card p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8" style={{fontFamily: 'var(--font-press-start)', fontSize: '1.125rem'}}>
            Send a Message
          </h2>

          {submitted ? (
            <div className="bg-gradient-to-r from-cyan-100 to-mint-100 dark:from-cyan-900/30 dark:to-mint-900/30 border border-cyan-200 dark:border-cyan-700 p-8 rounded-xl text-center animate-fadeIn">
              <p className="text-3xl mb-3 animate-pulse">✨</p>
              <p className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text mb-2" style={{backgroundImage: 'linear-gradient(to right, #5FDBFD, #80EED3)'}}>
                Message Sent!
              </p>
              <p className="text-slate-600 dark:text-slate-300 font-semibold" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
              {/* Name Field */}
              <div>
                <label className="block font-semibold text-slate-900 dark:text-white mb-3" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.875rem'}}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 rounded-lg text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-cyan-300 focus:scale-[1.02]"
                  placeholder="Your name"
                  style={{fontFamily: 'var(--font-airbnb-cereal)'}}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-semibold text-slate-900 dark:text-white mb-3" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.875rem'}}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 rounded-lg text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-cyan-300 focus:scale-[1.02]"
                  placeholder="your@email.com"
                  style={{fontFamily: 'var(--font-airbnb-cereal)'}}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block font-semibold text-slate-900 dark:text-white mb-3" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.875rem'}}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 rounded-lg text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-cyan-300 focus:scale-[1.02]"
                  placeholder="What's this about?"
                  style={{fontFamily: 'var(--font-airbnb-cereal)'}}
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block font-semibold text-slate-900 dark:text-white mb-3" style={{fontFamily: 'var(--font-press-start)', fontSize: '0.875rem'}}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 rounded-lg text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-cyan-300 focus:scale-[1.02] resize-none"
                  placeholder="Your message here..."
                  style={{fontFamily: 'var(--font-airbnb-cereal)'}}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="pokemon-button w-full text-lg py-4"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          <div className="pokemon-card p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:from-blue-500/15 hover:to-cyan-500/15 transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
              ⚡ Quick Response
            </h3>
            <p className="text-slate-600 dark:text-slate-300 font-semibold leading-relaxed transition-colors duration-300" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
              I typically respond to messages within 24 hours. Let's discuss how I can help with your next project.
            </p>
          </div>

          <div className="pokemon-card p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/15 hover:to-pink-500/15 transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
              🚀 Available For
            </h3>
            <p className="text-slate-600 dark:text-slate-300 font-semibold leading-relaxed transition-colors duration-300" style={{fontFamily: 'var(--font-airbnb-cereal)'}}>
              Freelance projects • Web development • Consulting • Open source contributions
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
