"use client";
import { MotionConfig, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { btnOutline, btnPrimary } from "@/lib/ui";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";

export const socials = [
  { label: "GitHub", href: profile.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon },
  { label: "Twitter / X", href: profile.twitter, Icon: XIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-2">
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} aria-label={label} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-card text-muted hover:text-fg">
            <Icon className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="home" className="relative overflow-hidden"
        style={{ backgroundImage: "radial-gradient(60% 50% at 80% 0%, color-mix(in srgb, var(--accent) 16%, transparent), transparent)" }}>
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.15fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-sm text-muted">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden /> Open to full-time roles
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
            <p className="mt-3 text-xl font-medium text-accent-text sm:text-2xl">{profile.role}</p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={btnPrimary}>View Projects</a>
              <a href="#contact" className={btnOutline}>Contact Me</a>
            </div>
            <div className="mt-8"><SocialLinks /></div>
          </motion.div>

          <motion.div aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden rounded-xl border border-line bg-card p-5 font-mono text-[13px] leading-7 shadow-sm lg:block">
            <div className="mb-3 flex gap-1.5"><i className="size-2.5 rounded-full bg-line" /><i className="size-2.5 rounded-full bg-line" /><i className="size-2.5 rounded-full bg-line" /></div>
            <p><span className="text-accent-text">const</span> arashad = {"{"}</p>
            <p className="pl-5">role: <span className="text-emerald-500">&quot;Front-End Developer&quot;</span>,</p>
            <p className="pl-5">stack: [<span className="text-emerald-500">&quot;React&quot;</span>, <span className="text-emerald-500">&quot;Next.js&quot;</span>, <span className="text-emerald-500">&quot;TypeScript&quot;</span>],</p>
            <p className="pl-5">state: <span className="text-emerald-500">&quot;Redux Toolkit&quot;</span>,</p>
            <p className="pl-5">internship: <span className="text-emerald-500">&quot;completed&quot;</span>,</p>
            <p className="pl-5">available: <span className="text-accent-text">true</span>,</p>
            <p>{"}"};</p>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
