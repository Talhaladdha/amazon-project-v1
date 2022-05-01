import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => 
  {
    if (user)
     {
      auth.signOut();
     }
  }
  return (
    <div className="header">

      <Link to="/">
        <img className="header--logo" src="logo.png"alt="amazon" />
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
            <option value="">Action</option>
            <option value="">Shooting</option>
            <option value="">BattelGround</option>
            <option value="">OpenWorld</option>
            <option value="">Racing</option>
            <option value="">Sports</option>
            <option value="">Horror</option>
            <option value="">First Person</option>
            <option value="">Kids</option>
            <option value="">Gift Card</option>


          </select>

        </div>

        <input className="header--searchInput" type="text" placeholder='Search....'/>
        <SearchIcon className="header--searchIcon" />



        <div >
          <select className="flag--option">
            <option value="">  </option>
            <option value="">⚪ENGlISH</option>
            <option value="">⚪HINDI</option>
            <option value="">⚪MARATHI</option>
            <option value="">⚪TAMIL</option>
            <option value="">⚪TELGU</option>
            <option value="">⚪KANNAD</option>



          </select>
        </div>



      </div>

      <div className="header--nav">
        <Link to={!user && '/login'} >

          <div onClick={handleAuthentication} className="header--option">
            <span className="header--optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header--optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>

        </Link >





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
          <span className="header--optionLineTwo header--basketCount">{cart.length}</span>
        </div>

      </Link>

    </div>
  )
}


export default Header
