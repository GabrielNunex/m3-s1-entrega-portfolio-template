import face from '../../assets/face.png'
import fbook from '../../assets/fbook-icon.png'
import insta from '../../assets/insta-icon.png'
import linkedin from '../../assets/linkedin.svg'

export const Footer = () => {
    return(
        <section id='contact'>
            <section>
                <div className='contact_info'>
                    <img src={face} alt="Foto do designer" className='foto'/>
                    <div className='contact_text'>
                        <h2 className='title3'>Thank you!</h2>
                        <p className='text1'>Follow me on my social networks and let's talk
                        </p>
                    </div>
                </div>
            </section>
        
            <section className='contact_icons'>
                <a  href="#contact" className='fbicon_contact'>
                <img src={fbook} alt="Icone do Facebook" className='icon_contact facebook'/>
                </a>
                <a  href="#contact" className='inicon_contact'>
                <img src={insta} alt="Icone do instagram" className='icon_contact instagram'/>
                </a>
                <a  href="#contact" className='linicon_contact'>
                <img src={linkedin} alt="Icone do linkedin" className='icon_contact linkedin'/>
                </a>
            </section>
        </section>
    )
}