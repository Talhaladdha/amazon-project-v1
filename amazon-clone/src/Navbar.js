import React from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
    return (
        <div className="footbar">
            <MenuIcon className="footbar--hamIcon" />
             <span className="footbar--option">  </span>
            <span className="footbar--option"> All   </span>
            <span className="footbar--option">Mobiles   </span>
            <span className="footbar--option"> Best Sellers  </span>
            <span className="footbar--option">Fashion </span>
            <span className="footbar--option">Customer Service </span>
            <span className="footbar--option"> Prime   
            </span>
            <span className="option--logo"> 🔻  
            </span>
            <span className="footbar--option">Electronics
            </span>
            <span className="footbar--option"> Today's Deal
            </span>
            <span className="footbar--option"> Amazon pay
            </span>
            <span className="footbar--option"> Computer
            </span>
            <span className="footbar--option"> New Releases
            </span>
            <span className="footbar--option"> Home&Kitchen
            </span>
            <span className="footbar--option"> Books
            </span>
            <img className="footbar__navlogo" src=     "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt="amazon"/>

            
        </div>
    )
}

export default Navbar
