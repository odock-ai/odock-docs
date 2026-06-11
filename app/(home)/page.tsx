import {
  Activity,
  ArrowRight,
  Blocks,
  Bot,
  Compass,
  Route,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const title = 'Odock Documentation';
const description =
  'Learn how to use Odock as an AI governance gateway for LLM and MCP traffic, from first setup to routing, security, observability, and self-hosting.';

export function generateMetadata(): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title,
      description,
      url: '/',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

const cards: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Understand Odock',
    description: 'Learn where the AI governance gateway fits between applications, agents, providers, and MCP servers.',
    href: '/docs/getting-started',
    icon: Compass,
  },
  {
    title: 'Make a first call',
    description: 'Configure Odock and send an OpenAI-compatible gateway request with a virtual API key.',
    href: '/docs/getting-started/setup',
    icon: Rocket,
  },
  {
    title: 'Use the gateway',
    description: 'Call native provider-compatible endpoints or the unified Odock endpoint for multi-provider routing.',
    href: '/docs/usage',
    icon: Route,
  },
  {
    title: 'Configure Models & MCP',
    description: 'Manage providers, provider keys, models, endpoints, MCP servers, grants, pricing, and usage records.',
    href: '/docs/models-and-mcp',
    icon: Bot,
  },
  {
    title: 'Manage runtime controls',
    description: 'Set virtual API keys, routing policies, budgets, quotas, reservations, and usage boundaries.',
    href: '/docs/management',
    icon: Settings2,
  },
  {
    title: 'Apply security guardrails',
    description: 'Layer RBAC, access grants, policies, SafetySec checks, plugin hooks, budgets, quotas, and telemetry.',
    href: '/docs/security-and-guardrails',
    icon: ShieldCheck,
  },
  {
    title: 'Extend with plugins',
    description: 'Add request and response processing through lifecycle phases, marketplace plugins, or custom plugins.',
    href: '/docs/plugins',
    icon: Blocks,
  },
  {
    title: 'Observe production traffic',
    description: 'Track usage monitoring, logs, traces, metrics, dashboards, alerts, and OpenTelemetry integration.',
    href: '/docs/observability',
    icon: Activity,
  },
  {
    title: 'Self-host Odock',
    description: 'Run Postgres, Redis, Traefik, server, UI, migrations, and the optional observability stack with Docker Compose.',
    href: '/docs/self-host',
    icon: Server,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b px-6 py-16 sm:py-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 grid-pattern-large opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-fd-background via-transparent to-fd-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-fd-background/80 via-transparent to-fd-background/80" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-fd-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-fd-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex w-fit max-w-full items-center gap-2 border border-fd-border bg-fd-card px-3 py-1.5 sm:mb-6">
              <span className="h-1.5 w-1.5 bg-fd-primary" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-fd-muted-foreground sm:text-[10px]">
                Odock Documentation
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Govern LLM and MCP traffic from one gateway.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-fd-muted-foreground sm:text-lg">
              Odock sits between applications, agents, developer tools, AI providers, and MCP
              servers so every model call and tool call can be authenticated, routed, checked,
              recorded, and monitored.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/docs/getting-started/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
              >
                What is Odock?
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/docs/getting-started/quick-start/"
                className="inline-flex h-10 items-center justify-center rounded-md border bg-fd-background px-5 text-sm font-medium transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
              >
                Quick start
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Choose your path</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-fd-muted-foreground">
                Start with the core concepts, then move into usage, management, security,
                plugins, observability, or self-hosting.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-lg border bg-fd-card p-5 transition-colors hover:bg-fd-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
                >
                  <div className="mb-5 flex size-10 items-center justify-center rounded-md border bg-fd-background text-fd-muted-foreground transition-colors group-hover:text-fd-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold">{card.title}</h3>
                  <p className="mt-2 min-h-18 text-sm leading-6 text-fd-muted-foreground">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex items-center text-sm font-medium">
                    Read more
                    <ArrowRight
                      className="ml-2 size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
