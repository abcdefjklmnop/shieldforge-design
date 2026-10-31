// ─── Site-wide content ─────────────────────────────────────────────────────
// Edit this file to update all text content across the site.

export const SITE = {
  name: "ShieldForge",
  tagline: "Secure Web, App & Digital Solutions",
  email: "demo@example.invalid",
  location: "Norway — available internationally",
  responseTime: "Portfolio demonstration — no messages are sent",
  linkedin: "#",
  github: "#",
  twitter: "#",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pentesting", href: "#pentesting" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contributors", href: "#contributors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const TRUST_CARDS = [
  {
    icon: "🛡️",
    title: "Secure by Design",
    desc: "Security built into every layer — from architecture decisions to deployment configuration.",
  },
  {
    icon: "📈",
    title: "Built for Growth",
    desc: "Scalable foundations so your systems grow with your business without rebuilding from scratch.",
  },
  {
    icon: "⚠️",
    title: "Tested Against Real Risks",
    desc: "Authorized pentesting that reflects how real attackers behave — not just automated scan output.",
  },
  {
    icon: "🔧",
    title: "Practical Solutions",
    desc: "We focus on outcomes that matter for your business, not technical complexity for its own sake.",
  },
];

export const SERVICES = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Modern, fast, and secure websites built for credibility, performance, and business growth. Clean code your team can actually maintain.",
    href: "#contact",
    linkLabel: "Start a project →",
  },
  {
    icon: "📱",
    title: "App Development",
    desc: "Mobile and web applications designed with clean architecture, strong UX, and scalable foundations. Built to last beyond the initial launch.",
    href: "#contact",
    linkLabel: "Start a project →",
  },
  {
    icon: "🔍",
    title: "Pentesting",
    desc: "Authorized security testing of websites, APIs, and digital systems with clear reports and actionable remediation steps.",
    href: "#pentesting",
    linkLabel: "Learn more →",
  },
  {
    icon: "🔐",
    title: "Secure Development",
    desc: "Security-first development, code review, auth hardening, access control, and safer deployment practices from day one.",
    href: "#contact",
    linkLabel: "Start a project →",
  },
  {
    icon: "💡",
    title: "Digital Solutions",
    desc: "We help businesses identify problems, design better workflows, and build digital tools that create measurable results.",
    href: "#solutions",
    linkLabel: "See how it works →",
  },
  {
    icon: "🤝",
    title: "Technical Consulting",
    desc: "Strategic guidance on architecture, technology choices, security posture, and digital roadmap. Independent advice that serves your goals.",
    href: "#contact",
    linkLabel: "Get in touch →",
  },
];

export const PENTEST_ITEMS = [
  "Web application security testing",
  "API endpoint analysis and testing",
  "Authentication and access control review",
  "Server and configuration review",
  "Structured vulnerability reporting",
  "Prioritized remediation guidance",
  "Retest after fixes are applied",
];

export const WHY_CARDS = [
  {
    icon: "🏆",
    color: "cyan",
    title: "Learning & Methodology",
    desc: "A design study exploring how to present authorized testing and a defined scope. No certifications are claimed.",
  },
  {
    icon: "🛡️",
    color: "blue",
    title: "OWASP Methodology",
    desc: "Testing based on OWASP Top 10 and industry-standard frameworks — not improvised or tool-only assessments.",
  },
  {
    icon: "📋",
    color: "green",
    title: "Actionable Reports",
    desc: "Every finding includes risk rating, proof-of-concept, and a specific remediation path your team can act on immediately.",
  },
];

export const PRICING_PLANS = [
  {
    name: "Website Health Report",
    desc: "Initial security and performance snapshot",
    price: "kr 2 900",
    sub: "one-time",
    featured: false,
    features: [
      "Security quick-scan of public surfaces",
      "Performance metrics overview",
      "Basic SEO and accessibility flags",
      "3–5 page written report",
      "Prioritized recommendations",
    ],
    cta: "Get Started",
  },
  {
    name: "Security & Weakness Review",
    desc: "Comprehensive security assessment",
    price: "kr 7 900",
    sub: "one-time",
    featured: true,
    features: [
      "Full security audit of web app or API",
      "Vulnerability scanning and manual review",
      "Authentication and configuration check",
      "Detailed report (15–25 pages)",
      "Remediation guidance per finding",
      "30-day follow-up support",
    ],
    cta: "Get Started",
  },
  {
    name: "Full Security Assessment",
    desc: "Authorized penetration test — scoped engagement",
    price: "Custom",
    sub: "contact for quote",
    featured: false,
    features: [
      "Authorized penetration testing",
      "API, auth, and access control testing",
      "Executive + technical report",
      "Retest after remediation included",
      "90-day support window",
      "Written authorization & defined scope",
    ],
    cta: "Request Quote",
  },
];

export const SOLUTIONS = [
  { icon: "🔎", title: "Problem Analysis", desc: "Dig into the real business problem before writing a line of code." },
  { icon: "🗺️", title: "MVP Planning", desc: "Define the minimum scope that delivers real value quickly." },
  { icon: "⚙️", title: "Technical Strategy", desc: "Right stack, architecture, and integrations for your context." },
  { icon: "🎨", title: "UI/UX Structure", desc: "User flows and interface design that make systems intuitive." },
  { icon: "🔐", title: "Secure Architecture", desc: "Security designed in from the start — not bolted on after launch." },
  { icon: "🚀", title: "Launch Support", desc: "Deployment, monitoring, and go-live so nothing falls through." },
  { icon: "📋", title: "Development Roadmap", desc: "Clear plan with transparent milestones and delivery windows." },
  { icon: "🔄", title: "Continuous Improvement", desc: "Post-launch iterations, performance tuning, security reviews." },
];

export const CONTRIBUTOR_ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "App Developer",
  "UI/UX Designer",
  "QA Tester",
  "Cybersecurity Tester",
  "Technical Writer",
  "Project Assistant",
];

export const FAQS = [
  {
    q: "Do you work with international clients?",
    a: "Yes — we work with clients across Europe and globally. All services are delivered remotely with secure communication channels. We are based in Norway but operate internationally.",
  },
  {
    q: "How long does a penetration test take?",
    a: "Timeline depends on scope. A typical web application pentest takes 3–7 working days. We provide a detailed timeline and agreement during scoping. All pentesting requires written authorization and a clearly defined scope before work begins.",
  },
  {
    q: "What happens after you find vulnerabilities?",
    a: "You receive a detailed report with risk ratings, proof-of-concept evidence, and specific remediation guidance for each finding. After you fix the issues, we retest to verify the improvements are effective.",
  },
  {
    q: "Can you build a secure website or app from scratch?",
    a: "Absolutely. Our build engagements combine development and security review to ensure your product is secure from day one — not tested as an afterthought. We cover architecture, code quality, auth, and deployment security.",
  },
  {
    q: "What is the contributor program?",
    a: "ShieldForge works with selected freelancers — developers, designers, QA testers, and security specialists — on project-based paid tasks. Apply through the Contributors section and we'll review your profile against current and upcoming project needs.",
  },
  {
    q: "Which pricing package do I need?",
    a: "Start with the Website Health Report (kr 2 900) for an initial overview. Choose Security & Weakness Review (kr 7 900) for a comprehensive audit with remediation guidance. Contact us for Full Security Assessment if you require authorized penetration testing with full scope.",
  },
];

export const ABOUT_STATS = [
  { n: "B2B", l: "Primary focus" },
  { n: "100%", l: "Authorized testing only" },
  { n: "Full", l: "Project lifecycle" },
  { n: "Demo", l: "Illustrative metrics only" },
];
