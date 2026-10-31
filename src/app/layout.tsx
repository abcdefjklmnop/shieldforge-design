import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShieldForge — Portfolio Design Concept",
  description:
    "A portfolio design concept by Karos Mokrian. Illustrative content only. No operational security services or message submission.",
  keywords: [
    "cybersecurity Norway",
    "pentesting",
    "web development",
    "secure development",
    "digital solutions",
    "ShieldForge",
  ],
  openGraph: {
    title: "ShieldForge",
    description: "Secure Web, App & Digital Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
