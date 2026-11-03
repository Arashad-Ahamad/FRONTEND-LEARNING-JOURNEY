import Image from "next/image";
import { ArrowUp, Award, ExternalLink, Mail, MapPin } from "lucide-react";
import { certifications, experience, profile, projects, skills, stats } from "@/lib/data";
import { btnOutline, btnPrimary, chip } from "@/lib/ui";
import { GithubIcon } from "./icons";
import { SocialLinks } from "./hero";

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 border-t border-line py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight">{title}</h2>
        {intro && <p className="mt-2 max-w-xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <Image src="/images/photo.jpg" alt="Portrait of Arashad Ahamad" width={160} height={160}
          className="size-32 rounded-2xl border border-line object-cover sm:size-40" />
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
         I'm a self-taught front-end developer from India. I recently completed a 3-month web development internship at Genicminds, where I built responsive interfaces and reusable React components. Outside of work, I've independently built 6+ live projects with REST API integrations — from Redux-powered e-commerce stores to Next.js apps using Server Actions.
        </p>
      </div>
      <dl className="mt-10 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-line bg-card p-5">
            <dt className="order-2 text-sm text-muted">{s.label}</dt>
            <dd className="text-2xl font-semibold">{s.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I reach for when building for the web.">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="font-medium">{g.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => <li key={i} className={chip}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Things I've built, from Next.js apps to React fundamentals.">
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name}>
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card">
              {p.image ? (
                <Image src={p.image} alt={`${p.name} screenshot`} width={1200} height={650} sizes="(min-width: 768px) 480px, 100vw"
                  className="aspect-video w-full border-b border-line object-cover object-top" />
              ) : (
                <div className="flex aspect-video items-center justify-center border-b border-line font-mono text-sm text-muted"
                  style={{ backgroundImage: "radial-gradient(70% 90% at 50% 0%, color-mix(in srgb, var(--accent) 14%, transparent), transparent)" }}>
                  {`<${p.name} />`}
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.description}</p>
                <ul className="mt-4 list-disc space-y-1 pl-4 text-sm marker:text-accent-text">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
                  {p.tech.map((t) => <li key={t} className={chip}>{t}</li>)}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-5">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                      <ExternalLink className="size-4" aria-hidden /> Live Demo<span className="sr-only"> of {p.name}</span>
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={btnOutline}>
                    <GithubIcon className="size-4" /> GitHub<span className="sr-only"> repository of {p.name}</span>
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-accent-text underline-offset-4 hover:underline">
          View all on GitHub
        </a>
      </p>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="ml-2 border-l border-line">
        {experience.map((e) => (
          <li key={e.title} className="relative pb-10 pl-8 last:pb-0">
            <span aria-hidden className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-accent" />
            <h3 className="text-lg font-semibold">{e.title} <span className="font-normal text-muted">· {e.org}</span></h3>
            <p className="mt-1 text-sm text-muted">{e.meta}</p>
            {e.bullets.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-muted marker:text-accent-text">
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
            {e.tags.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-1.5">{e.tags.map((t) => <li key={t} className={chip}>{t}</li>)}</ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <li key={c.name} className="flex items-start gap-4 rounded-xl border border-line bg-card p-5">
            <Award className="mt-0.5 size-5 shrink-0 text-accent-text" aria-hidden />
            <div>
              <h3 className="font-medium">{c.name}</h3>
              <p className="text-sm text-muted">{c.issuer}</p>
              {c.url && (
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-accent-text underline-offset-4 hover:underline">
                  View Certificate<span className="sr-only"> for {c.name}</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Let's work together">
      <p className="max-w-xl text-lg text-muted">Open to full-time Front-End roles. If you have an opening or want to talk about a project, my inbox is open.</p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a href={`mailto:${profile.email}`} className={btnPrimary}><Mail className="size-4" aria-hidden /> {profile.email}</a>
        <SocialLinks />
      </div>
      <p className="mt-6 flex items-center gap-2 text-sm text-muted"><MapPin className="size-4" aria-hidden /> {profile.location}</p>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js 16 &amp; Tailwind CSS.</p>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-fg"><ArrowUp className="size-4" aria-hidden /> Back to top</a>
      </div>
    </footer>
  );
}
