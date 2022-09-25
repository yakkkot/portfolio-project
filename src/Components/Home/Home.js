import React from 'react';

import css from "../Home/Home.module.css";
import MyFoto from "../../Assets/Images/myfoto.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = () => {
    return (
        <div name='Home'
             data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="1500"
             className={`${css.main_container} h-[100vh] ml-[150px]`}>
            <div className={`${css.container_text} flex`}>
                <div className="pl-12 w-[75%]">
                    <div>
                        <p className='text-[#bf42ce]  text-xl mb-2'>Hello, my name is</p>
                    </div>

                    <div>
                        <h1 className='text-7xl font-bold mb-1'>Yaroslav Kot</h1>
                        <h1 className="opacity-70 text-6xl font-bold mb-3">I'm a Full Stack Developer.</h1>
                    </div>
                    <div>
                        <p className='w-[75%]'>I’m a full-stack developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.</p>
                    </div>
                    <div className='my-8'>
                        <button className={`${css.block_button}`}>View Pet Projects</button>
                    </div>
                </div>
                <div className="pr-8 w-[25%]">
                    <img src={MyFoto} className={`${css.myfoto}`} alt=""/>
                </div>
            </div>
        </div>
    );
};

export {Home}