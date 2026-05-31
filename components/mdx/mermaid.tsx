'use client';

import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { useTheme } from 'next-themes';
import { useEffect, useId, useRef, useState } from 'react';

export function Mermaid({ chart }: { chart: string }) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const { default: mermaid } = await import('mermaid');

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          fontFamily: 'inherit',
          themeCSS: 'margin: 1.5rem auto 0;',
          theme: resolvedTheme === 'dark' ? 'dark' : 'default',
        });

        const diagramId = `mermaid-${id.replaceAll(':', '')}`;
        const { svg, bindFunctions } = await mermaid.render(diagramId, chart);

        if (cancelled || !containerRef.current) return;

        containerRef.current.innerHTML = svg;
        bindFunctions?.(containerRef.current);
        setHasError(false);
      } catch {
        setHasError(true);
      }
    }

    void render();

    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  if (hasError) {
    return (
      <CodeBlock title="Mermaid">
        <Pre>{chart}</Pre>
      </CodeBlock>
    );
  }

  return (
    <div
      ref={containerRef}
      className="my-6 overflow-x-auto rounded-lg border bg-fd-card p-4 [&_svg]:mx-auto [&_svg]:max-w-full"
    />
  );
}
