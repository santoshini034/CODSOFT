import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = (token) => {
    //declarations
    const [show, setShow] = useState(true);
    const [tok, setTok] = useState(token);
    const [dark, setDark] = useState(false);
    const navigate  = useNavigate();

    //it will be show after a user click user button in navbar
    const userli = () => {
        const list = document.querySelector(".userList");
            setShow(!show);
            if (show == true) {
                list.style.display = "flex";
            }else{
                list.style.display = "none";
            }
        }

    //Darkmode
    const darkmode = () => {
        const darkElement1 = document.querySelectorAll('.Dark1');
        const darkElement2 = document.querySelectorAll('.Dark2');
        setDark(!dark);
            Array.from(darkElement1).map(darkEl1 => darkEl1.classList.toggle('dark-1')
            );
            Array.from(darkElement2).map(darkEl2 => darkEl2.classList.toggle('dark-2')
            );
        }

    //logic for button in menu class
    const navi = () => {
        const t = tok.token;
        navigate('/create',{state: t});
    }
    
    

  return (
    //navbar heading
    <div className="Navar Dark2">
        <Link to="/" className='menuLink Dark2'>
            <div className="logo Dark2">
                <img src="public/logo.jpeg" alt="logo" />
                <span className='Dark2'>A sight to the world</span>
            </div>  
        </Link>
        {/* menu bar */}
        <div className="menu Dark2">
            <ul className='Dark2'>
                <a onClick={navi} className='menuLink Dark2'>
                    <li className='Dark2'><i class="fa-solid fa-circle-plus Dark2"></i>Create</li>
                </a>
                <Link to="/liked" className='menuLink Dark2'>
                    <li><i className="fa-solid fa-thumbs-up Dark2"></i>liked</li>
                </Link>
                <Link to="/yourpost" className='menuLink Dark2'>
                    <li><i className="fa-solid fa-play Dark2"></i>Your Post</li>
                </Link>
                <Link to="/watchlater" className='menuLink Dark2'>
                    <li><i className="fa-solid fa-clock Dark2"></i>Watch later</li>
                </Link>
            </ul>
        </div>
        {/* usertab */}
        <div className="user Dark2">
            {/* hidden part of user */}
        <div className="userList Dark2">
            <Link to='/account' className='acc Dark2'><p className='Dark2'><i class="fa-solid fa-user Dark2"></i>Account</p></Link>
            <div className="form-check form-switch Dark2">
                <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" onClick={darkmode}/>
                <label className="form-check-label Dark2" for="flexSwitchCheckDefault">Darkmode</label>
            </div>
            <p><i class="fa-solid fa-right-from-bracket"></i>Logout</p>
        </div>
            <p onClick={userli} className='Dark2'><i class="fa-solid fa-user Dark2"></i><b>User</b></p>
        </div>
    </div>
  )
}

export default NavBar
