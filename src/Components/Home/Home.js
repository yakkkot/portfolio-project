import React from 'react';

import css from "../Home/Home.module.css";
import MyFoto from "../../Assets/Images/myfoto.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-scroll";

AOS.init();

const Home = () => {
    return (
        <div name='Home'
             data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="1500"
             className="sm:h-screen h-[115vh]  lg:ml-[10%] px-[10px]">
            <div className="relative md:top-[30%] top-[15vh] md:flex md:flex-row flex-col gap-4">
                <div className="md:w-[75%] w-full flex flex-col gap-2">
                    <div>
                        <p className='text-[#bf42ce] inline md:text-xl'>Hello, my name is</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className='md:text-7xl text-5xl font-bold '>Yaroslav Kot</h1>
                        <h1 className="opacity-70 md:text-6xl text-4xl font-bold">I'm a Full Stack Developer.</h1>
                    </div>
                    <div>
                        <p className='md:w-[75%] w-full'>I’m a specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.</p>
                    </div>
                    <div className="md:hidden  my-3 w-full flex items-center justify-center">
                        <img src={MyFoto} className={`${css.myfoto} max-h-[350px]`} alt={MyFoto}/>
                    </div>
                    <div className='my-8 md:self-start self-center'>
                        <Link to={'Works'} smooth={true} duration={500}>
                            <button className={`${css.block_button} min-w-[200px]`}>View Pet Projects</button>
                        </Link>
                    </div>
                </div>
                <div className="hidden sm:flex lg:h-[280px] sm:h-[230px] sm:mt-4">
                    <img src={MyFoto} className={`${css.myfoto}`} alt={MyFoto}/>
                </div>
            </div>
        </div>
    );
};

export {Home}