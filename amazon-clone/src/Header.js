import React from 'react';
import './Header.css';
import SearchIcon from  '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';                       
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">

          <Link to="/">
          <img className="header--logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
          </Link>

          <div className="header--location">
          <LocationOnIcon />
          </div>
          <div className="header--optionlocationline">
            <span className="header--optionLineOne">Hello</span>
            <span className="header--optionLineTwo">Select Your Address</span>
          </div>
        
          <div className="header--search">
              
          <div >
            <select className="header--categories">
           <option value=""> All </option>
           <option value="">Amazon Device</option>
           <option value="">Fashion</option>
           <option value="">Baby</option>
           <option value="">Beauty</option>
           <option value="">Book</option>
           <option value="">Electronic</option>
           <option value="">Furniture</option>
           <option value="">Apps</option>
           <option value="">Games</option>
           <option value="">Gift Card</option>


            </select>
          
          </div>

          <input className="header--searchInput" type="text" />
          <SearchIcon className="header--searchIcon" />

          <img className="header--optionflag" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png" alt="flag"/>

          <div >
            <select className="flag--option">
           <option value=""> . </option>
           <option value="">⚪ENGlISH</option>
           <option value="">⚪HINDI</option>
           <option value="">⚪MARATHI</option>
           <option value="">⚪TAMIL</option>
           <option value="">⚪TELGU</option>
           <option value="">⚪KANNAD</option>
           


            </select>
          </div>

          < ArrowDropDownIcon className="header--arrowIcon" />
          
          </div>  

          <div className="header--nav">

           

            <div className="header--option">
            <span className="header--optionLineOne">Hello Guest</span>
            <span className="header--optionLineTwo"> Sign In</span>
            </div>


            <div className="header--option">
                <span className="header--optionLineOne">Return</span>
            <span className="header--optionLineTwo"> & Order</span>
            </div>


            <div className="header--option">
                <span className="header--optionLineOne">Your</span>
            <span className="header--optionLineTwo"> Prime</span>
            </div>

          </div> 
           
          <Link to="/checkout">

          <div className="header--optionBasket">
          <ShoppingCartIcon />
          <span className="header--optionLineTwo header--basketCount"> 0</span>
           </div>

           </Link>

        </div>
    )
}


export default Header
