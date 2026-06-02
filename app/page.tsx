
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
      year: "2025 - Present",
      title: "AI Engineer & Full Stack Developer",
      subtitle: "BlenSPark",
      description:
         "Developed 10+ production applications with AI capabilities for clients across healthcare, finance, and e-commerce. Built intelligent chatbots and conversational AI interfaces. Created React/Next.js frontends and Python/Django backends with AI integrations. Developed RAG systems for enhanced knowledge retrieval"
    },
    {
      id: "2",
      year: "2023 - 2025",
      title: "Full Stack Developer",
      subtitle: "BlenSpark",
      description:
  "Built full-stack solutions with React, Next.js, and Django, integrating APIs, databases, authentication systems, and responsive frontend interfaces."
    },
    {
      id: "3",
      year: "2023",
      title: "Python Developer Intern",
      subtitle: "BlenSpark",
      description:
        "Developed backend applications using Django while creating web scraping and automation solutions to streamline data collection and business processes."
       },
    {
      id: "4",
      year: "2021 - 2025",
      title: "Computer Science Degree",
      subtitle: "University of Management and Technology",
      description:  "Studied core computer science concepts including programming, algorithms, database systems, software engineering, and web application development."
          },
    {
      id: "5",
      year: "2019 - 2021",
      title: "Intermidiate",
      subtitle: "Unique College",
      description:
       "Completed Intermediate education in Pre-Engineering, building a strong foundation in mathematics, physics, and analytical problem-solving.",
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
          subtitle="2+ years of building scalable AI capabilities solutions and Automation Expert"
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
