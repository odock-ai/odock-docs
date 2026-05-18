import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom, type ImageZoomProps } from 'fumadocs-ui/components/image-zoom';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Mermaid } from '@/components/mdx/mermaid';
import { cn } from '@/lib/cn';
import type { ComponentProps } from 'react';
import type { MDXComponents } from 'mdx/types';

function ZoomableImage(props: ComponentProps<'img'>) {
  return (
    <ImageZoom
      {...(props as ImageZoomProps)}
      className={cn('rounded-lg', props.className)}
    />
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: ZoomableImage,
    Mermaid,
    Step,
    Steps,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
