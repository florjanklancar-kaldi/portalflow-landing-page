import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X, Star, ArrowRight, Facebook, Linkedin, Instagram } from "lucide-react";

import logoHand from "@/assets/vt/logo-hand.png";
import heroSelfie from "@/assets/vt/hero-selfie.svg";
import iconUk from "@/assets/vt/icon-uk.svg";
import iconNofees from "@/assets/vt/icon-nofees.svg";
import iconPortal from "@/assets/vt/icon-portal.svg";
import iconBills from "@/assets/vt/icon-bills.svg";
import cannon from "@/assets/vt/cannon.svg";
import flower from "@/assets/vt/flower.svg";
import magician from "@/assets/vt/magician.svg";
import skateboarding from "@/assets/vt/skateboarding.svg";
import whisper from "@/assets/vt/whisper.svg";
import yoga from "@/assets/vt/yoga.svg";
import trustpilotStars from "@/assets/vt/trustpilot-stars.webp";
import locMayfair from "@/assets/vt/loc-mayfair.webp";
import locBirmingham from "@/assets/vt/loc-birmingham.jpg";
import locManchester from "@/assets/vt/loc-manchester.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Virtually There | The UK's Leading Virtual Office You Can Trust" },
      {
        name: "description",
        content:
          "A professional UK business address from £15/month, set up in 5 minutes. Virtual offices, registered address, virtual landline and 24/7 call answering.",
      },
      {
        property: "og:title",
        content: "Virtually There | The UK's Leading Virtual Office You Can Trust",
      },
      {
        property: "og:description",
        content:
          "A professional UK business address from £15/month, set up in 5 minutes. Virtual offices, registered address, virtual landline and 24/7 call answering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Virtually There | The UK's Leading Virtual Office You Can Trust",
      },
      {
        name: "twitter:description",
        content:
          "A professional UK business address from £15/month, set up in 5 minutes. Virtual offices, registered address, virtual landline and 24/7 call answering.",
      },
    ],
  }),
  component: Index,
});

const SITE = "https://virtually-there.net";
const PORTAL = "https://portal.virtually-there.net/login/";
const PHONE_DISPLAY = "+44 (0) 203 476 7792";
const PHONE_TEL = "tel:+442034767792";

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />
      <TopStrip />
      <main>
        <Hero />
        <TrustpilotStrip />
        <Benefits />
        <WhatIs />
        <Locations />
        <Services />
        <Testimonials />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------------- header --------------------------------- */

const officeLinks = [
  { label: "London", href: `${SITE}/virtual-offices/london/` },
  { label: "Mayfair", href: `${SITE}/virtual-offices/london/mayfair/` },
  { label: "Manchester", href: `${SITE}/virtual-offices/manchester/` },
  { label: "Birmingham", href: `${SITE}/virtual-offices/birmingham/` },
  { label: "Leeds", href: `${SITE}/virtual-offices/leeds/` },
  { label: "Bristol", href: `${SITE}/virtual-offices/bristol/` },
  { label: "Edinburgh", href: `${SITE}/virtual-offices/edinburgh/` },
  { label: "View all locations", href: `${SITE}/virtual-offices/` },
];

const serviceLinks = [
  { label: "Registered Office Address", href: `${SITE}/registered-office-address/` },
  { label: "Virtual Landline", href: `${SITE}/virtual-landline/` },
  { label: "Call Answering", href: `${SITE}/call-answering-services/` },
  { label: "Virtual Receptionist", href: `${SITE}/virtual-receptionist/` },
  { label: "Virtual Switchboard", href: `${SITE}/virtual-switchboard/` },
  { label: "Virtual PA", href: `${SITE}/virtual-personal-assistant/` },
];

