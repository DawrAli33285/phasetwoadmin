import { useParams } from "react-router-dom";
import { useState } from "react";
import logo from "./app.png";
import React from "react";
import { useDispatch } from "react-redux";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css';

import { getIndivisualJob } from "./redux/adminSlice";
export default function JobsDetails() {
    const [state,setState]=useState()
    const { id } = useParams();
    const dispatch=useDispatch();
    const [status, setStatus] = useState("Open");
    const totalApplicants = 10; 
React.useEffect(()=>{
fetchIndivisual()
},[])
const fetchIndivisual=async()=>{
  
    let res=await dispatch(getIndivisualJob(id))
    if(getIndivisualJob.rejected.match(res)){
toastr.error(res?.payload?.error)
    }
    if(getIndivisualJob.fulfilled.match(res)){
console.log("INDIVISUALJOB")
console.log(res)
setState(res?.payload?.jobdata)
    }

}
    const handleStatusChange = () => {
        setStatus(prevStatus => prevStatus === "Open" ? "Closed" : "Open");
    };

    const handleViewApplicants = (id) => {
        console.log("View Applicants for job ID:", id);
        window.location.href = `/applicants/${id}`;
    };

    return (
        <div className="max-w-md mt-[60px] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full p-5 h-32 object-cover" src={state?.company_logo} alt="Company Logo" />
            <div className="p-4">
                <div className="font-bold text-xl mb-2">Job Title</div>
                <p className="text-gray-700 text-base mb-4">Job Details for Job ID: {id}</p>
                <div className="flex justify-between items-center">
                   
                </div>
                <div className="mt-4">
                    <button onClick={() => handleViewApplicants(id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        View Applicants ({state?.appliedBy?.length})
                    </button>
                </div>
            </div>
        </div>
    );
}
