'use client';

import { useState, FormEvent } from 'react';

export default function CollaborationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    collaborationType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        collaborationType: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300">
          ✓ Thank you! Your inquiry has been received. I&apos;ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300">
          ✗ {errorMessage}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-700"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          required
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-700"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Company / Brand
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company name"
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-700"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Collaboration Type <span className="text-red-500">*</span>
        </label>
        <select
          name="collaborationType"
          value={formData.collaborationType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-700"
        >
          <option value="">Select a collaboration type...</option>
          <option value="Sponsored Content">Sponsored Content</option>
          <option value="Event Performance">Event Performance</option>
          <option value="Content Creation">Content Creation</option>
          <option value="Brand Partnership">Brand Partnership</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me about your collaboration idea..."
          required
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-700"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-amber-900 dark:bg-amber-800 hover:bg-amber-950 dark:hover:bg-amber-900 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}
