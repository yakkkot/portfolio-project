
import {BiError} from "react-icons/bi";
import {IoIosClose} from "react-icons/io"
import css from "./Modal.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const ModalError = ({showError,setShowError}) => {
    if(!showError) return null;
    return (
        <div data-aos="fade-up" onClick={()=>setShowError(false)} className={`${css.wrap}`}>
            <div onClick={(e)=> e.stopPropagation()} className={`${css.main_container} sm:mt-[25px] mt-[50px]`}>
                <div className={`${css.content} text-gray-900 relative`}>
                    <div className="flex items-center justify-end absolute right-0">
                        <IoIosClose onClick={()=>setShowError(false)} size={30} className="cursor-pointer"/>
                    </div>
                    <div className="py-2 px-2 header h-[50px] w-full flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <BiError color={'green'} size={35}/>
                            <p className="text-3xl">Ooooops.</p>
                        </div>
                    </div>
                    <div className={`${css.information} py-2 px-2 h-[100px] w-full flex items-center gap-4`}>
                        <p className="text-xl">Sorry, an error occurred, please try again later.</p>
                    </div>
                    <div className="footer py-2 px-2  h-[60px] w-full flex items-center justify-end gap-4">
                        <button onClick={()=>setShowError(false)} className={`${css.button_modal}`} >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {ModalError};