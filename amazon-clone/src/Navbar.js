import React from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
    return (
        <div className="footbar">
            <MenuIcon className="footbar--hamIcon" />
             <span className="footbar--option">  </span>
            <span className="footbar--option"> HOME   </span>
            <span className="footbar--option">  REVIEWS </span>
            <span className="footbar--option"> GAMES </span>
            <span className="footbar--option">NEWS </span>
            <span className="footbar--option">VIDEOS</span>
            <span className="footbar--option"> GALLERY 
            </span>
            <span className="option--logo"> 🔻  
            </span>
            <span className="footbar--option">NEW RELEASES
            </span>
            <span className="footbar--option"> TODAY'S DEAL
            </span>
            <span className="footbar--option"> BLOG
            </span>
            <span className="footbar--option"> LATEST TOPICS
            </span>
            <span className="footbar--option"> TOP GAMES
            </span>
            <span className="footbar--option"> TOP STORIES
            </span>
            <span className="footbar--option"> CONTACTS
            </span>
            {/* <img className="footbar__navlogo" src=     "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt="amazon"/> */}

            
        </div>
    )
}

export default Navbar
