import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MorphingNavigation from "@/components/Navbar/MorphingNavigation";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Abid - AI Expert & Full Stack Developer | Portfolio",
  description: "AI Expert with 7+ years of experience. Specializing in RAG systems, AI agents, voice agents, and chatbots. Expert in React, Next.js, Python, and cloud architectures. View my portfolio of AI-powered enterprise projects.",
  keywords: ["AI Expert", "RAG Systems", "AI Agents", "Voice Agents", "Chatbots", "Full Stack Developer", "Python Developer", "React Developer", "Cloud Architect", "LLM", "Machine Learning"],
  authors: [{ name: "Ali Abid" }],
  openGraph: {
    title: "Ali Abid - AI Expert & Full Stack Developer",
    description: "AI Expert specializing in RAG, AI agents, voice agents, and chatbots. 7+ years of experience building scalable AI-powered applications",
    type: "website",
  },
};

const navigationLinks = [
  { id: "home", label: "home", href: "#home", icon: <Home className="w-4 h-4" /> },
  { id: "about", label: "about", href: "#about", icon: <User className="w-4 h-4" /> },
  { id: "projects", label: "projects", href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
  { id: "technologies", label: "tech", href: "#technologies", icon: <Code className="w-4 h-4" /> },
  { id: "experience", label: "experience", href: "#experience", icon: <Briefcase className="w-4 h-4" /> },
  { id: "contact", label: "contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MorphingNavigation 
          links={navigationLinks}
          theme="glass"
          scrollThreshold={100}
          enablePageBlur={true}
        />
        {children}
      </body>
    </html>
  );
}
