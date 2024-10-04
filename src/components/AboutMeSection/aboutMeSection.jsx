import face from "../../assets/face.png"
import gitIcon from "../../assets/git-icon.svg"
import html from "../../assets/html-icon.png"
import css from "../../assets/css-icon.png"
import js from "../../assets/js-icon.png"
import react from "../../assets/react-icon.png"
import { BannerSection } from "../BannerSection/bannerSection"

export const AboutMeSection = () => {
    return(
        <section id="first">
            <div className="scroll">
                <div className="about">
                    <div className="container about-info">
                        <img src={face} alt="Foto do designer" className="foto"/>
                        <p className="text1">Hello, my name is Gabriel Nunes</p>
                    </div>
                    <div>
                        <h1 className="title1">I <span>love</span> creating and <span>developing</span> projects
                        </h1>
                        <p  id="about-text" className="text1">Discover here in this environment, created especially for you, all my projects and technologies</p>
                        <div className="centered">
                            <button className="button">See Projects</button>
                            <div  className="gitIcon">
                            <img src={gitIcon} alt="Icone do GitHub" className="git"/>         
                            </div>
                        </div>
                    </div>
                    <div className="iconsFront">
                        <img src={html} alt="Logo html" className="iconsItem"/>
                        <img src={css} alt="Logo css" className="iconsItem"/>
                        <img src={js} alt="Logo js" className="iconsItem"/>
                        <img src={react} alt="Logo react" className="iconsItem"/>
                    </div>
                </div>
                <BannerSection/>
            </div>
        </section>
    )
}