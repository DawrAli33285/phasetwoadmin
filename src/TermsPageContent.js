import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertTermsandconditions } from './redux/adminSlice';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css';


const TermsPageContent = () => {
  const dispatch=useDispatch();
  const [headings, setHeadings] = useState([{ heading: '', content: '' }]);
const [state,setState]=useState({
  introduction:'',
  Information_We_Collect:'',
  Use_of_Information:'',
  Disclosure_of_Information:''
})
  const handleAddHeading = async() => {
if(state.introduction.length==0){
toastr.error("Please enter introduction")
return
}else if(state.Disclosure_of_Information.length==0){
toastr.error("Please enter disclosure of information")
return
}else if(state.Use_of_Information.length==0){
toastr.error("Please enter use of information")
return
}else if(state.Information_We_Collect.length==0){
toastr.error("Please enter information we collect")
return
}

    let contentres=await dispatch(insertTermsandconditions(state))
    if(insertTermsandconditions.rejected.match(contentres)){
toastr.error(contentres?.payload?.error)
    }
    if(insertTermsandconditions.fulfilled.match(contentres)){
toastr.success("Content inserted sucessfully")
setState({
  introduction:'',
  Information_We_Collect:'',
  Use_of_Information:'',
  Disclosure_of_Information:''
})
    }
  };



  return (
    <div className="lg:w-[488px] w-full mx-auto mt-8 mb-8 bg-gray-100 rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Terms And Conditions Page Content</h2>
      <div className="mb-4">
        <label htmlFor="introduction" className="block font-semibold">Introduction</label>
        <textarea value={state.introduction} onChange={(e)=>setState({
          ...state,
          introduction:e.target.value
        })} id="mainContent" className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="Information We Collect" className="block font-semibold">Information We Collect</label>
        <textarea value={state.Information_We_Collect} onChange={(e)=>setState({
          ...state,
          Information_We_Collect:e.target.value
        })} id="mainContent" className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"></textarea>
      </div>
     
      <div className="mb-4">
        <label htmlFor="Use of Information" className="block font-semibold">Use of Information</label>
        <textarea value={state.Use_of_Information} onChange={(e)=>setState({
          ...state,
          Use_of_Information:e.target.value
        })} id="mainContent" className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"></textarea>
      </div>
     
      <div className="mb-4">
        <label htmlFor="Disclosure of Information" className="block font-semibold">Disclosure of Information</label>
        <textarea value={state.Disclosure_of_Information} onChange={(e)=>setState({
          ...state,
          Disclosure_of_Information:e.target.value
        })} id="mainContent" className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"></textarea>
      </div>
     
     
      <button onClick={handleAddHeading} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Add Heading and Content</button>
    </div>
  );
};

export default TermsPageContent;
