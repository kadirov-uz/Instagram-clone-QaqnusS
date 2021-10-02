import React, {useState} from 'react';
import './Header.css';
import { FiSearch, FiHome, FiHeart } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import { RiMessengerLine, RiMessengerFill } from 'react-icons/ri';
import { IoCompassOutline } from 'react-icons/io5';
import {CgProfile} from 'react-icons/cg';
import { useStateValue } from '../../context/stateprovider/StateProvider';





function Header() {
    const location = useLocation();
    const [openProfile, setOpenProfile] = useState(false);
    const [{user}] = useStateValue();
  function cutEmail(user){
    if(typeof user === "string"){
        return [...user].splice(0, user.search("@")).join("");

    }
     return ""
  }
  let userName = cutEmail(user);
  
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
                </div>
                <div className="header__search">
                    <div className="header__searchbar">
                        <FiSearch/>
                        <input type="text"  placeholder="Search"/>
                    </div>
                </div>
                <ul className="header__collection">
                    <li className="header__item">
                         <NavLink to="/">
                            {
                               location.pathname === "/" ? <AiFillHome/> : <FiHome/>
                            }
                         </NavLink>
                    </li>
                    <li className="header__item">
                         <NavLink to="/messenger">
                            {
                               location.pathname === "/messenger" ? <RiMessengerFill/> : <RiMessengerLine />
                            }
                         </NavLink>
                    </li>
                    <li className="header__item">
                         <NavLink to="/">
                            <IoCompassOutline />
                         </NavLink>
                    </li>

                    <li className="header__item">
                         <NavLink to="/">
                            <FiHeart />
                         </NavLink>
                    </li>
                    
                    <li className="header__item" onClick={() => setOpenProfile(!openProfile)}>
                         
                            <CgProfile />
                            {
                                openProfile ? 
                                <ul className="profile_options">
                                    <li className="option"><NavLink to={`/${userName}`}>Profile</NavLink></li>
                                
                                </ul> : <></>
                            }
                            
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
