"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  TRUST_CARDS, SERVICES, PENTEST_ITEMS, WHY_CARDS,
  PRICING_PLANS, SOLUTIONS, CONTRIBUTOR_ROLES, FAQS,
  ABOUT_STATS, SITE,
} from "@/lib/content";

/* ─── animation helpers ─── */
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

/* ─── Eyebrow ─── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

/* ─── SectionHeader ─── */
function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-[2.75rem]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold tracking-[-0.025em] mb-4">{title}</h2>
      {sub && <p className="text-[var(--muted)] text-[1rem] leading-[1.7] max-w-[520px]">{sub}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════ TRUST ══ */
export function TrustSection() {
  return (
    <section className="section-z px-[5%] py-[3.5rem] bg-[var(--bg2)] border-t border-b border-[var(--border)]">
      <motion.div
        variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {TRUST_CARDS.map((c) => (
          <motion.div
            key={c.title} variants={fadeUp}
            className="p-[1.4rem] border border-[var(--border)] rounded-xl bg-[var(--card)] hover:border-[var(--border2)] transition-colors"
          >
            <div className="w-[42px] h-[42px] bg-[rgba(37,99,235,0.09)] rounded-[10px] flex items-center justify-center text-[1.4rem] mb-[0.85rem]">
              {c.icon}
            </div>
            <h3 className="text-[0.92rem] font-semibold mb-[0.35rem]">{c.title}</h3>
            <p className="text-[0.8rem] text-[var(--muted)] leading-[1.5]">{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════ SERVICES ══ */
export function ServicesSection() {
  return (
    <section id="services" className="section-z px-[5%] py-24">
      <div className="max-w-[1180px] mx-auto">
        <SectionHeader
          eyebrow="Services"
          title={<>Everything your business needs<br />to build safely and ship confidently.</>}
          sub="From initial architecture to production deployment and security testing — full lifecycle coverage."
        />
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.4rem]"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title} variants={fadeUp}
              whileHover={{ y: -5 }}
              className="group relative bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-[1.9rem] overflow-hidden hover:border-[var(--border2)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.07)] transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(37,99,235,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-[50px] h-[50px] bg-[rgba(37,99,235,0.09)] rounded-[11px] flex items-center justify-center text-[1.5rem] mb-5">
                  {s.icon}
                </div>
                <h3 className="text-[1rem] font-semibold mb-2">{s.title}</h3>
                <p className="text-[0.83rem] text-[var(--muted)] leading-[1.6]">{s.desc}</p>
                <a
                  href={s.href}
                  className="inline-flex items-center gap-[5px] mt-[1.1rem] text-[0.8rem] text-[var(--cyan)] font-medium no-underline opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {s.linkLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════ PENTEST ══ */
export function PentestSection() {
  return (
    <section id="pentesting" className="section-z px-[5%] py-24 bg-[var(--bg2)] border-t border-b border-[var(--border)]">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}
        >
          <Eyebrow>Pentesting</Eyebrow>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold tracking-[-0.025em] mb-4">
            Authorized security testing.<br />Real-world attack simulation.
          </h2>
          <p className="text-[var(--muted)] leading-[1.7] text-[0.95rem] mb-6">
            ShieldForge performs professional, legally authorized security assessments. Every engagement is scoped,
            documented, and delivered with clear remediation guidance — not just a list of CVEs.
          </p>
          <ul className="list-none flex flex-col gap-[0.65rem] mb-8">
            {PENTEST_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-[10px] text-[0.88rem] text-[var(--muted)]">
                <span className="w-[6px] h-[6px] rounded-full bg-[var(--cyan)] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg bg-gradient-to-br from-[var(--cyan)] to-[var(--accent)] text-white text-[0.875rem] font-semibold no-underline hover:brightness-110 hover:-translate-y-px transition-all"
          >
            Request a Pentest →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}
          className="bg-[var(--card)] border border-[var(--border)] rounded-[16px] p-[1.75rem]"
        >
          {WHY_CARDS.map((w, i) => {
            const colorMap: Record<string, string> = {
              cyan:  "bg-[rgba(6,182,212,0.1)]",
              blue:  "bg-[rgba(37,99,235,0.1)]",
              green: "bg-[rgba(16,185,129,0.1)]",
            };
            return (
              <div
                key={w.title}
                className={cn(
                  "flex items-start gap-[14px] py-[1.1rem]",
                  i < WHY_CARDS.length - 1 && "border-b border-[var(--border)]",
                  i === 0 && "pt-0",
                  i === WHY_CARDS.length - 1 && "pb-0"
                )}
              >
                <div className={`w-[42px] h-[42px] rounded-[10px] flex items-center justify-center text-[1.1rem] flex-shrink-0 ${colorMap[w.color]}`}>
                  {w.icon}
                </div>
                <div>
                  <h4 className="text-[0.9rem] font-semibold mb-[0.25rem]">{w.title}</h4>
                  <p className="text-[0.8rem] text-[var(--muted)] leading-[1.5]">{w.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════ PRICING ══ */
export function PricingSection() {
  return (
    <section id="pricing" className="section-z px-[5%] py-24">
      <div className="max-w-[1180px] mx-auto">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Transparent pricing.<br />No surprises.</>}
          sub="From an initial health check to a full authorized penetration test — clear packages for every stage of your security journey."
        />
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[1.4rem]"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.name} variants={fadeUp} whileHover={{ y: -5 }}
              className={cn(
                "relative flex flex-col bg-[var(--card)] border rounded-[16px] p-8 transition-transform",
                plan.featured
                  ? "border-[rgba(6,182,212,0.35)] shadow-[0_0_40px_rgba(6,182,212,0.07)]"
                  : "border-[var(--border)]"
              )}
            >
              {plan.featured && (
                <div className="absolute top-[-1px] right-6 bg-gradient-to-r from-[var(--cyan)] to-[var(--accent)] text-white text-[0.68rem] font-bold px-3 py-1 rounded-b-lg tracking-[0.05em] uppercase">
                  Most Popular
                </div>
              )}
              <div className="text-[1.1rem] font-bold mb-1">{plan.name}</div>
              <div className="text-[0.8rem] text-[var(--muted)] mb-5">{plan.desc}</div>
              <div className="font-mono text-[1.9rem] font-bold mb-6">
                {plan.price}{" "}
                <span className="text-[0.85rem] text-[var(--muted)] font-sans font-normal">{plan.sub}</span>
              </div>
              <ul className="flex-1 flex flex-col gap-[0.65rem] mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-[9px] text-[0.83rem] text-[var(--muted)] leading-[1.4]">
                    <CheckCircle2 size={15} className="text-[var(--cyan)] flex-shrink-0 mt-[1px]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  "w-full text-center py-[10px] rounded-lg text-[0.875rem] font-semibold no-underline transition-all hover:-translate-y-px",
                  plan.featured
                    ? "bg-gradient-to-br from-[var(--cyan)] to-[var(--accent)] text-white hover:brightness-110"
                    : "border border-[var(--border2)] text-[var(--muted)] hover:text-[var(--text)]"
                )}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════ SOLUTIONS ══ */
export function SolutionsSection() {
  return (
    <section id="solutions" className="section-z px-[5%] py-24 bg-[var(--bg2)] border-t border-b border-[var(--border)]">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}
        >
          <Eyebrow>Solutions</Eyebrow>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold tracking-[-0.025em] mb-4">
            From problem<br />to secure digital solution.
          </h2>
          <p className="text-[var(--muted)] leading-[1.75] text-[0.95rem] mb-4">
            ShieldForge doesn&apos;t just write code. We help businesses understand what they actually need, design the right
            solution, and build it in a way that holds up under real-world conditions.
          </p>
          <p className="text-[var(--muted)] leading-[1.75] text-[0.95rem] mb-8">
            Whether you have a vague idea or a detailed spec, we can work with you from the first session through to a
            live, tested product.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg bg-gradient-to-br from-[var(--cyan)] to-[var(--accent)] text-white text-[0.875rem] font-semibold no-underline hover:brightness-110 hover:-translate-y-px transition-all"
          >
            Discuss Your Project →
          </a>
        </motion.div>

        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {SOLUTIONS.map((s) => (
            <motion.div
              key={s.title} variants={fadeUp}
              className="bg-[var(--card)] border border-[var(--border)] rounded-[11px] p-[1.2rem] hover:border-[var(--border2)] transition-colors"
            >
              <h4 className="text-[0.875rem] font-semibold mb-[0.3rem]">{s.icon} {s.title}</h4>
              <p className="text-[0.78rem] text-[var(--muted)] leading-[1.5]">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════ CONTRIBUTORS ══ */
export function ContributorsSection() {
  const [form, setForm] = useState({ name: "", email: "", role: "", skills: "", portfolio: "", avail: "", pay: "", intro: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit() {
    if (!form.name || !form.email || !form.role) {
      setError("Please fill in name, email, and role.");
      return;
    }
    setError("");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", role: "", skills: "", portfolio: "", avail: "", pay: "", intro: "" });
  }

  return (
    <section id="contributors" className="section-z px-[5%] py-24">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}
        >
          <Eyebrow>Contributors</Eyebrow>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold tracking-[-0.025em] mb-4">
            Work on real projects.<br />On your own terms.
          </h2>
          <p className="text-[var(--muted)] leading-[1.75] text-[0.95rem] mb-5">
            ShieldForge collaborates with selected developers, designers, QA testers, and cybersecurity specialists on
            project-based tasks. We bring in people who have specific skills for specific work.
          </p>
          <div className="flex flex-wrap gap-[7px] mb-6">
            {CONTRIBUTOR_ROLES.map((r) => (
              <span key={r} className="px-[13px] py-1 border border-[var(--border)] rounded-full text-[0.78rem] text-[var(--muted)] font-mono">
                {r}
              </span>
            ))}
          </div>
          <div className="bg-[rgba(37,99,235,0.07)] border border-[rgba(37,99,235,0.18)] rounded-[10px] p-4 text-[0.82rem] text-[var(--muted)] leading-[1.6]">
            <strong className="text-[var(--text)]">This is not a job listing.</strong> Selected contributors may receive
            paid project tasks based on skills, availability, project needs, and agreed delivery terms. We review every
            application carefully.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}
          className="bg-[var(--card)] border border-[var(--border)] rounded-[16px] p-[1.9rem]"
        >
          <h3 className="text-[1.05rem] font-semibold mb-[1.4rem] pb-4 border-b border-[var(--border)]">Apply as Contributor</h3>

          <div className="grid grid-cols-2 gap-[0.85rem]">
            <FormField label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Smith" />
            <FormField label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="jane@example.com" />
          </div>
          <FormSelect label="Role" value={form.role} onChange={(v) => setForm({ ...form, role: v })}
            options={["", ...CONTRIBUTOR_ROLES]} placeholder="Select a role..." />
          <FormField label="Key Skills" value={form.skills} onChange={(v) => setForm({ ...form, skills: v })} placeholder="e.g. React, Burp Suite, Figma" />
          <FormField label="Portfolio / GitHub / LinkedIn" value={form.portfolio} onChange={(v) => setForm({ ...form, portfolio: v })} placeholder="Links to your work" />
          <div className="grid grid-cols-2 gap-[0.85rem]">
            <FormSelect label="Availability" value={form.avail} onChange={(v) => setForm({ ...form, avail: v })}
              options={["", "5–10 hrs/week", "10–20 hrs/week", "20–40 hrs/week", "Project-by-project"]} placeholder="Select..." />
            <FormSelect label="Payment Model" value={form.pay} onChange={(v) => setForm({ ...form, pay: v })}
              options={["", "Per task / deliverable", "Hourly rate", "Per project", "Open to discussion"]} placeholder="Select..." />
          </div>
          <FormTextarea label="Short Introduction" value={form.intro} onChange={(v) => setForm({ ...form, intro: v })}
            placeholder="What you've built, what you're best at, and why you'd be a good fit." />

          {error && <p className="text-[0.82rem] text-[var(--red)] mb-3">{error}</p>}
          {sent && <p className="text-[0.82rem] text-[var(--green)] mb-3">Demo complete — no application was submitted.</p>}

          <button
            onClick={handleSubmit}
            className="w-full py-[10px] rounded-lg bg-gradient-to-br from-[var(--cyan)] to-[var(--accent)] text-white text-[0.875rem] font-semibold cursor-pointer border-none hover:brightness-110 hover:-translate-y-px transition-all"
          >
            Try contributor demo →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════ FAQ ══ */
export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="section-z px-[5%] py-24 bg-[var(--bg2)] border-t border-b border-[var(--border)]">
      <div className="max-w-[720px] mx-auto">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold tracking-[-0.025em] mb-[2.75rem]">Common questions</h2>
        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => (
            <div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-[1.4rem] py-[1.1rem] bg-transparent border-none text-[var(--text)] font-semibold text-[0.92rem] cursor-pointer flex justify-between items-center gap-4 hover:text-[var(--cyan)] transition-colors font-sans"
              >
                <span>{f.q}</span>
                <span
                  className="text-[var(--muted)] flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(180deg)" : "none" }}
                >
                  ⌄
                </span>
              </button>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-[1.4rem] pb-[1.1rem] text-[0.85rem] text-[var(--muted)] leading-[1.7]"
                >
                  {f.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════ ABOUT ══ */
export function AboutSection() {
  return (
    <section id="about" className="section-z px-[5%] py-24">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}
        >
          <Eyebrow>About</Eyebrow>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold tracking-[-0.025em] mb-5">
            Security and development,<br />without the compromise.
          </h2>
          <p className="text-[var(--muted)] leading-[1.75] text-[0.95rem] mb-4">
            ShieldForge is a digital solutions agency focused on building secure, useful, and scalable systems. We combine
            web development, cybersecurity, and practical problem-solving to help businesses operate with safer, more
            effective technology.
          </p>
          <p className="text-[var(--muted)] leading-[1.75] text-[0.95rem] mb-4">
            We work with small businesses, startups, and companies that want their digital infrastructure to be both
            functional and genuinely secure — not just checked off a compliance list.
          </p>
          <p className="text-[var(--muted)] leading-[1.75] text-[0.95rem]">
            Our approach: understand the problem first, design the right solution, build it properly, and test it before
            it reaches your customers.
          </p>
        </motion.div>
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {ABOUT_STATS.map((s) => (
            <motion.div
              key={s.n} variants={fadeUp}
              className="bg-[var(--card)] border border-[var(--border)] rounded-[11px] p-5 text-center"
            >
              <div className="font-mono text-[1.8rem] font-bold grad-text">{s.n}</div>
              <div className="text-[0.75rem] text-[var(--muted)] mt-[3px]">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════ CONTACT ══ */
export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit() {
    if (!form.name || !form.email || !form.service || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", company: "", service: "", message: "" });
  }

  return (
    <section id="contact" className="section-z px-[5%] py-24 bg-[var(--bg2)] border-t border-[var(--border)]">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}
        >
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold tracking-[-0.025em] mb-4">
            Ready to build<br />something secure?
          </h2>
          <p className="text-[var(--muted)] leading-[1.75] text-[0.95rem] mb-7">
            Tell us what you&apos;re working on. We&apos;ll respond within one business day with an honest assessment — no sales
            pitch, no obligation.
          </p>
          <div className="flex flex-col gap-[0.85rem] mb-6">
            {[
              { icon: "📧", text: SITE.email },
              { icon: "🌍", text: SITE.location },
              { icon: "⏱",  text: SITE.responseTime },
            ].map((d) => (
              <div key={d.text} className="flex items-center gap-3 text-[0.875rem] text-[var(--muted)]">
                <div className="w-9 h-9 rounded-[9px] bg-[rgba(37,99,235,0.09)] flex items-center justify-center text-base flex-shrink-0">
                  {d.icon}
                </div>
                {d.text}
              </div>
            ))}
          </div>
          <div className="flex gap-[10px]">
            {[
              { label: "in", href: SITE.linkedin },
              { label: "gh", href: SITE.github },
              { label: "𝕏",  href: SITE.twitter },
            ].map((s) => (
              <a
                key={s.label} href={s.href}
                className="w-[38px] h-[38px] rounded-[9px] border border-[var(--border)] flex items-center justify-center text-[0.9rem] text-[var(--muted)] no-underline hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:bg-[rgba(6,182,212,0.07)] transition-all"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}
          className="bg-[var(--card)] border border-[var(--border)] rounded-[16px] p-[1.9rem]"
        >
          <h3 className="text-[1.05rem] font-semibold mb-[1.4rem] pb-4 border-b border-[var(--border)]">Send Project Request</h3>
          <div className="grid grid-cols-2 gap-[0.85rem]">
            <FormField label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Your name" />
            <FormField label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@company.com" />
          </div>
          <FormField label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Company name (optional)" />
          <FormSelect
            label="Service Needed" value={form.service} onChange={(v) => setForm({ ...form, service: v })}
            options={[
              "", "Web Development", "App Development",
              "Website Health Report (kr 2 900)", "Security & Weakness Review (kr 7 900)",
              "Full Security Assessment / Pentest",
              "Digital Solutions / Strategy", "Technical Consulting", "Not sure yet",
            ]}
            placeholder="Select a service..."
          />
          <FormTextarea
            label="Message" value={form.message} onChange={(v) => setForm({ ...form, message: v })}
            placeholder="Describe what you're building or what problem you need to solve. The more context, the better."
            rows={5}
          />
          {error && <p className="text-[0.82rem] text-[var(--red)] mb-3">{error}</p>}
          {sent && <p className="text-[0.82rem] text-[var(--green)] mb-3">Demo complete — nothing was sent.</p>}
          <button
            onClick={handleSubmit}
            className="w-full py-[10px] rounded-lg bg-gradient-to-br from-[var(--cyan)] to-[var(--accent)] text-white text-[0.875rem] font-semibold cursor-pointer border-none hover:brightness-110 hover:-translate-y-px transition-all"
          >
            Try form demo →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════ FOOTER ══ */
export function Footer() {
  return (
    <footer className="section-z bg-[var(--bg)] border-t border-[var(--border)] px-[5%] pt-12 pb-8">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 pb-8 border-b border-[var(--border)] mb-6">
          <div>
            <div className="flex items-center gap-[10px] mb-3 font-bold text-[1.15rem]">
              <div className="w-[34px] h-[34px] rounded-[9px] bg-gradient-to-br from-[var(--accent)] to-[var(--cyan)] flex items-center justify-center text-[15px]">⬡</div>
              Shield<em className="not-italic text-[var(--cyan)]">Forge</em>
            </div>
            <p className="text-[var(--muted)] text-[0.82rem] leading-[1.6] max-w-[240px]">
              Building secure, scalable, and useful digital systems for modern businesses. Development, cybersecurity, and
              practical problem-solving — without compromise.
            </p>
          </div>
          {[
            { title: "Services", links: [
              { l: "Web Development", h: "#services" },
              { l: "App Development", h: "#services" },
              { l: "Pentesting", h: "#pentesting" },
              { l: "Secure Development", h: "#services" },
              { l: "Digital Solutions", h: "#solutions" },
            ]},
            { title: "Company", links: [
              { l: "About", h: "#about" },
              { l: "Contributors", h: "#contributors" },
              { l: "FAQ", h: "#faq" },
              { l: "Contact", h: "#contact" },
            ]},
            { title: "Get Started", links: [
              { l: "Start a Project", h: "#contact" },
              { l: "Apply as Contributor", h: "#contributors" },
              { l: "Request Pentest", h: "#pentesting" },
              { l: "View Pricing", h: "#pricing" },
            ]},
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.75rem] font-semibold tracking-[0.06em] uppercase text-[var(--muted)] mb-4">{col.title}</h4>
              <ul className="list-none flex flex-col gap-2">
                {col.links.map((lk) => (
                  <li key={lk.l}>
                    <a href={lk.h} className="text-[var(--muted)] text-[0.83rem] no-underline hover:text-[var(--text)] transition-colors">{lk.l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[0.78rem] text-[var(--muted)]">
          <span>© {new Date().getFullYear()} ShieldForge. All rights reserved.</span>
          <span className="font-mono text-[0.7rem]">Secure Web, App &amp; Digital Solutions</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── shared form atoms ─── */
const inputClass =
  "w-full bg-[rgba(255,255,255,0.04)] border border-[var(--border)] rounded-lg px-[13px] py-[9px] text-[var(--text)] text-[0.855rem] font-sans focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none";

function FormField({ label, value, onChange, placeholder, type = "text" }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string;
}) {
  return (
    <div className="flex flex-col gap-[0.35rem] mb-[0.9rem]">
      <label className="text-[0.78rem] text-[var(--muted)] font-medium">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder} className={inputClass} />
    </div>
  );
}

function FormSelect({ label, value, onChange, options, placeholder }: {
  label: string; value: string; onChange: (v: string) => void;
  options: string[]; placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-[0.35rem] mb-[0.9rem]">
      <label className="text-[0.78rem] text-[var(--muted)] font-medium">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className={inputClass}
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%236b7fa0' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}>
        {options.map((o) => (
          <option key={o} value={o} disabled={o === ""}>{o === "" ? placeholder : o}</option>
        ))}
      </select>
    </div>
  );
}

function FormTextarea({ label, value, onChange, placeholder, rows = 4 }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; rows?: number;
}) {
  return (
    <div className="flex flex-col gap-[0.35rem] mb-[0.9rem]">
      <label className="text-[0.78rem] text-[var(--muted)] font-medium">{label}</label>
      <textarea value={value} onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder} rows={rows}
        className={`${inputClass} resize-y min-h-[85px]`} />
    </div>
  );
}
