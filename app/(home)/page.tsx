import {
  Activity,
  ArrowRight,
  Bot,
  Gauge,
  KeyRound,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';

const cards: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Start with the platform',
    description: 'Understand how Odock governs LLM and MCP traffic across the gateway, UI, and observability stack.',
    href: '/docs/introduction/what-is-odock',
    icon: Rocket,
  },
  {
    title: 'Run it locally',
    description: 'Bring up Odock with Docker Compose and get the core services ready for development.',
    href: '/docs/installation/docker-quickstart',
    icon: Gauge,
  },
  {
    title: 'Use the LLM gateway',
    description: 'Send OpenAI-compatible, Anthropic, Gemini, vLLM, and unified chat requests through one governed endpoint.',
    href: '/docs/gateway/llm-api',
    icon: Bot,
  },
  {
    title: 'Control access',
    description: 'Configure API keys, providers, models, MCP servers, teams, and policy boundaries from the control plane.',
    href: '/docs/governance/api-keys-and-access',
    icon: KeyRound,
  },
  {
    title: 'Set budgets and quotas',
    description: 'Reserve, settle, and enforce spend or usage limits across organisations, teams, users, and API keys.',
    href: '/docs/governance/budgets-quotas-usage',
    icon: ShieldCheck,
  },
  {
    title: 'Operate with visibility',
    description: 'Track logs, metrics, traces, alerts, dashboards, request identity, usage, latency, and cost.',
    href: '/docs/observability/operating-the-stack',
    icon: Activity,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium text-fd-muted-foreground">Odock Documentation</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Build governed AI products faster.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-fd-muted-foreground sm:text-lg">
              Odock sits between your applications and model or MCP providers, giving teams one
              place to manage access, safety, budgets, routing, usage, and observability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/docs"
                className="inline-flex h-10 items-center justify-center rounded-md bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
              >
                Open docs
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/docs/installation/docker-quickstart"
                className="inline-flex h-10 items-center justify-center rounded-md border bg-fd-background px-5 text-sm font-medium transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
              >
                Docker quickstart
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
                The most useful starting points for evaluating, integrating, and operating Odock.
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
