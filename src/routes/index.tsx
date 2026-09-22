import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PortalFlow — A simpler way to manage your work" },
      {
        name: "description",
        content:
          "PortalFlow turns scattered tasks, docs, and handoffs into one calm, connected workspace your whole team actually enjoys using.",
      },
      { property: "og:title", content: "PortalFlow — A simpler way to manage your work" },
      {
        property: "og:description",
        content:
          "PortalFlow turns scattered tasks, docs, and handoffs into one calm, connected workspace your whole team actually enjoys using.",
      },
      { name: "twitter:title", content: "PortalFlow — A simpler way to manage your work" },
      {
        name: "twitter:description",
        content:
          "PortalFlow turns scattered tasks, docs, and handoffs into one calm, connected workspace your whole team actually enjoys using.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20">
      <Header />

      <main>
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2" aria-label="PortalFlow home">
          <span className="grid size-7 place-items-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
            P
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">PortalFlow</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#" className="transition-colors duration-200 hover:text-foreground">Product</a>
          <a href="#" className="transition-colors duration-200 hover:text-foreground">Features</a>
          <a href="#" className="transition-colors duration-200 hover:text-foreground">Pricing</a>
          <a href="#" className="transition-colors duration-200 hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
        >
          Get started
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* decorative drifting orbs */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl"
        style={{ animation: "drift 14s cubic-bezier(0.32,0.72,0,1) infinite" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-40 h-[380px] w-[380px] rounded-full bg-secondary/20 blur-3xl"
        style={{ animation: "drift2 18s cubic-bezier(0.32,0.72,0,1) infinite" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[360px] -translate-x-1/2 bg-background/40 backdrop-blur-2xl ring-1 ring-border"
        style={{ transform: "rotate(18deg)", animation: "drift 20s cubic-bezier(0.32,0.72,0,1) infinite" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
        <span
          className="inline-block rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
          style={{ animation: "rise 0.5s cubic-bezier(0.32,0.72,0,1) both" }}
        >
          Now in public beta
        </span>
        <h1
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl"
          style={{ animation: "rise 0.6s cubic-bezier(0.32,0.72,0,1) 0.1s both" }}
        >
          A simpler way to manage your work
        </h1>
        <p
          className="mx-auto mt-6 max-w-[46ch] text-lg text-pretty text-muted-foreground"
          style={{ animation: "rise 0.6s cubic-bezier(0.32,0.72,0,1) 0.2s both" }}
        >
          PortalFlow turns scattered tasks, docs, and handoffs into one calm, connected workspace your whole team actually enjoys using.
        </p>
        <div
          className="mt-9"
          style={{ animation: "rise 0.6s cubic-bezier(0.32,0.72,0,1) 0.3s both" }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition-transform duration-200 hover:-translate-y-0.5"
          >
            Get started
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    num: "01",
    title: "Unified workspace",
    desc: "Tasks, docs, and conversations live side by side, so context never gets lost between tools.",
    delay: "0.15s",
  },
  {
    num: "02",
    title: "Smart automations",
    desc: "Route work, assign owners, and update status automatically the moment anything changes.",
    delay: "0.25s",
  },
  {
    num: "03",
    title: "Realtime clarity",
    desc: "Live dashboards show exactly what's shipping, what's blocked, and what needs you next.",
    delay: "0.35s",
  },
] as const;

function Features() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          Why teams switch
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Everything in one place, nothing in the way
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.num}
            className="rounded-2xl border border-border bg-background/60 p-7 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
            style={{ animation: `rise 0.6s cubic-bezier(0.32,0.72,0,1) ${f.delay} both` }}
          >
            <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
              {f.num}
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-md bg-primary font-display text-xs font-bold text-primary-foreground">
            P
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">PortalFlow</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-colors duration-200 hover:text-foreground">Product</a>
          <a href="#" className="transition-colors duration-200 hover:text-foreground">Pricing</a>
          <a href="#" className="transition-colors duration-200 hover:text-foreground">Privacy</a>
        </nav>
        <p className="text-xs text-muted-foreground">&copy; 2026 PortalFlow</p>
      </div>
    </footer>
  );
}
