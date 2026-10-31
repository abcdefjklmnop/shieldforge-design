"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/content";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between",
          "px-[5%] h-[66px]",
          "bg-[rgba(7,11,18,0.90)] backdrop-blur-[24px]",
          "border-b border-[var(--border)]",
          "transition-shadow duration-300",
          scrolled && "shadow-[0_4px_32px_rgba(6,182,212,0.06)]"
        )}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-[10px] text-[var(--text)] no-underline font-bold text-[1.15rem] tracking-[-0.02em]">
          <div className="w-[34px] h-[34px] rounded-[9px] bg-gradient-to-br from-[var(--accent)] to-[var(--cyan)] flex items-center justify-center text-[15px]">
            ⬡
          </div>
          Shield<em className="not-italic text-[var(--cyan)]">Forge</em>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[var(--muted)] text-[0.875rem] font-medium no-underline hover:text-[var(--text)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex gap-[10px] items-center">
          <a
            href="#contributors"
            className="px-5 py-[9px] rounded-lg border border-[var(--border2)] text-[var(--muted)] text-[0.875rem] font-semibold no-underline hover:text-[var(--text)] hover:border-[rgba(51,93,168,0.45)] transition-all"
          >
            Become a Contributor
          </a>
          <a
            href="#contact"
            className="px-5 py-[9px] rounded-lg bg-gradient-to-br from-[var(--cyan)] to-[var(--accent)] text-white text-[0.875rem] font-semibold no-underline hover:brightness-110 hover:-translate-y-px transition-all"
          >
            Start a Project
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden bg-none border-none cursor-pointer p-1 text-[var(--text)]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[66px] left-0 right-0 z-40 flex flex-col gap-3 px-[5%] pb-6 pt-4 bg-[rgba(7,11,18,0.97)] backdrop-blur-[24px] border-b border-[var(--border)]"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-[var(--muted)] text-[0.95rem] font-medium no-underline py-[0.6rem] border-b border-[var(--border)] hover:text-[var(--text)] transition-colors after:content-['→'] after:opacity-40 after:text-[0.8rem]"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-[10px] pt-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-[9px] px-5 rounded-lg bg-gradient-to-br from-[var(--cyan)] to-[var(--accent)] text-white text-[0.875rem] font-semibold no-underline"
              >
                Start a Project
              </a>
              <a
                href="#contributors"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-[9px] px-5 rounded-lg border border-[var(--border2)] text-[var(--muted)] text-[0.875rem] font-semibold no-underline"
              >
                Contribute
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
