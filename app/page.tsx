
import Landingpage from "@/components/LandingComponent/Landingpage";
import AboutPage from "@/components/Aboutcomponent/AboutPage";
import TechnologiesPage from "@/components/Technologies/TechnologiesPage";
import ProjectsPage from "@/components/Projects/ProjectsPage";
import { ScrollTimeline } from "@/components/Education/ScrollTimeline";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer/Footer";



export default function Home() {

  // Professional timeline reflecting 7+ years of experience (2017-2024)
  const events = [
    {
      id: "1",
      year: "2024",
      title: "AI Expert & Senior Full Stack Developer",
      subtitle: "Enterprise Solutions Inc.",
      description:
        "Leading AI initiatives and a team of 8 developers in building next-generation AI-powered applications. Architected RAG systems, AI agents, and voice-enabled chatbots. Built microservices handling 10M+ daily requests with AI capabilities. Reduced infrastructure costs by 35% through optimization.",
    },
    {
      id: "2",
      year: "2022 - 2023",
      title: "Senior AI Engineer & Full Stack Developer",
      subtitle: "Tech Innovation Labs",
      description:
        "Designed and implemented AI-powered backend systems using Python, LLMs, and vector databases. Built intelligent chatbots and voice agents for customer service. Improved API response times by 60% and database query performance by 45%. Developed RAG systems for enhanced knowledge retrieval. Mentored 5 junior developers in AI technologies.",
    },
    {
      id: "3",
      year: "2020 - 2021",
      title: "Full Stack Developer & AI Specialist",
      subtitle: "Digital Solutions Agency",
      description:
        "Developed 20+ production applications with AI capabilities for clients across healthcare, finance, and e-commerce. Built intelligent chatbots and conversational AI interfaces. Created React/Next.js frontends and Python/Django backends with AI integrations. Achieved 99.9% uptime for critical systems.",
    },
    {
      id: "4",
      year: "2018 - 2019",
      title: "Software Engineer",
      subtitle: "StartupHub Technologies",
      description:
        "Built MVP products from scratch using modern JavaScript frameworks. Implemented CI/CD pipelines and cloud infrastructure on AWS. Contributed to open-source projects with 500+ GitHub stars.",
    },
    {
      id: "5",
      year: "2017",
      title: "Junior Developer",
      subtitle: "WebDev Solutions",
      description:
        "Started professional journey building responsive web applications. Gained expertise in React, Node.js, and Python. Delivered 15+ client projects in first year with 100% client satisfaction.",
    },
    {
      id: "6",
      year: "2016",
      title: "Computer Science Degree",
      subtitle: "University of Technology",
      description:
        "Graduated Magna Cum Laude with specialization in Software Engineering and Distributed Systems. Completed capstone project on scalable microservices architecture. Active in coding competitions and hackathons.",
    },
  ];

  return (
    <div className="space-y-0">
      <Landingpage />
      <AboutPage />
      <ProjectsPage/>
      <TechnologiesPage/>

      <section id="experience" className="pb-20 bg-gradient-to-b from-white to-indigo-50">
        <ScrollTimeline 
          events={events}
          title="Professional Journey"
          subtitle="7+ years of building scalable solutions and leading technical teams"
          progressIndicator={true}
          cardAlignment="alternating"
          revealAnimation="fade"
          cardVariant="default"
          cardEffect="shadow"
        />
      </section>
      <ContactForm />
      <Footer />
      
    </div>
  );
}
