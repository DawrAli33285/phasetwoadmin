import React from "react";
import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import {useDispatch} from 'react-redux'
import toastr from 'toastr'
import { sendEmail } from "./redux/adminSlice";
import 'toastr/build/toastr.min.css';

import { getContactUsEmails } from "./redux/adminSlice";
export default function ContactReply() {
    const [showModal, setShowModal] = useState(false);
    const [messages, setMessages] = useState([]);
    const [state,setState]=useState("")
    const [selectedMessage,setSelectedMessage]=React.useState({})
const dispatch=useDispatch();


    const handleReply = (data) => {
        setShowModal(true);
        setSelectedMessage(data)

    };

    const closeModal = () => {
        setShowModal(false);

    };
    const triggeremailsend=async()=>{
let sendmailres=await dispatch(sendEmail({id:selectedMessage?._id,message:state}))
 if(sendEmail.rejected.match(sendmailres)){
    toastr.error(sendmailres?.payload?.error)
    
 }  
 
 if(sendEmail.fulfilled.match(sendmailres)){
    toastr.success("Email sent sucessfully")
    setShowModal(false);
 }
}

    React.useEffect(()=>{
fetchallemails();
    },[])

    const fetchallemails=async()=>{
        let fetchemailres=await dispatch(getContactUsEmails())
if(getContactUsEmails.rejected.match(fetchemailres)){
toastr.error(fetchemailres?.payload?.error)
}
if(getContactUsEmails.fulfilled.match(fetchemailres)){
console.log("FETCHEMAIL")
console.log(fetchemailres)
setMessages(fetchemailres?.payload?.response)
}
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {messages.map((message) => (
                        <tr key={message.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{message.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{message.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{message.message}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button onClick={()=>handleReply(message)} className="text-indigo-600 hover:text-indigo-900">Reply</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <IoMdMail className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Reply to {selectedMessage?.name}</h3>
                                       
                                        <div className="mt-2">
                                            <label className="text-sm font-semibold">User's Email</label>
                                            <input value={selectedMessage?.email} disabled={true} type="text" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" placeholder="User's Email" />
                                        </div>
                                        <div className="mt-2">
                                            <label className="text-sm font-semibold">Message</label>
                                            <textarea value={state} onChange={(e)=>setState(e.target.value)} className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4" placeholder="Write your reply here..."></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={triggeremailsend} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Send
                                </button>
                                <button onClick={closeModal} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
