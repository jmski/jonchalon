// TODO future enhancements (post-launch):
// - Add auto-fixer to wrap violations in renderHeadline() automatically.
// - Detect bare `headline` identifier from destructured props (e.g., `const { headline } = props`).
//   Currently skipped due to false-positive risk on unrelated `headline` variables.
// - Consider migrating from allowlist (B-i) to ReactNode-only contract (B-ii):
//   refactor allowlisted components to accept ReactNode instead of string, eliminating
//   the need for the allowlist entirely. ~12 components, ~30-50 call sites.

'use strict';

// Components that call renderHeadline() internally, so passing a raw .headline
// string to one of them is safe.
//
// Pruned 2026-08-19 when the coaching business was retired. Removed:
// StarterGuideForm, EmailCapture, FourPillars, MeetJon, Method, WhoFor,
// StoryScroll, CurriculumBento, Testimonials, BlogCards — all deleted.
const DEFAULT_SAFE_CONSUMERS = [
  'Hero',
  'GenericHero',
  'PageHero',
  'CTA',
  'SectionHeader',
  'KineticHeading',
];

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Require renderHeadline() for .headline interpolations in JSX',
    },
    schema: [
      {
        type: 'object',
        properties: {
          safeConsumers: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      needsRender:
        'Headline field interpolated without `renderHeadline()`. Wrap with `renderHeadline(...)` or pass to an allowlisted component (see eslint config).',
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const safeConsumers = new Set(
      options.safeConsumers || DEFAULT_SAFE_CONSUMERS
    );

    // Walk up ancestor chain looking for the first node matching predicate.
    function findAncestor(node, predicate) {
      let current = node.parent;
      while (current) {
        if (predicate(current)) return current;
        current = current.parent;
      }
      return null;
    }

    // Is the node a .headline member access (including optional chaining)?
    function isHeadlineAccess(node) {
      if (!node) return false;
      if (
        node.type === 'MemberExpression' &&
        node.property &&
        node.property.type === 'Identifier' &&
        node.property.name === 'headline'
      ) {
        return true;
      }
      // @typescript-eslint/parser represents `x?.headline` as:
      //   ChainExpression > MemberExpression (with optional: true on the member or parent)
      // The MemberExpression visitor fires for both, so the check above covers it.
      return false;
    }

    // Is the node wrapped (directly or transitively) inside a renderHeadline() call?
    function isInsideRenderHeadlineCall(node) {
      return !!findAncestor(
        node,
        (ancestor) =>
          ancestor.type === 'CallExpression' &&
          ancestor.callee.type === 'Identifier' &&
          ancestor.callee.name === 'renderHeadline'
      );
    }

    // Is the node used as a prop value (or JSX child) on an allowlisted component?
    function isPropOnSafeConsumer(node) {
      // Walk up to find the nearest JSXAttribute or JSXExpressionContainer that
      // is a direct child of a JSXElement (i.e., a children expression container).
      const jsxContext = findAncestor(
        node,
        (ancestor) =>
          ancestor.type === 'JSXAttribute' ||
          (ancestor.type === 'JSXExpressionContainer' &&
            ancestor.parent &&
            (ancestor.parent.type === 'JSXElement' ||
              ancestor.parent.type === 'JSXFragment'))
      );
      if (!jsxContext) return false;

      let jsxElement;
      if (jsxContext.type === 'JSXAttribute') {
        // JSXAttribute -> JSXOpeningElement -> JSXElement
        jsxElement =
          jsxContext.parent &&
          jsxContext.parent.parent;
      } else {
        // JSXExpressionContainer whose parent is JSXElement
        jsxElement = jsxContext.parent;
      }

      if (!jsxElement || jsxElement.type !== 'JSXElement') return false;

      const opening = jsxElement.openingElement;
      if (!opening || !opening.name) return false;

      const componentName =
        opening.name.type === 'JSXIdentifier' ? opening.name.name : null;

      return componentName != null && safeConsumers.has(componentName);
    }

    // Is the node inside a JSON.stringify() call? Used for JSON-LD schema data —
    // the value will be serialized, not rendered as visible DOM text.
    function isInsideJsonStringify(node) {
      return !!findAncestor(
        node,
        (ancestor) =>
          ancestor.type === 'CallExpression' &&
          ancestor.callee.type === 'MemberExpression' &&
          ancestor.callee.object.type === 'Identifier' &&
          ancestor.callee.object.name === 'JSON' &&
          ancestor.callee.property.name === 'stringify'
      );
    }

    return {
      MemberExpression(node) {
        if (!isHeadlineAccess(node)) return;

        // Only flag when the access is inside JSX.
        const inJsx = findAncestor(
          node,
          (a) =>
            a.type === 'JSXExpressionContainer' || a.type === 'JSXAttribute'
        );
        if (!inJsx) return;

        // Skip boolean guards: {x.headline && (<jsx>)} or {x?.headline && (<jsx>)}
        // The member expression is used as a truthy/existency check, not as rendered text.
        // Handle both plain MemberExpression and optional chaining (ChainExpression wrapper).
        const parent = node.parent;
        const effectiveParent =
          parent.type === 'ChainExpression' ? parent.parent : parent;
        const isLeftOfLogical =
          effectiveParent.type === 'LogicalExpression' &&
          (effectiveParent.left === node || effectiveParent.left === parent);
        if (isLeftOfLogical) return;

        // Skip ternary guards: {x.headline ? <a> : <b>}
        const isTestOfTernary =
          effectiveParent.type === 'ConditionalExpression' &&
          (effectiveParent.test === node || effectiveParent.test === parent);
        if (isTestOfTernary) return;

        // Skip JSON-LD schema data (inside JSON.stringify — serialized, not rendered text).
        if (isInsideJsonStringify(node)) return;

        if (isInsideRenderHeadlineCall(node)) return;
        if (isPropOnSafeConsumer(node)) return;

        context.report({ node, messageId: 'needsRender' });
      },
    };
  },
};
