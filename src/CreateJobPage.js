import React from 'react';
import { useDropzone } from 'react-dropzone';
import { getCategory,createJob } from './redux/adminSlice';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css';
import {useDispatch} from 'react-redux'
const CreateJob = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            // Update the state with the first accepted file
            setState({
                ...state,
                company_logo: acceptedFiles[0]
            });
        }
    });
    const dispatch=useDispatch();
    const [categories,setCategories]=React.useState([])
    const [state,setState]=React.useState({
        company_name:'',
        category:'',
        job_title:'',
        company_logo:'',
        deadline_date:'',
        salary:'',
        experience:'',
        job_description:'',
        job_responsibility:'',
        educational_requirements:'',
        extra_benefits:'',
        vacancy:'',
        city:'',
        country:'',
        job_type:'part-time'
    })
    React.useEffect(()=>{
fetchCategories()
    },[])
    const fetchCategories=async()=>{
    let getCategoryres=await dispatch(getCategory())
    console.log("CATEGORY")
    console.log(getCategoryres)
    if(getCategory.rejected.match(getCategoryres)){
toastr.error(getCategoryres.payload.error)
    }
    if(getCategory.fulfilled.match(getCategoryres)){
        setCategories(getCategoryres?.payload?.response)
     if(getCategoryres?.payload?.response?.length>0){
        setState({
            ...state,
            category:getCategoryres.payload.response[0].categoryName

        })
     }
    }
    }

    const createNow=async(e)=>{
        e.preventDefault();
        let formdata=new FormData();
        formdata.append('company_name',state.company_name)
        formdata.append('category',state.category)
        formdata.append('job_title',state.job_title)
        formdata.append('image',state.company_logo)
        formdata.append('deadline_date',state.deadline_date)
        formdata.append('salary',state.salary)
        formdata.append('experience',state.experience)
        formdata.append('job_description',state.job_description)
        formdata.append('job_responsibility',state.job_responsibility)
        formdata.append('educational_requirements',state.educational_requirements)
        formdata.append('extra_benefits',state.extra_benefits)
        formdata.append('vacancy',state.vacancy)
        formdata.append('city',state.city)
        formdata.append('country',state.country)
        formdata.append('job_type',state.job_type)
    console.log(state)
        let createnowres=await dispatch(createJob(formdata))
        if(createJob.rejected.match(createnowres)){
        toastr.error(createnowres?.payload?.error)
        }
        if(createJob.fulfilled.match(createnowres)){
            window.location.reload(true)
            toastr.success("Job created sucessfully")
            setState({
                company_name:'',
                job_title:'',
                company_logo:'',
                deadline_date:'',
                salary:'',
                experience:'',
                job_description:'',
                job_responsibility:'',
                educational_requirements:'',
                extra_benefits:'',
                vacancy:'',
                city:'',
                country:'',
        
            })
        }
    }
    return (
        <div className="lg:w-[488px] w-full mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Create Job</h2>
            <form onSubmit={createNow}>
                <div className="mb-4">
                    <label htmlFor="companyName" className="block font-semibold">Company Name</label>
                    <input value={state.company_name} onChange={(e)=>setState({
                        ...state,
                        company_name:e.target.value
                    })} id="companyName" type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="jobCategory" className="block font-semibold">Categories</label>
                    <select id="jobCategory" className="border border-gray-300 rounded-md p-2 w-full">
                        {categories.map((category) => (
                            <option onChange={(e)=>{
                                setState({
                                    ...state,
                                    category:e.target.value
                                })
                            }} key={category.id} value={category.id}>
                                {category.categoryName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="jobTitle" className="block font-semibold">Job Title</label>
                    <input value={state.job_title} onChange={(e)=>{
                        setState({
                            ...state,
                            job_title:e.target.value
                        })
                    }} id="jobTitle" type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
       
                <div className="mb-4">
    <label htmlFor="companyLogo" className="block font-semibold">Company Logo</label>
    <div {...getRootProps()} className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <input onChange={(e) => {
            setState({
                ...state,
                company_logo: e.target.files[0]
            });
        }} {...getInputProps()} id="companyLogo" type="file" className="sr-only" />
        <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12    text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20v18m0-18h18M4 12a2 2 0 012-2h12a2 2 0 012 2v4h4a2 2 0 012 2v20a2 2 0 01-2 2H10a2 2 0 01-2-2V18a2 2 0 012-2h4V12H4z" />
            </svg>
            <div className="flex text-sm text-gray-600">
                <span>Drag and drop an image here or </span>
                <button type="button" className="text-blue-500">browse</button>
            </div>
        </div>
    </div>
    <div>
       
        {acceptedFiles.map(file => (
            <div key={file.name}>
                <span>{file.name}</span>
            </div>
        ))}
    </div>
</div>

                <div className="mb-4">
                    <label htmlFor="deadlineDate" className="block font-semibold">Deadline Date</label>
                    <input value={state.deadline_date} onChange={(e)=>{
                        setState({
                            ...state,
                            deadline_date:e.target.value
                        })
                    }} id="deadlineDate" type="date" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="salary" className="block font-semibold">Salary</label>
                    <input value={state.salary} onChange={(e)=>setState({
                        ...state,
                        salary:e.target.value
                    })} id="salary" type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="experience" className="block font-semibold">Experience</label>
                    <input value={state.experience} onChange={(e)=>setState({
                        ...state,
                        experience:e.target.value
                    })} id="experience" type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="jobDescription" className="block font-semibold">Job Description</label>
                    <textarea value={state.job_description} onChange={(e)=>{
                        setState({
                            ...state,
                            job_description:e.target.value
                        })
                    }} id="jobDescription" className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="jobResponsibility" className="block font-semibold">Job Responsibility</label>
                    <textarea value={state.job_responsibility} onChange={(e)=>setState({
                        ...state,
                        job_responsibility:e.target.value
                    })} id="jobResponsibility" className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="educationalRequirements" className="block font-semibold">Educational Requirements</label>
                    <textarea value={state.educational_requirements} onChange={(e)=>{
                        setState({
                            ...state,
                            educational_requirements:e.target.value
                        })
                    }} id="educationalRequirements" className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"></textarea>
                </div>
          
                <div className="mb-4">
                    <label htmlFor="extraBenefits" className="block font-semibold">Extra Benefits</label>
                    <textarea value={state.extra_benefits} onChange={(e)=>{
                        setState({
                            ...state,
                            extra_benefits:e.target.value
                        })
                    }} id="extraBenefits" className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="vacancy" className="block font-semibold">Vacancy</label>
                    <input value={state.vacancy} onChange={(e)=>{
                        setState({
                            ...state,
                            vacancy:e.target.value
                        })
                    }} id="vacancy" type="number" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block font-semibold">City</label>
                    <input value={state.city} onChange={(e)=>{
                        setState({
                            ...state,
                            city:e.target.value
                        })
                    }} id="city" type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block font-semibold">Country</label>
                    <input value={state.country} onChange={(e)=>{
                        setState({
                            ...state,
                      country:e.target.value      
                        })
                    }} id="country" type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="jobType" className="block font-semibold">Job Type</label>
                    <select value={state.job_type} onChange={(e)=>{
                        setState({
                            ...state,
                            job_type:e.target.value
                        })
                    }} id="jobType" className="border border-gray-300 rounded-md p-2 w-full">
                        <option value="part-time">Part Time</option>
                        <option value="full-time">Full Time</option>
                        <option value="remote">Remote</option>
                    </select>
                </div>
                <button type="submit" className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    );
};

export default CreateJob;
