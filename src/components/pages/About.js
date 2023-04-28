import '../css/About.css'
import about_1 from '../Assets/about_1.png'
import about_2 from '../Assets/about_2.png'
import karthik from '../Assets/karthik.png'
import { useEffect } from 'react'

function About() {

    useEffect(()=>{
        window.scrollTo(0,0);
    });

    return (
        <div>

            <div className="abt_cont">
                <div className="img_main_cont">
                    <div className="img_cont">
                        <img src={about_1} />
                        <img src={about_2} />
                        <p  data-aos="flip-left">Inspiring discovery through creativity.</p>
                    </div>
                </div>

                <div className='abt_title_cont'>
                    <p  data-aos="flip-left">Learn About us.</p>
                </div>

                <div className="desc_container"  data-aos="fade-right">
                    <div className="main_desc_container">
                        <p>
                            Skynoveau is a top-notch Website designing
                            company comprises a peerless team that is striving hard to provide visually
                            appealing Websites.
                            Moreover, we are upholding a high standard of excellence
                            in building amazing and legitimate websites,crafting Best-in-class Graphic designs for logos
                             
                        </p>
                    </div>

                </div>

                <div className="desc_container"  data-aos="fade-left">
                    <div className="main_desc_container">
                        <p>
                             We are providing effective courses and Internships with fully Paractical knowledge and Hands-on projects.
                              
                             
                        </p>
                    </div>

                </div>


                <div className="ceo_cont">
                    <div className="ceo_main_cont">
                        <img src={karthik} data-aos="zoom-in"/>
                        <p data-aos="flip-left">Karthik B</p>
                        <p data-aos="flip-right">Founder & CEO</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About