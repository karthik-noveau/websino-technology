import "../css/Home.css"
import { CourseData } from '../Data/CourseData';
import { InternData } from '../Data/InternData';
import slider_img from '../Assets/slider_img.jpg'
import gmeet from '../Assets/gmeet.png'
import { HiChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BiCode, BiPen } from 'react-icons/bi'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import apollo from '../Assets/clients/apollo.png'
import foodsearcher from '../Assets/clients/foodsearcher.jpg'
import whc from '../Assets/clients/whc.jfif'
function Home() {
    const [cnt, setCnt] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCnt(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);



    console.log("Count is " + cnt);
    console.log("setCount is " + setCnt);

    return (

        <div>
            { }
            {/* title 1 and img_slider */}
            <div className="title_1">
                <p id='themaking-text' data-aos="fade-up">Skynoveau The making wonders - Premium Website Designing Service at an Affordable Cost</p>
                <div className="footer_line footer_line1 ">
                    <hr></hr>
                </div>
                <div className="img_container">
                    <div className="img_main_container">
                        <img src={slider_img} data-aos="zoom-out" />
                        <p data-aos="zoom-out" className={setCnt ? "aft_p" : "pre_p"}>Registration is open now for Courses & Internships at an Affordable package

 </p>
                        <a href="#internships" data-aos="zoom-out" className={setCnt ? "aft_p" : "pre_p"}><button>Enroll now</button></a>
                    </div>
                </div>
            </div>

            {/* what we do */}
            <div className="whatwedo_main_cont">
                <div className="whatwedo_cont">
                    <h2 className="main_title">What We Do</h2>
                    <div className="whatwedo_cont_sub1">
                        <div className="whatwedo_cont_sub2" data-aos="fade-up">
                            <BiCode id='whatwe_icon' />
                            <h3 >Web Development</h3>
                            <button >Know more</button>
                        </div>
                        <div className="whatwedo_cont_sub2" data-aos="fade-up">
                            <BiPen id='whatwe_icon'  />
                            <h3>Grapic Design</h3>
                            <button>Know more</button>
                        </div>
                        <div className="whatwedo_cont_sub2"    data-aos="fade-up">
                            <TbBrandGoogleAnalytics id='whatwe_icon' />
                            <h3>Search Engine Optimization(SEO)</h3>
                            <button>Know more</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* our clients */}
            <h2 className="ourClient_main_title" data-aos="fade-up">Our clients</h2>
            <div className="clients_main_cont">
                <div className="clients_cont">
                    <img src={whc} alt='1' data-aos="fade-up" />
                    <img src={foodsearcher} alt='1' data-aos="fade-up" />
                    <img src={apollo} alt='1' data-aos="fade-up"/>
                </div>
            </div>



            <div className="title_1 " id="onlineclass-title">
                <p>Online Classes</p>
                <div className="footer_line">
                    <hr></hr>
                </div>
               
            </div>
            {/* course and internship list */}
            <div className="list_container">
                <div className="list_main_container" data-aos="fade-up" >
                    <a href="#courses"><button>Course List</button></a>
                    <a href="#internships"><button>Internship List</button></a>
                </div>
            </div>


            {/* features */}
            <div className="features" >
                <ul>
                    <li data-aos="fade-up">Certificate will be provided</li>
                    <li data-aos="fade-up" >Completely practical knowledge</li>
                    <li data-aos="fade-up" >Clear your doubts even after the course completion</li>
                    <li data-aos="fade-up" >With projects and free domain</li>
                </ul>
            </div>

            {/* timing */}
            <div className="class_time">
                <div className="class_time_container">
                    <p id="Training" data-aos="fade-up">Platform:</p>
                    <div className="gmeet_container" >
                        <img src={gmeet} data-aos="fade-up"/>
                    </div>
                </div>
            </div>


            {/* title 2 */}

            <div className="title_2" id="internships">
                <p data-aos="fade-up">Featured Internships</p>
            </div>
            {/* internship list */}

            <div className='courses' >
                {
                    InternData.map((item, index) => (
                        <div className='item_1' key={index} data-aos="fade-up">
                            <div className="item_1_container">
                                <img src={item.image} />
                                <p>{item.text}</p>
                                <a href={item.link}><button>Register Here <HiChevronRight className="item_1_icon" /></button></a>
                            </div>
                        </div>
                    ))
                }

            </div>



            {/* title 3 */}
            <div className="title_2" id="courses">
                <p data-aos="fade-up">Featured Courses</p>
            </div>


            {/* course list */}

            <div className='courses'>
                {
                    CourseData.map((item, index) => (
                        <div className='item_1' key={index} data-aos="fade-up">
                            <div className="item_1_container">
                                <img src={item.image} />
                                <p>{item.text}</p>
                                <a href={item.link}><button>Register Here <HiChevronRight className="item_1_icon" /></button></a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>

    )
}

export default Home;