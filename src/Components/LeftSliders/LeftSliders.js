import React from 'react';

import {FaGithub, FaLinkedin} from "react-icons/fa";
import {BsFillPersonLinesFill,BsInstagram} from "react-icons/bs";

const LeftSliders = () => {
    return (
        <div className='hidden lg:flex fixed flex-col top-[34%] left-0 z-20'>
            <ul className='container_links_nav'>
                <li className="small_container px-2 w-[160px] h-[60px] left_menu_container bg-blue-500 flex items-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com/in/yaroslav-kot-9a9714234/" target="_blank" className='flex items-center justify-between w-full'>LinkedIn
                        <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className="small_container px-2 w-[160px] h-[60px] left_menu_container bg-gray-700 flex items-center gap-4 text-2xl">
                    <a href="https://github.com/yakkkot" target="_blank" className='flex items-center justify-between w-full'>GitHub
                        <FaGithub size={30}/>
                    </a>
                </li>
                <li className="small_container px-2 w-[160px] h-[60px] left_menu_container bg-orange-500 flex items-center gap-4 text-xl">
                    <a href="https://www.instagram.com/yakkkkot/" target="_blank" className='flex items-center justify-between w-full'>Inst
                        <BsInstagram size={30}/>
                    </a>
                </li>
                <li className="small_container px-2 w-[160px] h-[60px] left_menu_container bg-violet-700 flex items-center gap-4 text-2xl">
                    <a href="/" target="_blank" className='flex items-center justify-between w-full'>Resume
                        <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>
    );
};

export {LeftSliders};