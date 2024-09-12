import { useState } from "react"

export const Header = () => {
    const [activeHome, setActiveHome] = useState(true);
    const [activeProjects, setActiveProjects] = useState(false);
    const [activeDM, setActiveDM] = useState(false);
    const [activeContact, setActiveContact] = useState(false);

    return(
        <header className="container header">
            <h1 className="title3">GabrielNunex</h1>
            <nav>
                <ul className="container list">
                    <li><a href="#first" className={`listItem ${activeHome ? "active" : ""}`} onClick={() => {setActiveHome(true); setActiveProjects(false); setActiveDM(false); setActiveContact(false)}}>Home</a></li>
                    <li><a href="#projects" className={`listItem ${activeProjects ? "active" : ""}`} onClick={() => {setActiveHome(false); setActiveProjects(true); setActiveDM(false); setActiveContact(false)}}>Projects</a></li>
                    <li><a href="#digitalMedia" className={`listItem ${activeDM ? "active" : ""}`} onClick={() => {setActiveHome(false); setActiveProjects(false); setActiveDM(true); setActiveContact(false)}}>Digital Media</a></li>
                    <li><a href="#contact" className={`listItem ${activeContact ? "active" : ""}`} onClick={() => {setActiveHome(false); setActiveProjects(false); setActiveDM(false); setActiveContact(true)}}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}