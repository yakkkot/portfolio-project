import React from 'react';

import Logo from "../../Assets/Images/logo1.png"
import {Link} from "react-scroll"
import {LeftSliders} from "../LeftSliders/LeftSliders";
const NavBar = ({showModal,showError}) => {
    return (
        <div className="h-[80px] fixed z-10 w-full py-2 px-[16px]">
            {!showModal && !showError &&
                <div className="h-full flex items-center justify-between" >
                    <div className="h-full">
                        <a href="/">
                            <img className='h-[80px]' src={Logo} alt="Logo"/>
                        </a>
                    </div>

                    <div>
                        <ul className='flex items-center text-xl'>
                            <li className='li_navbar'>
                                <Link to={'Home'} smooth={true} duration={500}>
                                    Home
                                </Link>
                            </li>
                            <li className='li_navbar'>
                                <Link to={'About'} smooth={true} duration={500}>
                                    About
                                </Link>
                            </li>
                            <li className='li_navbar'>
                                <Link to={'Experience'} smooth={true} duration={500}>
                                    Experience
                                </Link>
                            </li>
                            <li className='li_navbar'>
                                <Link to={'Works'} smooth={true} duration={500}>
                                    Works
                                </Link>
                            </li>
                            <li className='li_navbar'>
                                <Link to={'Contact'} smooth={true} duration={500}>
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>}
            {!showModal && !showError && <LeftSliders/>}

        </div>
    );
};

export {NavBar}