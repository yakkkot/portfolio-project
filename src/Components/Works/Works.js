import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Calculator from "../../Assets/Images/calculator.png"
import Todo from "../../Assets/Images/todo.png"
import Watch from "../../Assets/Images/stopwatch.png"
import OneWork from "./OneWork/OneWork";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";

AOS.init();

const Works = () => {
    return (
        <div name='Works'
             data-aos="fade-right"
             data-aos-duration="1500"
             className="w-full h-[100vh] flex items-center justify-center flex-col">
            <div>
                <div className="pb-4">
                    <p className="text-4xl font-bold border-b-4 border-b-[#bf42ce] inline">Works</p>
                </div>
                <div className="flex items-center my-5">
                    <AiOutlineFundProjectionScreen color={'#bf42ce'} size={30}/>
                    <p className="mx-3 text-[16px]">Check out some of my Pet Projects</p>
                </div>
                <div className="flex items-center my-2 flex-col gap-[10px]">
                    <div className="flex items-center gap-[10px]">
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <OneWork image={Watch} width={'w-[310px]'} height={'h-[210px]'}/>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <OneWork image={Calculator} width={'w-[310px]'} height={'h-[210px]'}/>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="1000">
                        <OneWork image={Todo} width={'w-[630px]'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Works}