/_ ========== REFACTORED GLOBALS.CSS - CODE CONSOLIDATION ========== _/
/_ This file documents what to consolidate and remove _/

/_ CONSOLIDATION PLAN _/

/_ 1. REMOVE UNUSED CLASSES _/
/_ ❌ Remove .btn-primary-base - replace with .btn-primary _/
/_ ❌ Remove .btn-secondary-base - replace with .btn-secondary _/
/_ ❌ Remove .bg-card - use .card instead _/
/_ ❌ Remove --input-light-_ variables - no longer used \*/

/_ 2. CONSOLIDATE CARD CLASSES _/
/_ Current state: .card, .card-enhanced, .bg-card doing similar things _/
/_ Refactored approach: _/
/\*
.card {
background: var(--bg-secondary);
border: 1px solid var(--border-color);
border-radius: 8px;
box-shadow: var(--shadow-sm);
transition: all 0.3s ease;
}

.card:hover {
border-color: var(--accent-primary);
box-shadow: var(--shadow-md);
transform: translateY(-4px);
}

.card--enhanced {
position: relative;
box-shadow: var(--shadow-md);
overflow: hidden;
}

.card--enhanced::before {
content: "";
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
border-radius: inherit;
padding: 2px;
background: linear-gradient(135deg, rgba(212, 165, 116, 0.5), rgba(255, 107, 53, 0.3));
-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
-webkit-mask-composite: xor;
mask-composite: exclude;
pointer-events: none;
opacity: 0;
transition: opacity 0.3s ease;
}

.card--enhanced:hover::before {
opacity: 1;
}

.card--enhanced:hover {
border-color: var(--accent-primary);
transform: translateY(-8px);
box-shadow:
0 20px 40px rgba(0, 0, 0, 0.5),
0 0 30px rgba(212, 165, 116, 0.2);
}
\*/

/_ 3. CREATE UTILITY TEXT COLOR CLASSES _/
/_ Current: Colors applied inline as style={{ color: 'var(--text-...' }} _/
/_ Refactored: Use classes instead _/
/\*
.text-heading {
color: var(--text-heading);
}

.text-body {
color: var(--text-body);
}

.text-secondary {
color: var(--text-secondary);
}

.text-muted {
color: var(--text-muted);
}

.text-accent {
color: var(--text-accent);
}

.text-accent-bright {
color: var(--text-accent-bright);
}

.text-accent-secondary {
color: var(--text-accent-secondary);
}

.text-light {
color: var(--text-light);
}
\*/

/_ 4. CREATE UTILITY BACKGROUND CLASSES _/
/_ Current: Some bg-_ classes exist but not all are used _/
/_ Refactored: Complete set of background utilities _/
/_
.bg-primary {
background-color: var(--bg-primary);
}

.bg-secondary {
background-color: var(--bg-secondary);
}

.bg-tertiary {
background-color: var(--bg-tertiary);
}

.bg-muted {
background-color: var(--bg-muted);
}

.bg-hover {
background-color: var(--bg-hover);
}
\*/

/_ 5. CREATE SHADOW UTILITY CLASSES _/
/_ Current: Shadows defined but using inline box-shadow _/
/_ Refactored: Proper utility classes _/
/\*
.shadow-sm {
box-shadow: var(--shadow-sm);
}

.shadow-md {
box-shadow: var(--shadow-md);
}

.shadow-lg {
box-shadow: var(--shadow-lg);
}

.shadow-accent {
box-shadow: var(--shadow-accent);
}

.shadow-accent-lg {
box-shadow: var(--shadow-accent-lg);
}

.shadow-hover {
transition: box-shadow 0.3s ease;
}

.shadow-hover:hover {
box-shadow: var(--shadow-lg);
}
\*/

/_ 6. CONSOLIDATE BUTTON CLASSES _/
/_ Current: .btn-primary-base, .btn-secondary-base, .btn-primary all doing similar things _/
/_ Refactored: Single unified system _/
/\*
.btn {
padding: 12px 24px;
border-radius: 6px;
font-weight: 600;
cursor: pointer;
transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
border: none;
text-decoration: none;
display: inline-block;
text-align: center;
}

.btn--primary {
background: var(--cta-gradient);
color: white;
position: relative;
overflow: hidden;
}

.btn--primary:hover {
transform: translateY(-2px);
box-shadow: 0 8px 24px rgba(212, 165, 116, 0.4);
}

