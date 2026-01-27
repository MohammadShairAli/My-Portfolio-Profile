'use client';

import ScrollReveal from '@/components/Aboutcomponent/ScrollReveal';
import CountUp from "@/components/Aboutcomponent/CountUp";
import { Code, Cloud, Database, Zap, Brain, Bot } from 'lucide-react';

export default function AboutPage() {
  return (
    <section id="about" className="min-h-screen w-full py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <ScrollReveal textClassName="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI Expert & Full Stack Developer | RAG & AI Agents Specialist
            </ScrollReveal>

            <ScrollReveal textClassName="text-lg sm:text-xl text-gray-700 leading-relaxed">
              With over <span className="font-bold text-indigo-600">7 years</span> of professional experience, 
              I've built a career specializing in <span className="font-bold text-purple-600">AI solutions</span>, 
              full-stack web development, and cloud infrastructure. My expertise spans RAG (Retrieval-Augmented Generation) 
              systems, AI agents, voice agents, chatbots, modern JavaScript frameworks, Python backend systems, and 
              cloud-native architectures.
            </ScrollReveal>

            <ScrollReveal textClassName="text-lg sm:text-xl text-gray-700 leading-relaxed">
              I've successfully built intelligent AI-powered applications including conversational chatbots, voice-enabled 
              agents, and RAG systems that enhance knowledge retrieval and user interactions. I've delivered enterprise-grade 
              applications serving millions of users, optimized database performance by up to 60%, and architected 
              microservices that handle high-traffic loads with AI capabilities.
            </ScrollReveal>

            <ScrollReveal textClassName="text-lg sm:text-xl text-gray-700 leading-relaxed">
              My AI expertise includes working with large language models (LLMs), vector databases, semantic search, 
              prompt engineering, and building autonomous AI agents that can reason, plan, and execute complex tasks. 
              I combine AI innovation with technical excellence to deliver solutions that drive measurable business results.
            </ScrollReveal>
          </div>

          {/* Right Column - Skills Icons */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Brain className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI & ML</h3>
              <p className="text-gray-600">RAG, LLMs, AI Agents, Voice Agents, Chatbots</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Code className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Full Stack</h3>
              <p className="text-gray-600">React, Next.js, Node.js, TypeScript, Python</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Cloud className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600">AWS, Docker, Kubernetes, CI/CD</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data & AI</h3>
              <p className="text-gray-600">Vector DBs, PostgreSQL, MongoDB, Redis, Celery</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Experience */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-baseline justify-center space-x-2 mb-4">
              <CountUp
                from={0}
                to={7}
                duration={2}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold"
                startCounting={true}
              />
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold">+</span>
            </div>
            <p className="text-xl font-semibold text-center">Years of Experience</p>
            <p className="text-sm text-indigo-100 text-center mt-2">Building scalable solutions</p>
          </div>

          {/* Projects */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-baseline justify-center space-x-2 mb-4">
              <CountUp
                from={0}
                to={150}
                duration={2.5}
                separator=","
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold"
                startCounting={true}
              />
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold">+</span>
            </div>
            <p className="text-xl font-semibold text-center">Projects Delivered</p>
            <p className="text-sm text-purple-100 text-center mt-2">From startups to enterprises</p>
          </div>

          {/* Clients */}
          <div className="bg-gradient-to-br from-pink-500 to-red-600 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-baseline justify-center space-x-2 mb-4">
              <CountUp
                from={0}
                to={80}
                duration={2}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold"
                startCounting={true}
              />
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold">+</span>
            </div>
            <p className="text-xl font-semibold text-center">Satisfied Clients</p>
            <p className="text-sm text-pink-100 text-center mt-2">Long-term partnerships</p>
          </div>
        </div>
      </div>
    </section>
  );
}
