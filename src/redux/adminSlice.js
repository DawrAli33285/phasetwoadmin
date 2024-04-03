import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL="http://localhost:5000"

export const createCategory=createAsyncThunk('admin/createCategory',async(state,thunkApi)=>{
    try{
let response=await axios.post(`${BASE_URL}/create-category`,state)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})

export const getCategory=createAsyncThunk('admin/getCategories',async(state,thunkApi)=>{
    try{
    let response=await axios.get(`${BASE_URL}/get-category`,state)
    return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})


export const createJob=createAsyncThunk('admin/createJob',async(state,thunkApi)=>{
    try{
let response=await axios.post(`${BASE_URL}/create-jobpost`,state)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})


export const insertTermsandconditions=createAsyncThunk('admin/insertTermsandconditions',async(state,thunkApi)=>{
    try{
let response=await axios.post(`${BASE_URL}/insertTermsandconditions`,state)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})

export const insertPrivacy=createAsyncThunk('admin/insertPrivacy',async(state,thunkApi)=>{
    try{
let response=await axios.post(`${BASE_URL}/insertPrivacy`,state)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})

export const homeContent=createAsyncThunk('admin/homecontent',async(state,thunkApi)=>{
    try{
let response=axios.post(`${BASE_URL}/inserthomecontent`,state)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})

export const getContactUsEmails=createAsyncThunk('admin/getContactUsEmails',async(state,thunkApi)=>{
    try{
let response=await axios.get(`${BASE_URL}/getContactUsEmails`)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})

export const sendEmail=createAsyncThunk('admin/sendEmail',async(state,thunkApi)=>{
    try{
let response=await axios.post(`${BASE_URL}/sendEmail`,state)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})


export const getjobposts=createAsyncThunk('admin/get-jobposts',async(state,thunkApi)=>{
    try{
let response=await axios.get(`${BASE_URL}/get-jobposts`)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})

export const deletePost=createAsyncThunk('admin/deletepost',async(state,thunkApi)=>{
    try{
let response=await axios.delete(`/delete-post/${state}`)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})

export const getIndivisualJob=createAsyncThunk('admin/indivisualjob',async(state,thunkApi)=>{
    try{
let response=await axios.get(`${BASE_URL}/getindivisualjob/${state}`)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})

export const getApplicants=createAsyncThunk('admin/getApplicants',async(state,thunkApi)=>{
    try{
let response=await axios.get(`${BASE_URL}/getApplicants/${state}`)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})

export const getDashboardData=createAsyncThunk('admin/dasahboard',async(state,thunkApi)=>{
    try{
let response=await axios.get(`${BASE_URL}/get-jobdata`)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})


export const updateJob=createAsyncThunk('admin/updateJob',async(state,thunkApi)=>{
    try{
let response=await axios.post(`${BASE_URL}/updateJob`,state)
return response.data
    }catch(e){
        if(e.response.data){
            return thunkApi.rejectWithValue(e.response.data)
        }else{
            return thunkApi.rejectWithValue({error:"Network error please try later"})
        }
    }
})

const adminSlice=createSlice({
    name:'adminSlice',
initialState:{
admin:''
},
    extraReducers:(builder)=>{

}
})

export default adminSlice.reducer