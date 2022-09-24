import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {GiSandsOfTime} from "react-icons/gi"

AOS.init();
const Works = () => {
    return (
        <div name='Works'
             data-aos="fade-up-left"
             data-aos-duration="1500"
             className="w-full h-[100vh] flex items-center justify-center flex-col">

            <div>
                <div className="pb-12">
                    <p className="text-4xl font-bold border-b-4 border-b-[#bf42ce] inline">Works</p>
                </div>
                <div className="flex items-center">
                    <GiSandsOfTime size={60}/>
                    <p className={"mx-5 text-7xl font-bold"}>Soon...</p>
                </div>
            </div>
        </div>
    );
};

export {Works}