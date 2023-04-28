import '../css/Footer.css';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { RiLinkedinFill } from 'react-icons/ri'
import { FiMail } from 'react-icons/fi'
import {Link} from 'react-router-dom'
 

function Footer() {
    const date = new Date();
    return (
        <div>
            <footer>
                
                <div className="footer_container">
                    <div className="f_logo_container">
                        <img src="https://firebasestorage.googleapis.com/v0/b/book-store-2701c.appspot.com/o/Footer%2Ffooter_logo.png?alt=media&token=5598c3e5-46c6-47e3-963c-1a9df692f50d"/>
                        <div className="f_icon_container">
                            <a href="https://www.facebook.com/profile.php?id=100089134988451" target="_blank"><FaFacebookF className="f_icon"/></a>
                            <a href="https://www.instagram.com/skynoveau.in/" target="_blank"><BsInstagram className="f_icon" /></a>
                            <a href="https://www.linkedin.com/company/skynoveau-technology/" target="_blank"><RiLinkedinFill className="f_icon" /></a>
                            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=skynoveau.in@gmail.com" target="_black"><FiMail className="f_icon" /></a>
                        </div>
                    </div>

                    <div className="item_conteiner" >
                        <div className="f_item_1" >
                            <ul>
                                <li>Company</li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/">Training</Link></li>
                            </ul>
                        </div>

                        <div className="f_item_1" >
                            <ul>
                                <li>Our services</li>
                                <li><Link to="/">Courses</Link></li>
                                <li><Link to="/">Internships</Link></li>
                            </ul>
                        </div>

                        <div className="f_item_1" >
                            <ul>
                                <li>Quick Links</li>
                                <li><a href="https://portfolio.skynoveau.in/">Portfolio</a></li>
                                <li><Link to="/Payment">Payment</Link></li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="footer_line">
                    <hr></hr>
                </div>
                
                




                <div className="copy_rights">
                    <p>copyright © {date.getFullYear()} Skynoveau Technology</p>
                    <p>All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer