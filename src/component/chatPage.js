import complogo from "../app.png"
import { CgAttachment } from "react-icons/cg";
import DesktopChat from "./desktopchat";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
export default function ChatPage() {
    const [showChatBox, setShowChatBox] = useState(false);

    const handleChatBoxToggle = () => {
        setShowChatBox(prevState => !prevState);
    };
    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };
    return (
        <>
            <div className="lg:block hidden">
                <DesktopChat />
            </div>
            <div className="block lg:hidden my-[40px] mx-[10px]" >
                <div
                    className={`flex border-t-[1px] border-[#d9d9d9] py-[20px] px-[15px] items-center gap-[10px] ${showChatBox ? 'hidden' : ''}`}
                    id="message"
                    onClick={handleChatBoxToggle}
                >
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
                <div
                    className={`flex border-t-[1px] border-[#d9d9d9] py-[20px] px-[15px] items-center gap-[10px] ${showChatBox ? 'hidden' : ''}`}
                    id="message"
                    onClick={handleChatBoxToggle}
                >
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
                <div
                    className={`flex border-t-[1px] border-[#d9d9d9] py-[20px] px-[15px] items-center gap-[10px] ${showChatBox ? 'hidden' : ''}`}
                    id="message"
                    onClick={handleChatBoxToggle}
                >
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
                <div className={`border-[1px] rounded-lg border-[#d9d9d9] ${showChatBox ? '' : 'hidden'}`} id="chat-box">
                    {showChatBox && (
                        <>
                            <div className="flex border-b-[1px] border-[#d9d9d9] py-[20px] px-[15px] items-center gap-[10px]">
                                <div className=" flex items-center gap-[10px]">
                                    <IoIosArrowBack className="text-[25px]" onClick={handleChatBoxToggle} />
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
                            <div className="flex py-[20px] justify-between items-center w-[100%]">
                                <div className=" w-[70%] pl-[25px] py-[5px]">
                                    <input type="text" placeholder="Type here..." className="py-[10px] px-[8px] w-[100%] border-[1px] border-[#00a7ac] rounded-md outline-none " />
                                </div>
                                <div className="gap-2 w-[25%] mx-[10px] flex justify-center">
                                    <input type="file" id="fileInput" className=" hidden" />
                                    <button onClick={handleButtonClick} class="px-[10px] py-[5px] bg-blue-500 text-white rounded-lg">
                                        <CgAttachment />
                                    </button>
                                    <button className="bg-[#00a7ac] py-[5px] text-white text-[14px] rounded-lg px-[10px]">Send</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}