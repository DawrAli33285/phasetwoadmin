import React,{useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css';
import { homeContent } from './redux/adminSlice';

const HomePageContent = () => {
  const dispatch=useDispatch();
  const [bannerImage, setBannerImage] = useState(null); // State to store the selected image

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/*', // Accept only image files
    onDrop: (acceptedFiles) => {
      // Set the first accepted file as the banner image
      setBannerImage(acceptedFiles[0]);
      setState({
        ...state,
        Banner_Image:acceptedFiles[0]
      })
    }
  });
  const [state,setState]=useState({
    Banner_Sub_Heading:'',
  Banner_Content:'',
  Jobs_Category_List_Heading:'',
  Jobs_Category_List_Content:'',
  Featured_Job_List_Heading:'',
  Featured_Job_List_Content:'',
  Total_Recruiters:'',
  Daily_User_Visited:'',
  Daily_Job_Posted:'',
  Phone_Number:'',
  Instagram_Link:'',
  Facebook_Link:'',
  LinkedIn_Link:'',
  Twitter_Link:'',
  Banner_Image:''
  })
  const storecontent=async()=>{
    let formdata=new FormData();
    formdata.append('Banner_Sub_Heading',state.Banner_Sub_Heading)
    formdata.append('Banner_Content',state.Banner_Content)
    formdata.append('Jobs_Category_List_Heading',state.Jobs_Category_List_Heading)
    formdata.append('Jobs_Category_List_Content',state.Jobs_Category_List_Content)
    formdata.append('Featured_Job_List_Heading',state.Featured_Job_List_Heading)
    formdata.append('Featured_Job_List_Content',state.Featured_Job_List_Content)
    formdata.append('Total_Recruiters',state.Total_Recruiters)
    formdata.append('Daily_User_Visited',state.Daily_User_Visited)
    formdata.append('Daily_Job_Posted',state.Daily_Job_Posted)
    formdata.append('Phone_Number',state.Phone_Number)
    formdata.append('Instagram_Link',state.Instagram_Link)
    formdata.append('Facebook_Link',state.Facebook_Link)
    formdata.append('LinkedIn_Link',state.LinkedIn_Link)
    formdata.append('Twitter_Link',state.Twitter_Link)
    formdata.append('Banner_Image',state.Banner_Image)
let contentres=await dispatch(homeContent(formdata))
if(homeContent.rejected.match(contentres)){
toastr.error(contentres?.payload?.error)
}
if(homeContent.fulfilled.match(contentres)){
  toastr.success("Home content added sucessfully")
setState({
  Banner_Sub_Heading:'',
  Banner_Content:'',
  Jobs_Category_List_Heading:'',
  Jobs_Category_List_Content:'',
  Featured_Job_List_Heading:'',
  Featured_Job_List_Content:'',
  Total_Recruiters:'',
  Daily_User_Visited:'',
  Daily_Job_Posted:'',
  Phone_Number:'',
  Instagram_Link:'',
  Facebook_Link:'',
  LinkedIn_Link:'',
  Twitter_Link:'',
  Banner_Image:''
})
}
  }
  return (
    <div className="lg:w-[488px] w-[100%] px-[20px] mx-auto mt-8 mb-8 bg-gray-100 rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Home Page Content</h2>
      <div className="mb-4">
        <label htmlFor="bannerSubHeading" className="block font-semibold">Banner Sub Heading</label>
        <input value={state.Banner_Sub_Heading} onChange={(e)=>{
          setState({
            ...state,
            Banner_Sub_Heading:e.target.value
          })
        }} id="bannerSubHeading" type="text" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="bannerContent" className="block font-semibold">Banner Content</label>
        <textarea value={state.Banner_Content} onChange={(e)=>setState({
          ...state,
          Banner_Content:e.target.value
        })} id="bannerContent" className="border border-gray-300 rounded-md p-2 w-full h-24"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="jobsCategoryListHeading" className="block font-semibold">Jobs Category List Heading</label>
        <input value={state.Jobs_Category_List_Heading} onChange={(e)=>setState({
          ...state,
          Jobs_Category_List_Heading:e.target.value
        })} id="jobsCategoryListHeading" type="text" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="jobsCategoryListContent" className="block font-semibold">Jobs Category List Content</label>
        <textarea value={state.Jobs_Category_List_Content} onChange={(e)=>setState({
          ...state,
          Jobs_Category_List_Content:e.target.value
        })} id="jobsCategoryListContent" className="border border-gray-300 rounded-md p-2 w-full h-24"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="featuredJobListHeading" className="block font-semibold">Featured Job List Heading</label>
        <input value={state.Featured_Job_List_Heading} onChange={(e)=>setState({
          ...state,
          Featured_Job_List_Heading:e.target.value
        })} id="featuredJobListHeading" type="text" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="featuredJobListContent" className="block font-semibold">Featured Job List Content</label>
        <textarea value={state.Jobs_Category_List_Content} onChange={(e)=>setState({
          ...state,
          Featured_Job_List_Content:e.target.value
        })} id="featuredJobListContent" className="border border-gray-300 rounded-md p-2 w-full h-24"></textarea>
      </div>
    
      <div className="mb-4">
        <label htmlFor="dailyUserVisited" className="block font-semibold">Daily User Visited</label>
        <input value={state.Daily_User_Visited} onChange={(e)=>setState({
          ...state,
          Daily_User_Visited:e.target.value
        })} id="dailyUserVisited" type="number" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="dailyJobPosted" className="block font-semibold">Daily Job Posted</label>
        <input value={state.Daily_Job_Posted} onChange={(e)=>setState({
          ...state,
          Daily_Job_Posted:e.target.value
        })} id="dailyJobPosted" type="number" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="recruitersJobLocationsHeading" className="block font-semibold">Total Recruiters Job Locations Heading</label>
        <input value={state.Total_Recruiters} onChange={(e)=>setState({
          ...state,
          Total_Recruiters:e.target.value
        })} id="recruitersJobLocationsHeading" type="text" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
    
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block font-semibold">Phone Number</label>
        <input value={state.Phone_Number} onChange={(e)=>setState({
          ...state,
          Phone_Number:e.target.value
        })} id="phoneNumber" type="tel" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="instaLink" className="block font-semibold">Instagram Link</label>
        <input value={state.Instagram_Link} onChange={(e)=>setState({
          ...state,
          Instagram_Link:e.target.value
        })} id="instaLink" type="url" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="facebookLink" className="block font-semibold">Facebook Link</label>
        <input value={state.Facebook_Link} onChange={(e)=>setState({
          ...state,
          Facebook_Link:e.target.value
        })} id="facebookLink" type="url" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="linkedinLink" className="block font-semibold">LinkedIn Link</label>
        <input value={state.LinkedIn_Link} onChange={(e)=>setState({
          ...state,
          LinkedIn_Link:e.target.value
        })} id="linkedinLink" type="url" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="twitterLink" className="block font-semibold">Twitter Link</label>
        <input value={state.Twitter_Link} onChange={(e)=>setState({
          ...state,
          Twitter_Link:e.target.value
        })} id="twitterLink" type="url" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="bannerImage" className="block font-semibold">Banner Image</label>
        <div {...getRootProps()} className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <input {...getInputProps()} id="bannerImage" type="file" className="sr-only" />
          <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20v18m0-18h18M4 12a2 2 0 012-2h12a2 2 0 012 2v4h4a2 2 0 012 2v20a2 2 0 01-2 2H10a2 2 0 01-2-2V18a2 2 0 012-2h4V12H4z" />
            </svg>
            <div className="flex text-sm text-gray-600">
              <span>Drag and drop an image here or </span>
              <button type="button" className="text-blue-500">browse</button>
            </div>
          </div>
        </div>
        {/* Display the selected file name */}
        {bannerImage && (
          <div>
            <h3 className="font-semibold mt-4">Selected Image:</h3>
            <p className="mt-2">{bannerImage.name}</p>
          </div>
        )}
      </div>
      <button onClick={storecontent} type="submit" className=" bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Submit</button>

    </div>
  );
};

export default HomePageContent;
