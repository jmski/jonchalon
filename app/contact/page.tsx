'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import ScrollFade from "@/components/ScrollFade";

const contactData = {
  headline: 'Get in Touch',
  subheadline: 'Have a collaboration idea or just want to chat? I\'d love to hear from you.',
  formTitle: 'Send me a Message',
  contactOptions: [
    { icon: '✉️', title: 'Email', value: 'contact@jonchalon.com' },
    { icon: '📱', title: 'Instagram', value: '@jonchalon' },
    { icon: '🎬', title: 'TikTok', value: '@jonchalon' }
  ],
  directEmailText: 'Or email me directly at',
  directEmail: 'contact@jonchalon.com'
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="py-20 sm:py-28">
          <ScrollFade>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 font-display">
              {contactData.headline}
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              {contactData.subheadline}
            </p>
          </ScrollFade>
        </div>

        {/* Contact Options */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactData.contactOptions.map((option, idx) => (
              <ScrollFade key={idx} delay={idx * 100}>
                <div className="p-8 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-center">
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {option.value}
                  </p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-20">
          <ScrollFade>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-display">
              {contactData.formTitle}
            </h2>
          </ScrollFade>

          {submitted ? (
            <ScrollFade>
              <div className="p-12 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg text-center">
                <p className="text-3xl mb-4">✨</p>
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                  Message Sent!
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            </ScrollFade>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-700"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-700"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-700"
                  placeholder="Tell me about your idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-900 dark:bg-amber-800 hover:bg-amber-950 dark:hover:bg-amber-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </section>

        {/* Response Time */}
        <ScrollFade>
          <div className="p-12 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Quick Response
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              I typically respond to messages within 24 hours.
            </p>
          </div>
        </ScrollFade>
      </main>
    </div>
  );
}
