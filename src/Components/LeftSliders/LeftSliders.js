import React from 'react';

import {FaGithub, FaLinkedin} from "react-icons/fa";
import {BsFillPersonLinesFill,BsTelegram} from "react-icons/bs";

const LeftSliders = () => {
    return (
        <div className='hidden lg:flex fixed flex-col top-[34%] left-0 z-20'>
            <ul className='container_links_nav'>
                <li className="small_container px-2 w-[160px] h-[60px] left_menu_container bg-blue-600 flex items-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com/in/yakkkot" target="_blank" className='flex items-center justify-between w-full'>LinkedIn
                        <FaLinkedin color={'white'} size={30}/>
                    </a>
                </li>
                <li className="small_container px-2 w-[160px] h-[60px] left_menu_container bg-gray-700 flex items-center gap-4 text-2xl">
                    <a href="https://github.com/yakkkot" target="_blank" className='flex items-center justify-between w-full'>GitHub
                        <FaGithub color={'white'} size={30}/>
                    </a>
                </li>
                <li className="small_container px-2 w-[160px] h-[60px] left_menu_container bg-blue-500 flex items-center gap-4 text-2xl">
                    <a href="https://t.me/yakkkot" target="_blank" className='flex items-center justify-between w-full'>Telegram
                        <BsTelegram color={'white'} size={30}/>
                    </a>
                </li>
                <li className="small_container px-2 w-[160px] h-[60px] left_menu_container bg-violet-700 flex items-center gap-4 text-2xl">
                    <a href="https://resume.io/r/DpMLvp5CE" target="_blank" className='flex items-center justify-between w-full'>Resume
                        <BsFillPersonLinesFill color={'white'} size={30}/>
                    </a>
                </li>
            </ul>

        </div>
    );
};

export {LeftSliders};