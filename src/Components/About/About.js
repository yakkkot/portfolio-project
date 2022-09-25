import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const About = () => {
    return (
        <div name='About'

             data-aos="fade-right"
             data-aos-duration="3000"
             className='w-full h-[100vh] flex items-center justify-center'>
            <div>
                <div className="w-full flex justify-center mb-10">
                    <p className='text-4xl font-bold border-b-4 border-b-[#bf42ce] inline'>
                        About
                    </p>
                </div>
                <div className="flex gap-8">
                    <div className="flex items-center">
                        <p className="w-[450px] font-bold text-4xl text-right">
                            Hi. I'm Yaroslav, nice to meet you.
                            I look forward to a good offer from you.
                        </p>
                    </div>
                    <div className="flex ">
                        <p className="text-left w-[420px]">
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