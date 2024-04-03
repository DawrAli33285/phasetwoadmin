
import { CgAttachment } from "react-icons/cg";
import complogo from "../app.png"
export default function DesktopChat(){
    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };
    return(
        <div className="chat-grid px-10 " >
                <div className="border-[1px] mx-[10px] rounded-lg border-[#d9d9d9]" id="message">
                    <div className="flex justify-center lg:px-[20px] lg:py-[20px] lg:text-[23px] text-[19px] font-semibold">
                        <h1>Message</h1>
                    </div>
                    <div className=".section-one overflow-y-scroll">
                        <div className="flex border-t-[1px] border-[#d9d9d9] py-[20px] px-[15px] items-center gap-[10px]">
                            <div className="">
                                <img src={complogo} alt="" className=" rounded-[50px]" />
                            </div>
                            <div className="flex flex-col">
                                <div className=" text-[17px] font-medium cursor-pointer hover:text-[#00a7ac]">
                                    <p>Company Name</p>
                                </div>
                                <div className="text-white font-semibold w-fit px-[5px] py-[2px] text-[10px] items-center flex justify-center rounded-lg bg-[#00a7ac] ">
                                    <span>Unread message 1</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t-[1px] border-[#d9d9d9] py-[20px] px-[15px] items-center gap-[10px]">
                            <div className="">
                                <img src={complogo} alt="" className=" rounded-[50px]" />
                            </div>
                            <div className="flex flex-col">
                                <div className=" text-[17px] font-medium cursor-pointer hover:text-[#00a7ac]">
                                    <p>Company Name</p>
                                </div>
                                <div className="text-white font-semibold w-fit px-[5px] py-[2px] text-[10px] items-center flex justify-center rounded-lg bg-[#00a7ac] ">
                                    <span>Unread message 2</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t-[1px] border-[#d9d9d9] py-[20px] px-[15px] items-center gap-[10px]">
                            <div className="">
                                <img src={complogo} alt="" className=" rounded-[50px]" />
                            </div>
                            <div className="flex flex-col">
                                <div className=" text-[17px] font-medium cursor-pointer hover:text-[#00a7ac]">
                                    <p>Company Name</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t-[1px] border-[#d9d9d9] py-[20px] px-[15px] items-center gap-[10px]">
                            <div className="">
                                <img src={complogo} alt="" className=" rounded-[50px]" />
                            </div>
                            <div className="flex flex-col">
                                <div className=" text-[17px] font-medium cursor-pointer hover:text-[#00a7ac]">
                                    <p>Company Name</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t-[1px] border-[#d9d9d9] py-[20px] px-[15px] items-center gap-[10px]">
                            <div className="">
                                <img src={complogo} alt="" className=" rounded-[50px]" />
                            </div>
                            <div className="flex flex-col">
                                <div className=" text-[17px] font-medium cursor-pointer hover:text-[#00a7ac]">
                                    <p>Company Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-[1px] relative rounded-lg border-[#d9d9d9]" id="chat-box">
                     <div className="flex border-b-[1px] border-[#d9d9d9] py-[20px] px-[15px] items-center gap-[10px]">
                        <div className="">
                            <img src={complogo} alt="" className=" rounded-[50px]" />
                        </div>
                        <div className="flex flex-col">
                            <div className=" text-[17px] font-medium cursor-pointer hover:text-[#00a7ac]">
                                <p>Company Name</p>
                            </div>
                            <div className="text-white font-semibold w-fit px-[5px] py-[2px] text-[10px] items-center flex justify-center rounded-lg bg-[#00a7ac] ">
                                <span>TAG-The Alpha Group</span>
                            </div>
                        </div>
                    </div>
                    <div className=" overflow-y-scroll h-[70%] gap-[20px] w-[100%] flex flex-col justify-end p-[20px]">
                        <div className="sender lg:w-[50%]">
                            <p>Ali bukhari we hire you. your salry package is 20rs your position is tatay uthao</p>
                        </div>
                        <div className="w-[100%] flex justify-end">
                            <div className="user lg:w-[50%] ">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center bottom-0 absolute w-[100%]">
                        <div className=" w-[80%] px-[10px] py-[5px]">
                            <input type="text" placeholder="Type here..." className="py-[10px] px-[8px] w-[100%] border-[1px] border-[#00a7ac] rounded-md outline-none " />
                        </div>
                        <div className="w-[20%] flex gap-[20px] justify-center">
                            <input type="file" id="fileInput" className=" hidden" />
                            <button onClick={handleButtonClick} class="px-4 py-2 bg-blue-500 text-white rounded-lg">
                                <CgAttachment /> 
                            </button>
                            <button className="bg-[#00a7ac] py-[10px] text-white  rounded-lg px-[20px]">Send</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}