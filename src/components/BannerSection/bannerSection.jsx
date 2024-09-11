import page1 from '../../assets/pages/1.png'
import page2 from '../../assets/pages/2.png'
import page3 from '../../assets/pages/3.png'
import page4 from '../../assets/pages/4.png'
import page5 from '../../assets/pages/5.png'

export const BannerSection = () => {
    return(
        <>
        <div  className='banners'>
        <img src={page1} alt="Apresentação de projetos" className='banners-img'/>
        <img src={page2} alt="Apresentação de projetos" className='banners-img'/>
        <img src={page3} alt="Apresentação de projetos" className='banners-img'/>
        <img src={page4} alt="Apresentação de projetos" className='banners-img'/>
        <img src={page5} alt="Apresentação de projetos" className='banners-img'/>
        <img src={page1} alt="Apresentação de projetos" className='banners-img'/>
        <img src={page2} alt="Apresentação de projetos" className='banners-img'/>
        <img src={page3} alt="Apresentação de projetos" className='banners-img'/>
        <img src={page4} alt="Apresentação de projetos" className='banners-img'/>
        <img src={page5} alt="Apresentação de projetos" className='banners-img'/>
        </div>
        </>
    )
}
