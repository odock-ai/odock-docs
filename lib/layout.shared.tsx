import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 font-semibold">
          <span className="relative h-6 w-6 shrink-0">
            <Image
              src="/logo-light.svg"
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              className="absolute inset-0 h-full w-full object-contain dark:hidden"
            />
            <Image
              src="/logo-dark.svg"
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              className="absolute inset-0 hidden h-full w-full object-contain dark:block"
            />
          </span>
          <span>{appName}</span>
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
