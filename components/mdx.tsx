import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom, type ImageZoomProps } from 'fumadocs-ui/components/image-zoom';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Mermaid } from '@/components/mdx/mermaid';
import { cn } from '@/lib/cn';
import type { ComponentProps, ComponentType } from 'react';
import type { MDXComponents } from 'mdx/types';

function withTrailingSlash(href: string) {
  const match = href.match(/^([^?#]*)([?#].*)?$/);
  if (!match) return href;

  const pathname = match[1];
  const suffix = match[2] ?? '';

  if (!pathname || pathname === '/') return href;

  const normalizedPathname = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return `${normalizedPathname}${suffix}`;
}

function ZoomableImage(props: ComponentProps<'img'>) {
  return (
    <ImageZoom
      {...(props as ImageZoomProps)}
      className={cn('rounded-lg', props.className)}
    />
  );
}

export function getMDXComponents(components?: MDXComponents) {
  const RelativeLink = components?.a as ComponentType<ComponentProps<'a'>> | undefined;
  const normalizedComponents =
    RelativeLink && components
      ? {
          ...components,
          a: (props: ComponentProps<'a'>) => {
            const href = typeof props.href === 'string' ? props.href : '';
            const normalizedHref =
              href.startsWith('/') && !href.startsWith('//') ? withTrailingSlash(href) : href;

            return <RelativeLink {...props} href={normalizedHref} />;
          },
        }
      : components;

  return {
    ...defaultMdxComponents,
    img: ZoomableImage,
    Mermaid,
    Step,
    Steps,
    ...(normalizedComponents ?? {}),
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
