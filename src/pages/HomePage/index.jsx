import { AboutMeSection } from "../../components/AboutMeSection/aboutMeSection"
import { Footer } from "../../components/Footer/footer"
import { Header } from "../../components/header/header"
import { ProjectsSection } from "../../components/ProjectsSection"
import { TechSection } from "../../components/TechSection"

export const HomePage = () => {
    return(
        <>
        <Header />
        <main>
            <AboutMeSection/>
            <ProjectsSection/>
            <TechSection/>
            <Footer/>
        </main>
        </>
    )
}