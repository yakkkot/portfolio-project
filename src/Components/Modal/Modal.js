import React from 'react';

import {BsCheck2All} from "react-icons/bs";
import {IoIosClose} from "react-icons/io"
import css from "./Modal.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Modal = ({showModal,setShowModal}) => {
        if(!showModal) return null;
    return (
        <div data-aos="fade-up" onClick={()=>setShowModal(false)} className={`${css.wrap}`}>
            <div onClick={(e)=> e.stopPropagation()} className={`${css.main_container} sm:mt-[25px] mt-[45px]`}>
                <div className={`${css.content} text-gray-900 relative`}>
                    <div className="flex items-center justify-end absolute right-0">
                        <IoIosClose onClick={()=>setShowModal(false)} size={30} className="cursor-pointer"/>
                    </div>
                    <div className="py-2 px-2 header h-[50px] w-full flex items-center justify-between">
                        <div className="flex items-center gap-4">
                        <BsCheck2All color={'green'} size={35}/>
                        <p className="text-3xl">Thank you!</p>
                        </div>
                    </div>
                    <div className={`${css.information} py-2 px-2 h-[100px] w-full flex items-center gap-4`}>
                        <p className="text-xl">Thank you for your interest, I will reply to you shortly.</p>
                    </div>
                    <div className="footer py-2 px-2  h-[60px] w-full flex items-center justify-end gap-4">
                        <button onClick={()=>setShowModal(false)} className={`${css.button_modal}`} >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Modal};