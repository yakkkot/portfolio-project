import ReactLogo from "../../Assets/Images/react.png"
import Mongo from "../../Assets/Images/mongo.png"
import HTML from "../../Assets/Images/html.png"
import CSS from "../../Assets/Images/css.png"
import JavaScript from "../../Assets/Images/javascript.png"
import Tailwind from "../../Assets/Images/tailwind.png"
import Node from "../../Assets/Images/node.png"
import Github from "../../Assets/Images/github.png"
import OneSkill from "./OneSkill/OneSkill";
import {MdOutlineBiotech} from "react-icons/md"
import {FaBattleNet} from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Experience = () => {
    return (
        <>
            <div
                name='Experience'
                data-aos="zoom-in-down"
                data-aos-duration="1800"
                className="w-full sm:h-[100vh]  flex items-center justify-center flex-col px-[10px]"> {' '}
                <div className="max-w-[1000px] w-full flex flex-col items-center justify-center">
                    <div className="sm:hidden flex h-[10px] pt-[150px]"></div>
                    <div className="self-start w-full">
                        <div>
                            <p className="text-4xl font-bold border-b-4 border-b-[#bf42ce] inline">Experience</p>
                        </div>
                        <div className="flex items-center gap-2 my-5">
                            <FaBattleNet color={'#bf42ce'} size={30}/>
                            <p className="text-[16px]">These are the technologies I've worked with (but that's not
                                all).</p>
                        </div>
                    </div>
                    <div className="w-full my-2">
                        <div className="w-full flex mb-4 flex-wrap items-center justify-between">
                            <OneSkill image={HTML} name={'HTML'}/>
                            <OneSkill image={CSS} name={'CSS'}/>
                            <OneSkill image={JavaScript} name={'JavaScript'}/>
                            <OneSkill image={ReactLogo} name={'React JS'}/>
                        </div>
                        <div className="w-full flex flex-wrap items-center justify-between">
                            <OneSkill image={Github} name={'Github'}/>
                            <OneSkill image={Tailwind} name={'Tailwind CSS'}/>
                            <OneSkill image={Node} name={'Node JS'}/>
                            <OneSkill image={Mongo} name={'Mongo DB'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export {Experience}