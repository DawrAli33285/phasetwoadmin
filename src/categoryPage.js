import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { createCategory } from './redux/adminSlice';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css';
const CategoryPage = () => {
  const [state, setState] = React.useState({
    category_name: '',
    category_icon: null,
    location_image: null
  });
  const dispatch = useDispatch();

  const handleCategoryCreate = async (e) => {
    e.preventDefault();
    console.log("STATE", state);
    let formdata=new FormData();
    formdata.append('category_name',state.category_name)
    formdata.append('category_icon',state.category_icon)
    formdata.append('location_image',state.location_image)
  let createcategoryres=await dispatch(createCategory(formdata))
  if(createCategory.rejected.match(createcategoryres)){
toastr.error(createcategoryres.payload.error)
  }
  if(createCategory.fulfilled.match(createcategoryres)){
  toastr.success("Category created sucessfully")
  setState({
    category_name: '',
    category_icon: null,
    location_image: null
  })
  }
  };

  const onCategoryIconDrop = (acceptedFiles) => {
    setState(prevState => ({
      ...prevState,
      category_icon: acceptedFiles[0]
    }));
  };

  const onLocationImageDrop = (acceptedFiles) => {
    setState(prevState => ({
      ...prevState,
      location_image: acceptedFiles[0]
    }));
  };

  const { getRootProps: getCategoryIconRootProps, getInputProps: getCategoryIconInputProps } = useDropzone({
    onDrop: onCategoryIconDrop
  });

  const { getRootProps: getLocationImageRootProps, getInputProps: getLocationImageInputProps } = useDropzone({
    onDrop: onLocationImageDrop
  });

  return (
    <div className="lg:w-[488px] w-[100%] px-[20px] mx-auto mt-8 mb-8 bg-gray-100 rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Category Page</h2>
      <form onSubmit={handleCategoryCreate}>
        <div className="mb-4">
          <label htmlFor="categoryName" className="block font-semibold">Category Name</label>
          <input
            onChange={(e) => setState({ ...state, category_name: e.target.value })}
            value={state.category_name}
            id="categoryName"
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="categoryIcon" className="block font-semibold">Category Icon</label>
          <div {...getCategoryIconRootProps()} className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <input
              {...getCategoryIconInputProps()}
              id="categoryIcon"
              type="file"
              className="sr-only"
            />
            <div className="space-y-1 text-center">
              {state.category_icon && (
                <div>
                  <strong>Selected File:</strong> {state.category_icon.name}
                </div>
              )}
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20v18m0-18h18M4 12a2 2 0 012-2h12a2 2 0 012 2v4h4a2 2 0 012 2v20a2 2 0 01-2 2H10a2 2 0 01-2-2V18a2 2 0 012-2h4V12H4z" />
              </svg>
              <div className="flex text-sm text-gray-600">
                <span>Drag and drop an image here or </span>
                <button type="button" className="text-blue-500">browse</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="locationImage" className="block font-semibold">Location Image</label>
          <div {...getLocationImageRootProps()} className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <input
              {...getLocationImageInputProps()}
              id="locationImage"
              type="file"
              className="sr-only"
            />
            <div className="space-y-1 text-center">
              {state.location_image && (
                <div>
                  <strong>Selected File:</strong> {state.location_image.name}
                </div>
              )}
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20v18m0-18h18M4 12a2 2 0 012-2h12a2 2 0 012 2v4h4a2 2 0 012 2v20a2 2 0 01-2 2H10a2 2 0 01-2-2V18a2 2 0 012-2h4V12H4z" />
              </svg>
              <div className="flex text-sm text-gray-600">
                <span>Drag and drop an image here or </span>
                <button type="button" className="text-blue-500">browse</button>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default CategoryPage;
