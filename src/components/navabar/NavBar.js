import '../navabar/NavBar.css'
import transparent_google from '../Assets/transparent_google.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'


function NavBar() {

    const [isMobile, setIsMobile] = useState(false);
    const Clicked = () => {
        setIsMobile(!isMobile)
    }

    return (
        <div>

            <div className="navbar">
            
                <div className="nav_container">

                    {/* logo */}
                    <div className="logo">
                        <Link to="/Home" style={{ textDecoration: 'none' }}>
                            <div className="logo_container">
                                <img src={transparent_google} />
                                <p>Skynoveau</p>
                            </div>
                        </Link>
                    </div>

                    {/* search bar */}
                    <div className="search_bar">
                        <input type="text" />
                        <AiOutlineSearch className="search_icon" />
                    </div>


                    {/* navbar menu icon for mb */}
                    <div className="nav_bar_icon" onClick={Clicked}>
                        <HiMenuAlt3 className="bar_icon" />
                    </div>

                    {/* nav menu icon for desktop */}
                    <div className={isMobile ? "menu_b_items_mb" : "menu_b_items"} >
                        <div className="menu_b_items_cont">
                            <ul>
                                <li><Link to="/Home">Home</Link></li>
                                {/* <li><Link to="/About">About</Link></li> */}
                                {/* <li><a href="https://skynoveau.netlify.app/" target="_blank">Portfolio</a></li> */}
                                <li><Link to="/Payment">Payment</Link></li>
                            </ul>
                        </div>

                    </div>


                </div>

            </div>

        </div>

    )


}

export default NavBar;