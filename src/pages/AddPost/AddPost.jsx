import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaUpload } from "react-icons/fa";
import { json } from 'react-router-dom';
import { AuthContext } from '../../Contaxt/AuthProvider';






function AddPost({refetch}) {
  const {register,reset,handleSubmit,formState: { errors }} = useForm()
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const {user} = useContext(AuthContext)
 
  

  const handlePost = (data) =>{
    const image = data.file[0]
    const formData = new FormData()
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
    fetch(url,{
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      if(imgData.success){
        const userPost ={
          email: user?.email,
          post: data.post,
          img: imgData.data.url,
          time: new Date(),
          like:[],
          love:[]
        }

        fetch('http://localhost:5000/userpost', {
           method: 'POST',
           headers:{
             'content-type' : 'application/json'
           },
           body: JSON.stringify(userPost)
        })
        .then(res => res.json())
        .then(data => {
          toast.success('post successfuly')
          refetch()
          reset()
        })
      }
    })
  }


  return (
    <div className='h-52 w-96 rounded-md bg-white'>
     <form onSubmit={handleSubmit(handlePost)}>
     <div>
     <textarea {...register("post",{required: "please provide text"})} className="textarea border-gray-500 w-full " placeholder="what's your mind?"></textarea>
     {errors.post && <p className='text-red-600'>{errors.post?.message}</p>}
     <FaUpload className='inline-block ml-2'/> <input {...register("file",{required: "add media file"})} type='file' className='
               file:bg-gray-600
               file:border-none
               file:text-sm
               file:p-2
               file:rounded-md
               file:text-white              
          '></input>
          {errors.file && <p className='text-red-600'>{errors.file?.message}</p>}

     </div>
     <button className='btn w-3/4 ml-10 mt-12 outline-none text-white bg-blue-500' type='submit'>Post</button>
     </form>
    </div>
  )
}

export default AddPost