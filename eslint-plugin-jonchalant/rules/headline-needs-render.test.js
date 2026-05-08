'use strict';

const { RuleTester } = require('eslint');
const rule = require('./headline-needs-render');

const ruleTester = new RuleTester({
  languageOptions: {
    parser: require('@typescript-eslint/parser'),
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
});

ruleTester.run('headline-needs-render', rule, {
  valid: [
    // Wrapped in renderHeadline — direct
    {
      code: `const x = {}; const renderHeadline = () => {}; const el = <h2>{renderHeadline(x.headline)}</h2>;`,
    },
    // Passed as headline prop to allowlisted Hero
    {
      code: `const x = {}; const el = <Hero headline={x.headline} />;`,
    },
    // Passed as children to allowlisted KineticHeading
    {
      code: `const x = {}; const el = <KineticHeading>{x.headline}</KineticHeading>;`,
    },
    // Passed as title prop to allowlisted SectionHeader
    {
      code: `const x = {}; const el = <SectionHeader title={x.headline} />;`,
    },
    // Wrapped in renderHeadline with optional chaining and nullish coalescing
    {
      code: `const x = {}; const fallback = ''; const renderHeadline = () => {}; const el = <h2>{renderHeadline(x?.hero?.headline ?? fallback)}</h2>;`,
    },
    // Boolean guard — {x.headline && <jsx>} — not rendered as text
    {
      code: `const x = {}; const el = <div>{x.headline && <span>show</span>}</div>;`,
    },
    // Optional chain boolean guard — {x?.headline && <jsx>}
    {
      code: `const x = {}; const el = <div>{x?.headline && <span>show</span>}</div>;`,
    },
    // Ternary guard — {x.headline ? 'yes' : 'no'}
    {
      code: `const x = {}; const el = <div>{x.headline ? 'yes' : 'no'}</div>;`,
    },
    // Non-JSX context — not flagged
    {
      code: `const x = {}; const str = x.headline;`,
    },
    // Passed as headline prop to GenericHero (safe consumer)
    {
      code: `const copy = {}; const el = <GenericHero headline={copy.headline} />;`,
    },
    // Inside JSON.stringify — schema data, not rendered text
    {
      code: `const x = {}; const el = <Script dangerouslySetInnerHTML={{ __html: JSON.stringify({ name: x.headline }) }} />;`,
    },
    // heading prop to allowlisted Testimonials
    {
      code: `const x = {}; const el = <Testimonials heading={x.headline} />;`,
    },
    // heading prop to allowlisted BlogCards
    {
      code: `const x = {}; const el = <BlogCards heading={x.headline} />;`,
    },
  ],

  invalid: [
    // Direct render without wrapper
    {
      code: `const x = {}; const el = <h2>{x.headline}</h2>;`,
      errors: [{ messageId: 'needsRender' }],
    },
    // Deeply nested path, no wrapper
    {
      code: `const page = {}; const el = <h1 className="foo">{page.section.headline}</h1>;`,
      errors: [{ messageId: 'needsRender' }],
    },
    // As a non-safe JSX attribute value
    {
      code: `const x = {}; const el = <div title={x.headline}>content</div>;`,
      errors: [{ messageId: 'needsRender' }],
    },
    // In a button, no wrapper
    {
      code: `const x = {}; const el = <button>{x.headline}</button>;`,
      errors: [{ messageId: 'needsRender' }],
    },
    // Passed to non-allowlisted component
    {
      code: `const x = {}; const el = <UnknownComponent heading={x.headline} />;`,
      errors: [{ messageId: 'needsRender' }],
    },
  ],
});

console.log('All headline-needs-render rule tests passed.');
