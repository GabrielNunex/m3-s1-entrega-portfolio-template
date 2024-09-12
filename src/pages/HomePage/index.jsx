import { AboutMeSection } from "../../components/AboutMeSection/aboutMeSection"
import { Footer } from "../../components/Footer/footer"
import { Header } from "../../components/Header/header"
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
        </main>
        <Footer/>
        </>
    )
}