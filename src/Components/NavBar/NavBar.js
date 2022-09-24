import React from 'react';

import Logo from "../../Assets/Images/logo1.png"
import {Link} from "react-scroll"
import {LeftSliders} from "../LeftSliders/LeftSliders";
const NavBar = () => {
    return (

        <div>
            <div className='all_nav fixed z-3 w-full flex items-center justify-between my-2 px-4'>
                <div>
                    <a href="/">
                        <img className='w-[10vh]' src={Logo} alt="Logo"/>
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
                                Work
                            </Link>
                        </li>
                        <li className='li_navbar'>
                            <Link to={'Contact'} smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
            <LeftSliders/>
        </div>
    );
};

export {NavBar}