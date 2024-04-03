import React from "react";
import { useDispatch } from "react-redux";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css';

import { getApplicants } from "./redux/adminSlice";
import { useLocation, useParams } from "react-router-dom";
const applicantsData = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Michael Johnson", email: "michael@example.com" },
    { id: 4, name: "Emily Brown", email: "emily@example.com" },
    { id: 5, name: "David Wilson", email: "david@example.com" },
    { id: 6, name: "Sarah Lee", email: "sarah@example.com" },
    { id: 7, name: "Robert Martinez", email: "robert@example.com" },
    { id: 8, name: "Jennifer Taylor", email: "jennifer@example.com" },
    { id: 9, name: "Daniel Anderson", email: "daniel@example.com" },
    { id: 10, name: "Lisa Thomas", email: "lisa@example.com" }
];

export default function Applicants() {
const dispatch=useDispatch();
const {id}=useParams()
const [state,setState]=React.useState([])

React.useEffect(()=>{
fetchApplicants();
},[])
const fetchApplicants=async()=>{
    let res=await dispatch(getApplicants(id))
if(getApplicants.rejected.match(res)){
toastr.error(res?.payload?.error)
}
if(getApplicants.fulfilled.match(res)){
console.log("RES")
console.log(res)
setState(res?.payload?.applicants)
}

}    
const downloadCV = async (cv) => {
    const cloudinaryUrl = cv;
    if (cloudinaryUrl) {
        try {
            const response = await fetch(cloudinaryUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'file';
            link.click();
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    } else {
        console.error('Cloudinary URL is undefined');
    }
};
return (
        <div className="max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Applicants</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {state?.appliedBy?.map(applicant => (
                            <tr key={applicant?._id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{applicant?._id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{applicant?.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{applicant?.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button onClick={()=>downloadCV(applicant?.cv)} className="text-indigo-600 hover:text-indigo-900">Download CV</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
