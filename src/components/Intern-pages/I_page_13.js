import "../css/CoursePage.css";
import { Intern_page_Data } from "../Data/Intern_page_Data";
import payment from '../Assets/payment.png'
import { useEffect, useState } from 'react'
import Payments from "../pages/Payments";

function I_page_13() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const [count, setCount] = useState(false);
    const handleSubmit = () => {
        setCount((item) => !item);
    }
    return (
        <div>
            {
                count ? (<div className="blur_cont"><Payments amount={Intern_page_Data[11].price} /></div>) : ""
            }

            <div className="detail_container" >
                <div className="detail_main_container">
                    <p className="title_text" data-aos="flip-up">Internship :{Intern_page_Data[11].C_title} </p>


                    {/* image container */}
                    <div className="detail_img_contanier" data-aos="fade-right">
                        <div className="detail_img">
                            <img src={Intern_page_Data[11].image} />
                        </div>
                        <div className="img_txt_container">
                            <p>{Intern_page_Data[11].C_des}</p>
                        </div>

                    </div>

                    <hr></hr>

                    {/* offer container */}
                    <div className="description_main_container">
                        <div className="description_container">
                            <div className="offer_container" >
                                <p data-aos="flip-up">What you'll learn</p>
                                <ul>
                                    {Intern_page_Data[11].topics.map((itm) => (
                                        <li data-aos="flip-left">{itm.t1}</li>
                                    ))
                                    }
                                </ul>
                            </div>

                            {/* payment */}
                            <div className="payment_container" data-aos="fade-left">
                                <div className="pay_main_container">
                                    <img src={payment} />
                                    <p>Rs: ₹{Intern_page_Data[11].price}/-</p>
                                    <a href="https://forms.gle/NsYpqTHJhmbGvs7Q7" target="_blank"><button>Register here</button></a>
                          

                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default I_page_13;