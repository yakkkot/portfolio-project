import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const About = () => {
    return (
        <div name='About'

             data-aos="fade-right"
             data-aos-duration="3000"
             className='w-100% h-screen flex items-center justify-center px-[10px] '>
            <div  className="max-w-[1000px] w-full flex items-center flex-col">
                <div className=" w-full h-full flex justify-center mb-10">
                    <p className='text-4xl font-bold border-b-4 border-b-[#bf42ce] inline'>
                        About
                    </p>
                </div>
                <div className="flex gap-8">
                    <div className="flex items-center">
                        <p className="max-w-[450px] font-bold sm:text-4xl text-2xl text-right">
                            Hi. I'm Yaroslav, nice to meet you.
                            I look forward to a good offer from you.
                        </p>
                    </div>
                    <div className="flex ">
                        <p className="text-left sm:text-[16px] text-[12px] max-w-[420px]">
                            Talented and experienced front-end developer with 1,5+ years of experience executing with a
                            plethora of diverse skills. Experience has taught me to take accessibility and
                            responsiveness seriously.
                            I am passionate about building excellent software that improves
                            the lives of those around me.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {About}