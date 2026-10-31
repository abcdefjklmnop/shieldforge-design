"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="section-z relative min-h-screen flex items-center px-[5%] pt-[120px] pb-[80px] overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute top-[15%] left-[-8%] w-[55vw] h-[55vh] bg-[radial-gradient(ellipse,rgba(37,99,235,0.11)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[45vh] bg-[radial-gradient(ellipse,rgba(6,182,212,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        {/* Left — copy */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.09)] border border-[rgba(37,99,235,0.22)] px-[14px] py-[6px] rounded-full text-[0.78rem] text-[var(--cyan)] mb-6 font-mono tracking-[0.04em]"
          >
            <div className="live-dot" />
            Authorized Security &amp; Development — Norway
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-[clamp(2.1rem,4.5vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.03em] mb-[1.4rem]"
          >
            We build{" "}
            <span className="grad-text">secure digital solutions</span>{" "}
            for modern businesses.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-[1.02rem] text-[var(--muted)] max-w-[460px] mb-9 leading-[1.75]"
          >
            ShieldForge combines web development, app development, cybersecurity,
            and penetration testing to help companies build safer, stronger, and
            more successful digital systems.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex gap-3 flex-wrap"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg bg-gradient-to-br from-[var(--cyan)] to-[var(--accent)] text-white text-[0.875rem] font-semibold no-underline hover:brightness-110 hover:-translate-y-px transition-all"
            >
              Start a Project →
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg border border-[var(--border2)] text-[var(--muted)] text-[0.875rem] font-semibold no-underline hover:text-[var(--text)] hover:border-[rgba(51,93,168,0.45)] transition-all"
            >
              See Pricing
            </a>
          </motion.div>
        </div>

        {/* Right — security dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-[11px]"
        >
          {/* Score card */}
          <DashCard>
            <DashHeader label="Security Score — Audit Report" dot="green" />
            <div className="flex items-end gap-[10px] mb-[0.75rem]">
              <span className="font-mono text-[2.6rem] font-bold text-[var(--green)] leading-none">82</span>
              <span className="text-[0.75rem] text-[var(--muted)] mb-[6px]">/ 100 — Good standing</span>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] rounded-full h-[5px] overflow-hidden">
              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[var(--green)] to-[var(--cyan)]" />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {[
                { n: "2", label: "Critical", cls: "text-[var(--red)]" },
                { n: "5", label: "Medium",   cls: "text-[var(--amber)]" },
                { n: "11", label: "Low",     cls: "text-[var(--green)]" },
              ].map((v) => (
                <div
                  key={v.label}
                  className="text-center py-[7px] bg-[rgba(255,255,255,0.03)] border border-[var(--border)] rounded-lg"
                >
                  <div className={`font-mono text-[1.3rem] font-bold ${v.cls}`}>{v.n}</div>
                  <div className="text-[0.63rem] text-[var(--muted)] mt-[1px]">{v.label}</div>
                </div>
              ))}
            </div>
          </DashCard>

          {/* Stack card */}
          <DashCard>
            <DashHeader label="Active Stack" />
            <div className="flex flex-wrap gap-[7px]">
              {[
                { label: "Next.js", active: true },
                { label: "Node API", active: true },
                { label: "Auth0",   active: false },
                { label: "Vercel",  active: true },
                { label: "Supabase", active: false },
                { label: "TLS 1.3", active: true },
                { label: "PostgreSQL", active: false },
              ].map((t) => (
                <span
                  key={t.label}
                  className={`font-mono text-[0.68rem] px-[10px] py-1 rounded-md border ${
                    t.active
                      ? "border-[var(--cyan)] text-[var(--cyan)]"
                      : "border-[var(--border)] text-[var(--muted)]"
                  }`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </DashCard>

          {/* Terminal card */}
          <DashCard className="font-mono text-[0.7rem] leading-[1.95]">
            <div className="text-[0.68rem] tracking-[0.08em] text-[var(--muted)] uppercase mb-[0.7rem]">
              Pentest Excerpt — api.client.com
            </div>
            <div className="text-[var(--muted)]">{"[ INFO ] Recon phase complete — 143 endpoints"}</div>
            <div className="text-[var(--cyan)]">{"[ SCAN ] Auth flow: 4 paths tested"}</div>
            <div className="text-[var(--amber)]">{"[ WARN ] Missing CSP header on /api/*"}</div>
            <div className="text-[var(--red)]">{"[ CRIT ] SQLi vector detected → /search"}</div>
            <div className="text-[var(--green)]">{"[ PASS ] Tokens: properly scoped & rotated"}</div>
            <div className="text-[var(--muted)]">{"[ INFO ] Remediation report → generating..."}</div>
          </DashCard>
        </motion.div>
      </div>
    </section>
  );
}

/* ── sub-components ── */
function DashCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-[14px] border border-[var(--border)] px-[1.4rem] py-[1.15rem] bg-[var(--glass)] backdrop-blur-[18px] overflow-hidden ${className}`}
    >
      {/* top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(6,182,212,0.35)] to-transparent" />
      {children}
    </div>
  );
}

function DashHeader({ label, dot }: { label: string; dot?: "green" | "amber" }) {
  return (
    <div className="flex justify-between items-center mb-[0.9rem]">
      <span className="font-mono text-[0.68rem] text-[var(--muted)] tracking-[0.08em] uppercase">
        {label}
      </span>
      {dot && (
        <div
          className={`w-[7px] h-[7px] rounded-full animate-[blink_2s_infinite] ${
            dot === "green" ? "bg-[var(--green)]" : "bg-[var(--amber)]"
          }`}
        />
      )}
    </div>
  );
}
