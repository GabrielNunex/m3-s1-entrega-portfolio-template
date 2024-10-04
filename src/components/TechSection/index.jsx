import whats from "../../assets/whatsapp.svg"
import email from "../../assets/email.svg"
import linkedin from "../../assets/linkedin.svg"

export const TechSection = () => {
    return(
        <section id="digitalMedia">  
            <section className="dm_info">
                <h1 className="title2">Let"s set up a conversation and <br /><span>develop our creativity</span> <br />together?
                </h1>
                <p className="text1">Advertise your brand organically within Dribbble’s design inspiration feed.</p>
            </section>

            <section className="dm_links">
                <div className="link_type">
                    <div className="link_type-icon gradient-green">
                        <img src={whats} alt="Icone do whatsApp"/>
                    </div>
                    <div className="links_info">
                        <h2 className="title4">My phone</h2>
                        <p className="text2">I"m available for a voice chat, let"s about creativity together?</p>
                        <a href="#" className="cleanLink">Call Now</a>
                    </div>
                </div>
                <div className="link_type">
                    <div className="link_type-icon gradient-magenta">
                        <img src={email} alt="Icone de email"/>
                    </div>
                    <div className="links_info">
                        <h2 className="title4">My email</h2>
                        <p className="text2">Send me an email reporting feedbacks, suggestions and ideas</p>
                        <a href="#" className="cleanLink">Send email now</a>
                    </div>
                </div>
                <div className="link_type">
                    <div className="link_type-icon gradient-blue">
                        <img src={linkedin} alt="Icone do Linkeding"/>
                    </div>
                    <div className="links_info">
                        <h2 className="title4">My Linkedin</h2>
                        <p className="text2">We can create more constant interactions as well as a sharing network</p>
                        <a href="#" className="cleanLink">Go to Telegram News</a>
                    </div>
                </div>
            </section>
        </section>
    )
}