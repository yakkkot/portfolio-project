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
             className="w-full h-screen flex items-center justify-center flex-col px-[10px] ">
            <div className="w-full max-w-[1000px] flex items-center justify-center flex-col">
                <div className="max-w-[680px] w-full flex flex-col items-center justify-center">
                    <div className="self-start w-full">
                        <div>
                            <p className="text-4xl font-bold border-b-4 border-b-[#bf42ce] inline">Works</p>
                        </div>
                        <div className="flex items-center gap-2 my-5">
                            <AiOutlineFundProjectionScreen color={'#bf42ce'} size={30}/>
                            <p className="text-[16px]">Check out some of my Pet Projects</p>
                        </div>
                    </div>
                    <div className="flex w-full items-center ju my-2 flex-col gap-[10px]">
                        {/*<div className="w-full flex gap-[10px] max-h-[240px]">*/}
                        {/*    <div className="w-[49%] h-[100%]" data-aos="fade-right" data-aos-duration="1000">*/}
                        {/*        <OneWork image={Watch} width={'w-[100%]'} height={'h-[240px]'}/>*/}
                        {/*    </div>*/}
                        {/*    <div className="w-[49%]" data-aos="fade-left" data-aos-duration="1000">*/}
                        {/*        <OneWork image={Calculator} width={'w-[100%]'} height={'h-[240px]'}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div data-aos="fade-up"
                             data-aos-duration="1000" className="w-full border-4 border-[#0a192f] rounded-xl overflow-hidden">
                            <OneWork image={Todo} width={'w-[100%]'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Works}