.btn--secondary {
background: transparent;
border: 2px solid var(--border-accent);
color: var(--text-body);
transition: all 0.3s ease;
}

.btn--secondary:hover {
border-color: var(--accent-primary);
color: var(--text-accent-bright);
background-color: rgba(212, 165, 116, 0.1);
}

.btn--small {
padding: 8px 16px;
font-size: 0.875rem;
}

.btn--large {
padding: 16px 32px;
font-size: 1.125rem;
}
\*/

/_ 7. CREATE GRADIENT UTILITY CLASSES _/
/_ Current: Gradients defined as variables but also used inline _/
/_ Refactored: Utility classes for common gradient uses _/
/\*
.gradient-heading {
background: var(--gradient-heading);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

.gradient-cta {
background: var(--cta-gradient);
}

.gradient-accent {
background: var(--gradient-accent);
}

.gradient-text-heading {
background: linear-gradient(to right, #f5f1ed, #fde047);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}
\*/

/_ 8. CREATE SECTION CONTAINER CLASSES _/
/_ Current: Repeated pattern max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 everywhere _/
/_ Refactored: Reusable section classes _/
/\*
.section {
py-20;
}

.section-container {
max-width: 80rem;
margin-left: auto;
margin-right: auto;
padding-left: 1rem;
padding-right: 1rem;
}

@media (min-width: 640px) {
.section-container {
padding-left: 1.5rem;
padding-right: 1.5rem;
}
}

@media (min-width: 1024px) {
.section-container {
padding-left: 2rem;
padding-right: 2rem;
}
}

.section--primary {
background-color: var(--bg-primary);
}

.section--secondary {
background-color: var(--bg-secondary);
}
\*/

/_ 9. CREATE FORM ELEMENT CLASSES _/
/_ Current: Forms have inline styles scattered across components _/
/_ Refactored: Consolidated form styling _/
/\*
.form-group {
margin-bottom: 1.5rem;
}

.form-label {
display: block;
font-size: 0.875rem;
font-weight: 500;
margin-bottom: 0.5rem;
color: var(--text-heading);
}

.form-input,
.form-textarea,
.form-select {
width: 100%;
padding: 0.75rem 1rem;
border: 1px solid var(--form-input-border);
background-color: var(--form-input-bg);
color: var(--form-input-text);
border-radius: 0.5rem;
transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
outline: none;
border-color: var(--form-input-focus-border);
box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
color: var(--form-input-placeholder);
}

.form-group--error .form-input,
.form-group--error .form-textarea {
border-color: var(--color-error);
background-color: rgba(255, 107, 53, 0.05);
}

.form-group--success .form-input,
.form-group--success .form-textarea {
border-color: var(--color-success);
background-color: rgba(16, 185, 129, 0.05);
}
\*/

/_ 10. ANIMATION UTILITIES _/
/_ Current: Many animations defined but not in utility classes _/
/_ Refactored: Reusable animation classes _/
/\*
.animate-fade-in {
animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
animation: slideInUp 0.6s ease-out;
}

.animate-slide-down {
animation: slideInDown 0.6s ease-out;
}

.animate-slide-left {
animation: slideInFromLeft 0.6s ease-out;
}

.animate-slide-right {
animation: slideInFromRight 0.6s ease-out;
}

.animate-float {
animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
animation: floatDelayed 10s ease-in-out infinite;
}

.animate-spin-slow {
animation: spin 20s linear infinite;
}
\*/

/_ MIGRATION CHECKLIST _/
/_
✅ Remove .btn-primary-base, .btn-secondary-base
✅ Remove .bg-card utility (use .card)
✅ Remove --input-light-_ variables
✅ Add complete text color utilities
✅ Add shadow utility classes
✅ Consolidate button system to .btn, .btn--primary, .btn--secondary
✅ Add gradient utility classes
✅ Add .section and .section-container helpers
✅ Add complete form styling classes
✅ Audit components for inline style usage and convert to classes
✅ Test all pages for visual consistency
✅ Update component documentation
\*/

/_ FILES TO UPDATE (in order) _/
/\*

1. Update app/globals.css (consolidate classes)
2. Update components/PortfolioCard.tsx (use card--enhanced class)
3. Update components/CollaborationForm.tsx (use form-\* classes)
4. Update app/contact/page.tsx (use form-\* classes)
5. Update app/media-kit/page.tsx (use utility classes)
6. Update all pages (use section, section-container classes)
7. Update all components (replace inline styles with classes where possible)
   \*/
