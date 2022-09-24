import {useState} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useForm} from "react-hook-form";
import {BiErrorCircle} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"
import Modal from 'react-modal';

AOS.init();
const Contact = () => {
    const [showModal,setShowModal] = useState(true)
    const {register,reset,handleSubmit,formState:{isValid,errors}} = useForm({mode:"onChange"})

    const submit = async (info) =>{
        try {
            let response = await fetch('https://getform.io/f/5e50b214-79d2-40bf-83b8-200e78b6498f', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-16le'
                },
                body: JSON.stringify(info)
            }).then(setShowModal(true));
            console.log(response)
        }
    catch (e) {
            console.error(e);
        }
        reset()
    }

    return (
        <div name='Contact'
             data-aos="fade-left"
             data-aos-duration="1000"
             className="w-full h-[100vh] flex items-center justify-center flex-col">

            <div>
                <div className="w-full">
                    <p className='text-4xl font-bold border-b-4 border-b-[#bf42ce] inline'>
                        Contact
                    </p>
                </div>
                <div className="flex items-center gap-2 my-5">
                    <HiOutlineMail color={'#bf42ce'} size={30}/>
                    <p className="text-[16px]">Submit the form below or shoot me an email - k0tjeee777@gmail.com</p>
                </div>
                <form onSubmit={handleSubmit(submit)}


                      className="w-[650px] h-[500px] flex items-center justify-start flex-col">
                    <div className="w-[100%] ">
                        <input
                            className="py-[8px] px-2 w-full bg-[#ccd6f5] text-black border-2 border-[#0a192f] rounded-xl focus:border-blue-500"
                            type="text"
                            placeholder={'Name'} {...register('name', {
                            required: true, minLength: 3, maxLength: 40
                        })}/>

                        {errors.name ?
                            (<div className="h-[22px] flex items-center my-2 mx-1">
                                <BiErrorCircle className="text-red-700" size={22}/>
                                <p className="pl-1 text-red-700 text-[14px]">Enter the correct name!</p>
                            </div>) : <div className="h-[22px] my-2"></div>
                        }
                    </div>
                    <div className="w-[100%] ">
                        <input
                            className="py-[8px] px-2 w-full bg-[#ccd6f5] text-black border-2 border-[#0a192f] rounded-xl focus:border-blue-500"
                            type="text"
                            placeholder={'Email'} {...register('email', {
                            required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, minLength: 5
                            , maxLength: 60
                        })}/>

                        {errors.email ?
                            (<div className="h-[22px] flex items-center my-2 mx-1">
                                <BiErrorCircle className="text-red-700" size={22}/>
                                <p className="pl-1 text-red-700 text-[14px]">Enter the correct email!</p>
                            </div>) : <div className="h-[22px] my-2"></div>
                        }
                    </div>
                    <div className="w-[100%] ">
                    <textarea
                        className="py-[8px] px-2 w-full bg-[#ccd6f5] text-black border-2 border-[#0a192f] rounded-xl focus:border-blue-500"
                        placeholder={'Your message'} rows="9" {...register('message', {
                        required: true, minLength: {
                            value: 5,
                            message: 'Enter the correct message'
                        }
                    })}/>
                        {errors.message ?
                            (<div className="h-[22px] flex items-center my-2 mx-1">
                                <BiErrorCircle className="text-red-700" size={22}/>
                                <p className="pl-1 text-red-700 text-[14px]">Enter the correct message!</p>
                            </div>) : <div className="h-[22px] my-2"></div>
                        }
                    </div>

                    <div>
                        <button onReq
                            // type={'submit'}  onClick={()=> reset()}
                                disabled={!isValid} className="enabled:bg-[#bf42ce] enabled:border-[#bf42ce]">
                            Let's Cooperate
                        </button>
                    </div>
                </form>
            </div>
            <Modal className="modal_window" isOpen={showModal} ariaHideApp={false} onRequestClose={()=> setShowModal(false)}>
                Hello is Modal window
            </Modal>
        </div>
    );
};

export {Contact}