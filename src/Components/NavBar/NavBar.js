import React, {useState} from 'react';

import Logo from "../../Assets/Images/logo1.png"
import {Link} from "react-scroll"
import {LeftSliders} from "../LeftSliders/LeftSliders";
import {FaBars, FaGithub, FaLinkedin, FaTimes} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BsFillPersonLinesFill, BsInstagram} from "react-icons/bs";

AOS.init();

const NavBar = ({showModal,showError}) => {

    const [phoneMenu, setPhoneMenu] = useState(false);

    const showMenu = () => setPhoneMenu(prev => !prev);

    return (
        <div
            className="h-[80px] fixed z-10 w-full py-2 px-[10px] bg-[#0a192f]">
            {!showModal && !showError &&
                <div data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1500"
                     className="h-full flex items-center justify-between">
                    <div className="h-full">
                        <a href="/">
                            <img className='h-[80px] h-[65px] ' src={Logo} alt="Logo"/>
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
                                 'md:hidden text-3xl fixed left-0 top-0 flex flex-col items-center justify-between w-full h-screen bg-[#0a192f] ease-in duration-300 z-10'
                                : 'fixed text-3xl left-[-100%] top-0 h-screen flex flex-col items-center justify-center ease-in duration-200' }

                        >
                            <ul className='flex flex-col items-center justify-center gap-9 pt-[34%]'>
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

                            <div className='md:hidden'>
                                <ul className="flex">
                                    <li className="px-2 h-[60px] w-[60px] bg-blue-500 flex items-center justify-center text-2xl">
                                        <a href="https://www.linkedin.com/in/yaroslav-kot-9a9714234/" target="_blank" >
                                            <FaLinkedin size={30}/>
                                        </a>
                                    </li>
                                    <li className="px-2 h-[60px] w-[60px] bg-gray-700 flex items-center justify-center text-2xl">
                                        <a href="https://github.com/yakkkot" target="_blank" >
                                            <FaGithub size={30}/>
                                        </a>
                                    </li>
                                    <li className=" px-2 h-[60px] w-[60px] bg-orange-500 flex items-center justify-center">
                                        <a href="https://www.instagram.com/yakkkkot/" target="_blank">
                                            <BsInstagram size={30}/>
                                        </a>
                                    </li>
                                    <li className="px-2 h-[60px] w-[60px] bg-violet-700 flex items-center justify-center">
                                        <a href="/" target="_blank">
                                            <BsFillPersonLinesFill size={30}/>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    {/*}*/}

                </div>}
            {!showModal && !showError && <LeftSliders/>}

        </div>
    );
};

export {NavBar}