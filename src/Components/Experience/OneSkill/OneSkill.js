import React from 'react';
import HTML from "../../../Assets/Images/html.png";

const OneSkill = ({image,name}) => {
    return (
        <div
            className="shadow-lg shadow-[#040c16] py-3 flex flex-col items-center justify-center gap-4 w-[23.7%] hover:scale-110 duration-500">
            <div>
                <img className="w-[80px]" src={image} alt=""/>
            </div>

            <p className="text-xl">{name}</p>
        </div>
    );
};

export default OneSkill;