function Logo() {
  return (
    <a href={`${SITE}/`} className="flex items-center gap-2" aria-label="Virtually There home">
      <img src={logoHand} alt="" className="h-9 w-auto" />
      <span className="text-xl font-black tracking-tight text-foreground">
        VirtuallyThere<sup className="text-[0.55em] font-bold">&reg;</sup>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-[15px] font-bold lg:flex">
          <div className="group relative">
            <a
              href={`${SITE}/virtual-offices/`}
              className="flex items-center gap-1 py-2 transition-colors hover:text-foreground/70"
            >
              Virtual Office <ChevronDown className="size-4" aria-hidden="true" />
            </a>
            <div className="invisible absolute left-0 top-full w-56 rounded-xl border border-border bg-popover p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {officeLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-accent"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="group relative">
            <a
              href={`${SITE}/call-answering-services/`}
              className="flex items-center gap-1 py-2 transition-colors hover:text-foreground/70"
            >
              Virtual Services <ChevronDown className="size-4" aria-hidden="true" />
            </a>
            <div className="invisible absolute left-0 top-full w-60 rounded-xl border border-border bg-popover p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {serviceLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-accent"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <a href={PORTAL} className="transition-colors hover:text-foreground/70">
            Customer Portal
          </a>
          <a href={`${SITE}/pricing/`} className="transition-colors hover:text-foreground/70">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-5">
          <a href={PORTAL} className="hidden text-[15px] font-bold md:block">
            Log in
          </a>
          <a
            href={`${SITE}/virtual-offices/`}
            className="rounded-lg bg-primary px-5 py-2.5 text-[15px] font-extrabold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            Buy now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-foreground"
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="absolute inset-x-0 top-full border-b border-border bg-background shadow-lg">
          <nav className="mx-auto grid max-w-7xl gap-1 px-6 py-6 text-[15px] font-bold sm:grid-cols-2">
            <a href={`${SITE}/virtual-offices/`} className="rounded-lg px-3 py-2.5 hover:bg-accent">
              Virtual Office
            </a>
            <a
              href={`${SITE}/call-answering-services/`}
              className="rounded-lg px-3 py-2.5 hover:bg-accent"
            >
              Virtual Services
            </a>
            <a href={PORTAL} className="rounded-lg px-3 py-2.5 hover:bg-accent">
              Customer Portal
            </a>
            <a href={`${SITE}/pricing/`} className="rounded-lg px-3 py-2.5 hover:bg-accent">
              Pricing
            </a>
            <a href={`${SITE}/faqs/`} className="rounded-lg px-3 py-2.5 hover:bg-accent">
              FAQs
            </a>
            <a href={`${SITE}/contact-us/`} className="rounded-lg px-3 py-2.5 hover:bg-accent">
              Contact Us
            </a>
            <a href={PORTAL} className="rounded-lg px-3 py-2.5 hover:bg-accent md:hidden">
              Log in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function TopStrip() {
  return (
    <div className="bg-primary py-2.5 text-center text-sm text-primary-foreground">
      Prefer to chat, call us on{" "}
      <a href={PHONE_TEL} className="font-extrabold underline-offset-2 hover:underline">
        {PHONE_DISPLAY}
      </a>
    </div>
  );
}

/* ----------------------------------- hero ---------------------------------- */

function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl font-black leading-[1.08] tracking-tight md:text-6xl lg:text-[4.2rem]">
            The UK&rsquo;s leading virtual office you can trust
          </h1>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed">
            A professional UK business address from &pound;15/month, set up in 5 minutes. Add a
            registered address whenever you need it.
          </p>
          <div className="mt-8">
            <a
              href={`${SITE}/virtual-offices/`}
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3.5 text-base font-extrabold text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              View Our Locations
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroSelfie}
            alt="Illustration of a business woman taking a selfie in front of an office building"
            className="mx-auto w-full max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- trustpilot -------------------------------- */

const reviews = [
  {
    quote: "Great customer service, my call was answered immediately and the issue was solved.",
    name: "Michael",
  },
  {
    quote: "Maya was very helpful and explained what I needed to know clearly. Thank you!",
    name: "Clair",
  },
  { quote: "Professional, easy to use service.", name: "Roger Smith" },
];

function TrustpilotStrip() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <img src={trustpilotStars} alt="Trustpilot 5 star rating" className="h-7 w-auto" />
          <span className="text-sm font-black uppercase tracking-[0.15em]">Rated Excellent</span>
          <span className="text-sm text-muted-foreground">on Trustpilot</span>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-3 text-sm font-bold">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- benefits --------------------------------- */

const benefits = [
  {
    icon: iconUk,
    alt: "British flag icon",
    title: "Companies House compliant",
    desc: "Verified, HMRC and AML checked, so you can register with confidence",
  },
  {
    icon: iconNofees,
    alt: "Wallet icon",
    title: "No setup fees",
    desc: "We cover the costs, so you only pay your monthly plan",
  },
  {
    icon: iconPortal,
    alt: "Phone app icon",
    title: "Customer Portal",
    desc: "Manage your subscription with 24/7 access to our customer Portal",
  },
  {
    icon: iconBills,
    alt: "Cutting bills icon",
    title: "Cancel any time",
    desc: "We offer monthly rolling contracts to give you the flexibility to cancel any time",
  },
];

function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div key={b.title} className="text-center">
            <img src={b.icon} alt={b.alt} className="mx-auto h-14 w-auto" />
            <h3 className="mt-4 text-base font-extrabold uppercase tracking-wide">{b.title}</h3>
            <p className="mx-auto mt-2 max-w-[30ch] text-sm leading-relaxed text-muted-foreground">
              {b.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- what is --------------------------------- */

function WhatIs() {
  return (
    <section className="bg-muted">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            What is a Virtual Office?
          </h2>
          <p className="mt-5 leading-relaxed">
            A virtual office is a professional business address for your business, ideal for
            startups, freelancers and sole traders, without the cost or hassle of renting an
            office.
          </p>
          <p className="mt-4 leading-relaxed">
            We handle your mail and forward it whenever you need it, plus your calls too if you
            need them, so nothing gets missed. You can check everything anytime in your customer
            portal.
          </p>
          <p className="mt-4 leading-relaxed">
            It&rsquo;s reliable, affordable, and we&rsquo;ll have your business address set up in as
            little as 5 minutes through our simple online onboarding.
          </p>
        </div>
        <img
          src={cannon}
          alt="Cannon illustration"
          className="mx-auto w-full max-w-md"
        />
      </div>
    </section>
  );
}

/* --------------------------------- locations -------------------------------- */

const locations = [
  {
    img: locMayfair,
    alt: "Office location in London Mayfair",
    price: "£16",
    title: "Mayfair, London",
    lines: ["Albemarle Street", "Mayfair, London, W1S"],
    href: `${SITE}/virtual-offices/london/mayfair/`,
  },
  {
    img: locBirmingham,
    alt: "Birmingham virtual office - Izabella House",
    price: "£10",
    title: "Regent Place, City Centre, Birmingham",
    lines: ["Regent Place", "City Centre, Birmingham, B1"],
    href: `${SITE}/virtual-offices/birmingham/`,
  },
  {
    img: locManchester,
    alt: "Manchester virtual offices - Swan Buildings",
    price: "£10",
    title: "Swan Street, City Centre, Manchester",
    lines: ["Swan Street", "City Centre, Manchester, M4"],
    href: `${SITE}/virtual-offices/manchester/`,
  },
];

function Locations() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Most popular locations</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Choose a business address in any of our 13 UK cities, from London to Belfast.{" "}
          <a href={`${SITE}/virtual-offices/`} className="font-bold text-foreground underline">
            View all locations
          </a>
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {locations.map((l) => (
          <div
            key={l.title}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative">
              <img src={l.img} alt={l.alt} className="aspect-[16/9] w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3.5 py-1.5 text-sm font-extrabold text-primary-foreground">
                from {l.price} /month
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-extrabold">{l.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {l.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={l.href}
                className="mt-5 inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-extrabold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                Buy now
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        or call{" "}
        <a href={PHONE_TEL} className="font-bold text-foreground underline">
          {PHONE_DISPLAY}
        </a>
      </p>
    </section>
  );
}

/* --------------------------------- services --------------------------------- */

const services = [
  {
    title: "Virtual Offices",
    desc: "Get a business address that'll impress your customers. Choose from desirable virtual offices in London, Mayfair, Manchester, Birmingham, Leeds, Bristol, Edinburgh, Glasgow, Liverpool, Cardiff, Belfast, Newcastle upon Tyne, Bradford, and Huddersfield.",
    link: "View virtual offices",
    href: `${SITE}/virtual-offices/`,
    img: flower,
    alt: "Illustration of a woman holding a flower and a mobile phone",
  },
  {
    title: "Registered Office Address",
    desc: "Add a registered address to your virtual office, so you can register with Companies House and HMRC while keeping your home address private.",
    link: "Find out more",
    href: `${SITE}/registered-office-address/`,
    img: magician,
    alt: "Magician illustration",
  },
  {
    title: "Virtual Landline",
    desc: "Looking for a local phone number for your business? Our Virtual Landline service gives your business the professional number you need and diverts each call directly to your personal phone.",
    link: "Find out more",
    href: `${SITE}/virtual-landline/`,
    img: skateboarding,
    alt: "Illustration of a skateboarder with a mobile phone",
  },
  {
    title: "24/7 Call Answering",
    desc: "Never miss a business opportunity again. We support over 12,000 UK businesses with 24/7 call answering services. Get a quote today and enjoy a 14-day free trial.",
    link: "Get a quote",
    href: `${SITE}/call-answering-services/`,
    img: whisper,
    alt: "Call answering services illustration",
  },
];

function Services() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid items-center gap-10 py-10 lg:grid-cols-2 ${
              i > 0 ? "border-t border-border" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">{s.title}</h2>
              <p className="mt-4 max-w-[52ch] leading-relaxed">{s.desc}</p>
              <a
                href={s.href}
                className="mt-6 inline-flex items-center gap-2 font-extrabold underline decoration-primary decoration-4 underline-offset-4 transition-colors hover:text-foreground/70"
              >
                {s.link}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <img
              src={s.img}
              alt={s.alt}
              className={`mx-auto w-full max-w-sm ${i % 2 === 1 ? "lg:order-1" : ""}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- testimonials ------------------------------- */

const testimonials = [
  {
    quote:
      "We've worked with Virtually There for years. They're always very prompt and detailed with their messages.",
    name: "Nick Stopard",
    company: "Boardwalk Property Co.",
  },
  {
    quote:
      "The onboarding was fast and frictionless. Instructions were clear, the portal was easy to navigate, and the whole process felt very professional.",
    name: "Samantha Urch",
    company: "The Letting Game",
  },
  {
    quote: "Great communication, excellent service. Would highly recommend.",
    name: "Julia Eden",
    company: "Squaregrowth",
  },
];

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">
        Trusted by 20,000+ UK businesses since 2012
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <div className="text-5xl font-black leading-none text-primary" aria-hidden="true">
              &rdquo;
            </div>
            <blockquote className="mt-3 leading-relaxed">{t.quote}</blockquote>
            <figcaption className="mt-5">
              <span className="block font-extrabold">{t.name}</span>
              <span className="block text-sm text-muted-foreground">{t.company}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------ faq ----------------------------------- */

const faqs = [
  {
    q: "What is a virtual office?",
    a: "A virtual office gives your business a professional address, mail handling and optional call answering, without the cost of renting physical office space. It's a flexible, low-cost option for startups, remote teams and home-based businesses.",
  },
  {
    q: "Can I use my virtual office address to register my company with Companies House?",
    a: "Yes. Add our Registered Address service (from £8.50/month) and you can use the address with Companies House and HMRC, while keeping your home address private and meeting the legal 'appropriate address' requirement.",
  },
  {
    q: "Am I tied into a long contract?",
    a: "No. Our plans are monthly rolling contracts. Simply cancel from your customer portal and your subscription ends with your current monthly period.",
  },
  {
    q: "Are virtual offices available to all SMEs or just digital businesses?",
    a: "They're available to all types of companies. Any business that wants a professional address without renting physical office space can benefit.",
  },
  {
    q: "Can I buy a registered office address without a virtual office?",
    a: "Yes. Our Registered Office Address comes as a complete package with a trading address and free mail scanning included, from £17.00/month, so you can use it for Companies House, HMRC, your website and business materials.",
  },
  {
    q: "Can I use a virtual office address on Google My Business?",
    a: "Google doesn't allow virtual offices to be listed as physical locations customers can visit. Instead, set the areas you serve, which keeps you compliant while highlighting your local presence.",
  },
  {
    q: "Can I use the virtual office address on my website and marketing materials?",
    a: "Yes, you can use it on your website, invoices, business cards and marketing. Registering with Companies House requires the Registered Address add-on.",
  },
  {
    q: "How long does it take to set up my virtual address?",
    a: "Signing up takes about two minutes. Setup completes once our mandatory AML checks are done - you'll need a photo ID, proof of your home address, and a quick selfie with your ID.",
  },
];

function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">
          FAQs to help you choose
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={f.q} className="rounded-xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-extrabold"
                >
                  {f.q}
                  <ChevronDown
                    className={`size-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <a
            href={`${SITE}/faqs/`}
            className="inline-flex items-center gap-2 font-extrabold underline decoration-primary decoration-4 underline-offset-4 transition-colors hover:text-foreground/70"
          >
            I have more questions
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- cta band --------------------------------- */

function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <img src={yoga} alt="Yoga illustration" className="mx-auto w-full max-w-xs" />
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Don&rsquo;t be shy. Give us a call or drop us a message.
          </h2>
          <a
            href={`${SITE}/contact-us/`}
            className="mt-7 inline-block rounded-lg bg-primary px-7 py-3.5 text-base font-extrabold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- footer ---------------------------------- */

const footerCols = [
  {
    title: "Services",
    links: [
      { label: "Virtual Office", href: `${SITE}/virtual-offices/` },
      { label: "Registered Office Address", href: `${SITE}/registered-office-address/` },
      { label: "Virtual Landline", href: `${SITE}/virtual-landline/` },
      { label: "Call Answering", href: `${SITE}/call-answering-services/` },
      { label: "Virtual Receptionist", href: `${SITE}/virtual-receptionist/` },
      { label: "Virtual Switchboard", href: `${SITE}/virtual-switchboard/` },
      { label: "Virtual PA", href: `${SITE}/virtual-personal-assistant/` },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "London", href: `${SITE}/virtual-offices/london/` },
      { label: "Mayfair", href: `${SITE}/virtual-offices/london/mayfair/` },
      { label: "Manchester", href: `${SITE}/virtual-offices/manchester/` },
      { label: "Birmingham", href: `${SITE}/virtual-offices/birmingham/` },
      { label: "Leeds", href: `${SITE}/virtual-offices/leeds/` },
      { label: "Bristol", href: `${SITE}/virtual-offices/bristol/` },
      { label: "Edinburgh", href: `${SITE}/virtual-offices/edinburgh/` },
      { label: "Glasgow", href: `${SITE}/virtual-offices/glasgow/` },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: `${SITE}/our-story/` },
      { label: "Onboarding", href: `${SITE}/onboarding/` },
      { label: "Partnerships", href: `${SITE}/partnerships/` },
      { label: "News & Blogs", href: `${SITE}/resources/` },
      { label: "FAQs", href: `${SITE}/faqs/` },
      { label: "Young Entrepreneur Scheme", href: `${SITE}/young-entrepreneur-scheme/` },
      { label: "Contact Us", href: `${SITE}/contact-us/` },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logoHand} alt="" className="h-9 w-auto" />
              <span className="text-xl font-black tracking-tight">
                VirtuallyThere<sup className="text-[0.55em] font-bold">&reg;</sup>
              </span>
            </div>
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-background/70">
              The UK&rsquo;s leading virtual office you can trust, supporting over 20,000 UK
              businesses since 2012.
            </p>
            <div className="mt-5 space-y-1.5 text-sm font-bold">
              <a href="mailto:team@virtually-there.net" className="block hover:text-primary">
                team@virtually-there.net
              </a>
              <a href={PHONE_TEL} className="block hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-5 flex gap-4">
              <a
                href="https://www.facebook.com/VirtuallyThereUK/"
                aria-label="Facebook"
                className="text-background/70 transition-colors hover:text-primary"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/virtually-there-uk/about/"
                aria-label="LinkedIn"
                className="text-background/70 transition-colors hover:text-primary"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/virtuallythereuk/"
                aria-label="Instagram"
                className="text-background/70 transition-colors hover:text-primary"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-black uppercase tracking-[0.12em] text-primary">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-background/80 transition-colors hover:text-primary">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-6 text-xs text-background/60 sm:flex-row">
          <p>&copy; 2026 Virtually There Ltd. All rights reserved.</p>
          <nav className="flex gap-6">
            <a href={`${SITE}/privacy-policy/`} className="hover:text-primary">
              Privacy Policy
            </a>
            <a href={`${SITE}/cookies-policy/`} className="hover:text-primary">
              Cookie Policy
            </a>
            <a href={`${SITE}/terms-of-service-virtually-there/`} className="hover:text-primary">
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
