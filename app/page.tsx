
import Landingpage from "@/components/LandingComponent/Landingpage";
import AboutPage from "@/components/Aboutcomponent/AboutPage";
import TechnologiesPage from "@/components/Technologies/TechnologiesPage";
import ProjectsPage from "@/components/Projects/ProjectsPage";
import { ScrollTimeline } from "@/components/Education/ScrollTimeline";



export default function Home() {

  const events = [
  {
    year: "2023 - Present",
    title: "Major Achievement",
    subtitle: "Organization Name",
    description: "Description of the achievement."
  },
  {
    year: "2022",
    title: "Important Milestone",
    subtitle: "Organization Name",
    description: "Details about the milestone."
  },
  {
    year: "2022",
    title: "Important Milestone",
    subtitle: "Organization Name",
    description: "Details about the milestone."
  },
  {
    year: "2022",
    title: "Important Milestone",
    subtitle: "Organization Name",
    description: "Details about the milestone."
  },
]

  return (
    <div className="space-y-10">
      <Landingpage />
      <AboutPage />
      <ProjectsPage/>
      <TechnologiesPage/>

      <ScrollTimeline 
      // events={events}
      // title="My Journey"
      // subtitle="Scroll to explore the timeline"
      // progressIndicator={true}
      // cardAlignment="alternating"
      // revealAnimation="fade"
 
    />
      
    </div>
  );
}
