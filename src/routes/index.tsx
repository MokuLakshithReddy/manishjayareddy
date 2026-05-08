import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Brush,
  Sparkles,
  Sofa,
  MessageSquare,
  PencilRuler,
  Hammer,
  Wand2,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import hero from "@/assets/hero-mural.jpg";
import about from "@/assets/about-artist.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MJR Studio — Wall Art, Murals & Interior Design" },
      {
        name: "description",
        content:
          "Bespoke wall paintings, hand-crafted murals and interior design that transform homes, cafes and offices into living art.",
      },
      { property: "og:title", content: "MJR Studio — Wall Art & Interiors" },
      {
        property: "og:description",
        content: "Creative wall paintings & interior design that bring spaces to life.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Brush,
    title: "Wall Printing",
    desc: "Machine Printed murals, textures and custom artwork crafted for your space.",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    desc: "End-to-end design for homes, cafes, offices — modern, minimal, made yours.",
  },
  {
    icon: Sparkles,
    title: "Custom Projects",
    desc: "Bespoke installations, accent walls, and one-of-a-kind creative concepts.",
  },
];

const portfolio = [
  { src: p1, title: "Cafe Geometry", cat: "Murals", span: "lg:col-span-2 lg:row-span-2" },
  { src: p2, title: "Arched Living", cat: "Home Interiors", span: "" },
  { src: p3, title: "Terracotta Drift", cat: "Murals", span: "" },
  { src: p4, title: "Reception Gold", cat: "Office Designs", span: "lg:col-span-2" },
  { src: p5, title: "Botanical Birds", cat: "Murals", span: "" },
  { src: p6, title: "Black & Brass", cat: "Home Interiors", span: "" },
];

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We listen to your vision, space and story." },
  { icon: PencilRuler, title: "Design Planning", desc: "Mood boards, sketches and material samples." },
  { icon: Hammer, title: "Execution", desc: "Hand-painted on-site by our master artists." },
  { icon: Wand2, title: "Final Touch", desc: "Styling and reveal — your space becomes art." },
];

const reviews = [
  {
    name: "Aanya Mehra",
    role: "Homeowner, Bandra",
    quote:
      "They turned a blank wall into the heart of our home. Every guest stops to admire it. Worth every rupee.",
  },
  {
    name: "Rohan Kapoor",
    role: "Founder, Brew & Co.",
    quote:
      "Our cafe finally has a soul. The mural became our most-photographed corner within a week.",
  },
  {
    name: "Sara Iyer",
    role: "Architect",
    quote:
      "Rare combination of artistry and reliability. Briefs are nailed, timelines respected, finishes flawless.",
  },
  {
    name: "Devansh Shah",
    role: "Co-founder, Northline",
    quote:
      "Our office reception now feels like a gallery. Clients comment before we even start the meeting.",
  },
];

function Home() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <img
          src={hero}
          alt="Hand-painted abstract mural in a luxurious living room"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-foreground/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              EST. 2023 · WALL PRINTING & INTERIORS
            </span>
            <h1 className="bg-inherit text-black text-4xl font-serif whitespace-pre-line">
              {"\n\n"}Make Your Walls Into Imaginations
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
              Creative wall paintings & interior design that bring spaces to
              life — hand-crafted by artists who treat every wall like a canvas.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                View Portfolio
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 bg-background/30 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-background/60"
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-foreground/15 pt-8 max-w-xl">
            {[
              ["240+", "Walls painted"],
              ["10 yrs", "Studio craft"],
              ["98%", "Repeat clients"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-3xl text-foreground">{k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img
              src={about}
              alt="Artist hand-painting a botanical mural"
              width={1280}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-sm bg-accent px-6 py-5 text-accent-foreground sm:block">
              <div className="font-display text-3xl">10+</div>
              <div className="text-xs uppercase tracking-widest">Years of experience</div>
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              About the studio
            </span>
            <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">
              A studio where{" "}
              <span className="italic text-accent">walls become stories</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              MJR Studio is a leading design studio specializing in cutting-edge wall printing and interior transformations. Based in Hyderabad and serving clients across India, we've turned countless blank walls into stunning visual masterpieces.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              By blending advanced printing technology with creative interior design expertise, we help homeowners and businesses create environments that are both beautiful and inspiring.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div className="col-span-2">
                <div className="font-display text-2xl">At MJR Studio</div>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  At MJR Studio, we bring spaces to life with premium wall printing and creative interior design solutions. From custom wall graphics to modern interiors, we design spaces that reflect your personality, style, and vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                What we do
              </span>
              <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">
                Services crafted for{" "}
                <span className="italic text-accent">beautiful spaces</span>.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              From a single accent wall to a full interior makeover — we work at
              every scale, with the same obsession for detail.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-sm border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground/80">
                  Explore
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Selected work
            </span>
            <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">
              A gallery of{" "}
              <span className="italic text-accent">finished walls</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Murals", "Home Interiors", "Office Designs"].map((c) => (
              <button
                key={c}
                className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-widest text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((p) => (
            <a
              key={p.title}
              href="#contact"
              className={`group relative overflow-hidden rounded-sm bg-muted ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-xs uppercase tracking-widest text-background/70">
                  {p.cat}
                </div>
                <div className="mt-1 font-display text-2xl">{p.title}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-background/60">
              How we work
            </span>
            <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">
              From blank wall to{" "}
              <span className="italic text-[var(--gold)]">final reveal</span>.
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-background/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="bg-foreground p-8">
                <div className="font-display text-sm text-[var(--gold)]">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <Icon className="mt-6 h-8 w-8 text-background/80" strokeWidth={1.4} />
                <h3 className="mt-6 text-2xl text-background">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/65">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Kind words
          </span>
          <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">
            Trusted by people who{" "}
            <span className="italic text-accent">love their walls</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-sm border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex gap-1 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-relaxed text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium">
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-28">
          <h2 className="max-w-2xl text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Let's design your{" "}
            <span className="italic">dream space</span>.
          </h2>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
          >
            Contact Now
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Get in touch
            </span>
            <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">
              Tell us about your{" "}
              <span className="italic text-accent">space</span>.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Share a few details and we'll get back within 24 hours with ideas,
              timelines and a friendly quote.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Call</div>
                  <div className="font-medium">+91 9347081316</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium whitespace-pre-line">mjrwallprinters@gmail.com{"\n"}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Studio</div>
                  <div className="font-medium">Hyderabad · serving across India</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/15555555555"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageSquare className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll be in touch within 24 hours.");
            }}
            className="rounded-sm border border-border bg-card p-8 lg:p-10"
          >
            <div className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  maxLength={80}
                  type="text"
                  className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-foreground"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Phone
                </label>
                <input
                  required
                  maxLength={20}
                  type="tel"
                  className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-foreground"
                  placeholder="+91 ..."
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-foreground"
                  placeholder="Tell us about your space, style and timeline..."
                />
              </div>
              <button
                type="submit"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Send Message
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-2">
            <div className="font-display text-3xl">
              MJR Studio
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Machine Printed murals & interior design. Crafting walls people
              fall in love with — one brushstroke at a time.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/mjrwallcreations_interiors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Explore
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-accent">About</a></li>
              <li><a href="#services" className="hover:text-accent">Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent">Portfolio</a></li>
              <li><a href="#process" className="hover:text-accent">Process</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Studio
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Hyderabad, India</li>
              <li>mjrwallprinters@gmail.com</li>
              <li>+91 9347081316</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
            <div>© {new Date().getFullYear()} MJR Studio. All rights reserved.</div>
            <div>Crafted with brush & pixel.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
