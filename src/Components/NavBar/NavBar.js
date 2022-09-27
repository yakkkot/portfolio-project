import React, {useState} from 'react';

import Logo from "../../Assets/Images/logo1.png"
import {Link} from "react-scroll"
import {LeftSliders} from "../LeftSliders/LeftSliders";
import {FaBars,FaTimes} from "react-icons/fa";
import sts from "./NavBar.module.css"

const NavBar = ({showModal,showError}) => {

    const [phoneMenu, setPhoneMenu] = useState(false);

    const showMenu = () => setPhoneMenu(prev => !prev);

    return (
        <div className="h-[80px] fixed z-10 w-full py-2 px-[10px]">
            {!showModal && !showError &&
                <div className="h-full flex items-center justify-between">
                    <div className="h-full">
                        <a href="/">
                            <img className='h-[80px]' src={Logo} alt="Logo"/>
                        </a>
                    </div>

                    <div className='md:flex md:items-center md:text-xl hidden'>
                        <ul className='flex items-center'>
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

                    <div onClick={showMenu} className="py-2 px-2 z-20 md:hidden cursor-pointer">
                        {!phoneMenu ? <FaBars size={30}/> : <FaTimes size={25}/>}
                    </div>

                    {/*{phoneMenu &&*/}
                        <div className={phoneMenu ?
                                 'md:hidden text-2xl fixed left-0 top-0 flex flex-col items-center justify-center w-full h-screen bg-[#0a192f] ease-in duration-300 z-10'
                                : 'fixed text-2xl left-[-100%] top-0 h-screen flex flex-col items-center justify-center ease-in duration-200' }

                        >
                            <ul className='flex flex-col items-center justify-center gap-6'>
                                <li className='li_navbar'>
                                    {' '}
                                    <Link onClick={showMenu} to={'Home'} smooth={true} duration={500}>
                                        Home
                                    </Link>
                                </li>
                                <li className='li_navbar'>
                                    {' '}
                                    <Link onClick={showMenu} to={'About'} smooth={true} duration={500}>
                                        About
                                    </Link>
                                </li>
                                <li className='li_navbar'>
                                    {' '}
                                    <Link onClick={showMenu} to={'Experience'} smooth={true} duration={500}>
                                        Experience
                                    </Link>
                                </li>
                                <li className='li_navbar'>
                                    {' '}
                                    <Link onClick={showMenu} to={'Works'} smooth={true} duration={500}>
                                        Works
                                    </Link>
                                </li>
                                <li className='li_navbar'>
                                    <Link onClick={showMenu} to={'Contact'} smooth={true} duration={500}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    {/*}*/}

                </div>}
            {!showModal && !showError && <LeftSliders/>}

        </div>
    );
};

export {NavBar}