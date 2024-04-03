import "../css/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import transparent_google from "../Assets/transparent_google.png";

function Footer() {
  const date = new Date();
  return (
    <div>
      <footer>
        <div className="footer_container">
          <div className="f_logo_container">
            <div className="f_logo_wrapper">
              <img src={transparent_google} />
              <div className="f_logo_right">
                <div>Websino</div>
                <div>Technology</div>
              </div>
            </div>
          </div>

          <div className="item_conteiner">
            <div className="f_item_1">
              <ul>
                <li>Company</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Training</Link>
                </li>
              </ul>
            </div>

            <div className="f_item_1">
              <ul>
                <li>Our services</li>
                <li>
                  <Link to="/">Courses</Link>
                </li>
                <li>
                  <Link to="/">Internships</Link>
                </li>
              </ul>
            </div>

            <div className="f_item_1">
              <ul>
                <li>Address</li>
                {/* <li>
                  <a href="https://portfolio.skynoveau.in/">Portfolio</a>
                </li> */}
                <li>
                  <p>142, Rajiv Gandhi Salai, Chennai, TamilNadu 600096</p>
 
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_line">
          <hr></hr>
        </div>

        <div className="copy_rights">
          <p>copyright © {date.getFullYear()} Websino Technology</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
