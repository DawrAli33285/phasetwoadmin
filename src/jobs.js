import React, { useState } from 'react';
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td, Image, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Flex, FormControl, FormLabel, Input, Textarea, Select } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { FaEye } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css';


import logo from "./app.png"
import { getjobposts,deletePost ,updateJob} from './redux/adminSlice';
export default function Jobs() {
    const [jobs, setJobs] = useState([
     
    ]);
    const dispatch=useDispatch();
React.useEffect(()=>{
fetchjobs();
},[])
const fetchjobs=async()=>{
let fetchjobres=await dispatch(getjobposts())
if(getjobposts.rejected.match(fetchjobres)){
    toastr.error(fetchjobres?.payload?.error)
}
if(getjobposts.fulfilled.match(fetchjobres)){
    console.log("FETCHJOBPOSTS")
    console.log(fetchjobres)
    setJobs(fetchjobres?.payload?.jobposts)

}
}    


    const [editJobModalOpen, setEditJobModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [step, setStep] = useState(1);
    const [editedJob, setEditedJob] = useState(null);

    const handleEditJob = (job) => {
        setSelectedJob(job);
        setStep(1);
        setEditedJob({ ...job });
        setEditJobModalOpen(true);
    };

    const handleCloseEditJobModal = () => {
        setSelectedJob(null);
        setStep(1);
        setEditedJob(null);
        setEditJobModalOpen(false);
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleUpdateJob = async() => {
        console.log(editedJob)
        let finaldata={
            ...editedJob,
            id:selectedJob?._id
        }
   let res=await dispatch(updateJob(finaldata))
   if(updateJob.rejected.match(res)){
    toastr.error(res?.payload?.error)
   }
   console.log("RES")
   console.log(res)
   if(updateJob.fulfilled.match(res)){
    window.location.reload(true)
       handleCloseEditJobModal();
   }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedJob(prevState => ({
            ...prevState,
            [name]: value
        }));
      
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setEditedJob(prevState => ({
                ...prevState,
                companyLogo: reader.result
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteJob = async(id) => {
let deletepostres=await dispatch(deletePost(id))
if(deletePost.rejected.match(deletepostres)){
    toastr.error(deletepostres?.payload?.error)
}
if(deletePost?.fulfilled.match(deletepostres)){
    toastr.success("Job deleted sucessfully")
    setJobs((prev)=>{
        let old=[...prev]
        return old.filter(u=>u?._id?.toString()!=id?.toString())
      })
}
      
    };
    const handleViewJobDetails = (id) =>{
        window.location.href = `/jobs-details/${id}`;
    }
    return (
        <div className='relative'>
            <Box className="App" p={8} overflowX="auto">
                <header>
                    <div className='jobs-table'>
                        <Table variant="simple" width="100%">
                            <Thead>
                                <Tr>
                                    <Th>Job Title</Th>
                                    <Th>Company</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {jobs.map((job) => (
                                    <Tr key={job._id}>
                                        <Td>{job.job_title}</Td>
                                        <Td>
                                            <Flex align="center">
                                                <Image src={job.company_logo} alt="Company Logo" boxSize="50px" borderRadius="full" marginRight="1rem" />
                                                {job.company_name}
                                            </Flex>
                                        </Td>
                                        <Td className="flex justify-center gap-[10px] icon-padding">
                                            <IconButton
                                                aria-label="Delete"
                                                icon={<DeleteIcon />}

                                                onClick={() => handleDeleteJob(job._id)}
                                                marginRight="0.5rem"
                                            />
                                            <IconButton
                                                aria-label="Edit"
                                                icon={<EditIcon />}
                                                onClick={() => handleEditJob(job)}
                                                marginRight="0.5rem"
                                            />
                                            <IconButton
                                                aria-label="View Details"
                                                icon={<FaEye />}
                                                onClick={() => handleViewJobDetails(job._id)}
                                            />
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </div>
                </header>
                {/* Edit Job Modal */}

            </Box>
            {editJobModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">

                    <div className="bg-white p-8 rounded-lg shadow-xl w-3/4 relative">
                        <button onClick={handleCloseEditJobModal} className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                            <span className="sr-only">Close</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">Edit Job</h2>

                        <div className="modal-content relative">

                            {step === 1 && (
                                <StepOneForm job={editedJob} onChange={handleChange} onNext={handleNextStep} />
                            )}
                            {step === 2 && (
                                <StepTwoForm job={editedJob} onChange={handleChange} onNext={handleNextStep} onPrevious={handlePreviousStep} />
                            )}
                            {step === 3 && (
                                <StepThreeForm job={editedJob} onChange={handleChange} onNext={handleNextStep} onPrevious={handlePreviousStep} />
                            )}
                            {step === 4 && (
                                <StepFourForm job={editedJob} onChange={handleChange} onPrevious={handlePreviousStep} onSubmit={handleUpdateJob} />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}
// StepOneForm
const StepOneForm = ({ job, onChange, onNext, onLogoChange }) => {
    return (
        <div className="flex flex-col w-full space-y-4">
            <div>
                <label className="text-sm font-semibold">Company Name</label>
                <input name="company_name" value={job.companyName} onChange={onChange} className="mt-1 px-4 py-2 border rounded-md w-full focus:outline-none focus:border-blue-500" />
            </div>

 
      
            <Button mt={4} colorScheme="teal" onClick={onNext}>Next</Button>
        </div>
    );
};

// StepTwoForm
const StepTwoForm = ({ job, onChange, onNext, onPrevious }) => {
    return (
        <div className="flex flex-col w-full space-y-4">
            <div>
                <label className="text-sm font-semibold">Job Title</label>
                <input name="job_title" value={job.jobTitle} onChange={onChange} className="mt-1 px-4 py-2 border rounded-md w-full focus:outline-none focus:border-blue-500" />
            </div>
 
            <div>
                <label className="text-sm font-semibold">Job Type</label>
                <select name="job_type" value={job.jobType} onChange={onChange} className="mt-1 px-4 py-2 border rounded-md w-full focus:outline-none focus:border-blue-500">
                    <option value="full-time">Fulltime</option>
                    <option value="part-time">Partime</option>
                    <option value="remote">Remote</option>
                </select>
            </div>
            <div className="flex justify-between">
                <Button colorScheme="teal" onClick={onPrevious}>Previous</Button>
                <Button colorScheme="teal" onClick={onNext}>Next</Button>
            </div>
        </div>
    );
};

// StepThreeForm
const StepThreeForm = ({ job, onChange, onNext, onPrevious }) => {
    return (
        <div className="flex flex-col w-full space-y-4">
            <div>
                <label className="text-sm font-semibold">Job Description</label>
                <textarea name="job_description" value={job.jobDescription} onChange={onChange} className="mt-1 px-4 py-2 border rounded-md w-full focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex justify-between">
                <Button colorScheme="teal" onClick={onPrevious}>Previous</Button>
                <Button colorScheme="teal" onClick={onNext}>Next</Button>
            </div>
        </div>
    );
};

// StepFourForm
const StepFourForm = ({ job, onChange, onPrevious, onSubmit }) => {
    return (
        <div className="flex flex-col w-full space-y-4">
            <div>
                <label className="text-sm font-semibold">Review your changes</label>
                <textarea value={JSON.stringify(job, null, 2)} readOnly className="mt-1 px-4 py-2 border rounded-md w-full focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex justify-between">
                <Button colorScheme="teal" onClick={onPrevious}>Previous</Button>
                <Button colorScheme="teal" onClick={onSubmit}>Submit</Button>
            </div>
        </div>
    );
};

