'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';
import { useScrollTrigger } from '@/lib/hooks/useScrollTrigger';
import { AnchorWord } from '@/components/typography/AnchorWord';

interface KineticHeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  anchorWords?: string[];
  className?: string;
}

/**
 * KineticHeading — animates a heading word-by-word as it enters the viewport.
 * Opt-in component for sections where typography IS the visual.
 * Uses useScrollTrigger (threshold 0.3) for the reveal trigger.
 * Respects prefers-reduced-motion via CSS.
 */
export function KineticHeading({
  children,
  as: Tag = 'h2',
  anchorWords = [],
  className,
}: KineticHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isVisible = useScrollTrigger(ref, 0.3, true);

  const rendered = typeof children === 'string'
    ? (() => {
      const words = children.split(/(\s+)/);
      let wordIdx = 0;

      return words.map((token, i) => {
        if (/^\s+$/.test(token)) {
          return token;
        }

        const braceMatch = token.match(/^\{\{(.+?)\}\}([.,!?;:]?)$/);
        const isBraceAnchor = !!braceMatch;
        const displayToken = isBraceAnchor ? `${braceMatch[1]}${braceMatch[2]}` : token;

        const currentIdx = wordIdx++;
        const isPropAnchor = anchorWords.some(
          (w) => w.toLowerCase() === displayToken.toLowerCase()
        );
        const isAnchor = isBraceAnchor || isPropAnchor;

        return (
          <span
            key={i}
            className="kinetic-word"
            style={{ '--word-index': currentIdx } as React.CSSProperties}
          >
            {isAnchor ? <AnchorWord>{displayToken}</AnchorWord> : displayToken}
          </span>
        );
      });
    })()
    : children;

  const classes = [
    'kinetic-heading',
    isVisible ? 'kinetic-heading--revealed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={classes}>
      {rendered}
    </Tag>
  );
}

export default KineticHeading;
