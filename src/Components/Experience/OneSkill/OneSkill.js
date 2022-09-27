import React from 'react';
import HTML from "../../../Assets/Images/html.png";

const OneSkill = ({image,name}) => {
    return (
        <div
            className="shadow-lg shadow-[#040c16] sm:max-h-[350px] max-h-[140px] sm:py-3 py-6 flex flex-col items-center justify-center gap-4 sm:w-[23.7%] w-[48.3%] hover:scale-110 duration-500">
            <div>
                <img className="sm:w-[80px] w-[75px]" src={image} alt=""/>
            </div>
            <p className="text-xl">{name}</p>
        </div>
    );
};

export default OneSkill;