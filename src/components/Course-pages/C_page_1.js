import "../css/CoursePage.css";
import { Course_page_Data } from "../Data/Course_page_Data";
import payment from '../Assets/payment.png'
import { useEffect, useState } from 'react'
import Payments from "../pages/Payments";


function C_page_1() {
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
                count ? (<div className="blur_cont"><Payments amount={Course_page_Data[0].price} /></div>) : ""
            }


            <div className="detail_container">
                <div className="detail_main_container">
                    <p className="title_text" data-aos="flip-up">Course :{Course_page_Data[0].C_title} </p>


                    {/* image container */}
                    <div className="detail_img_contanier" data-aos="fade-right">
                        <div className="detail_img">
                            <img src={Course_page_Data[0].image} />
                        </div>
                        <div className="img_txt_container">
                            <p>{Course_page_Data[0].C_des}</p>
                        </div>

                    </div>

                    <hr></hr>

                    {/* offer container */}
                    <div className="description_main_container">
                        <div className="description_container">
                            <div className="offer_container" >
                                <p data-aos="flip-up">What you'll learn</p>
                                <ul>
                                    {Course_page_Data[0].topics.map((itm) => (
                                        <li data-aos="flip-left">{itm.t1}</li>
                                    ))
                                    }
                                </ul>
                            </div>

                            {/* payment */}
                            <div className="payment_container" data-aos="fade-left">
                                <div className="pay_main_container">
                                    <img src={payment} />
                                    <p>Rs: ₹{Course_page_Data[0].price}/-</p>
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

export default C_page_1;
