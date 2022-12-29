import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

function EditAbout({userDt,refetch}) {
     const {_id,email,name,university,address } = userDt
     const {register,reset,handleSubmit,formState: { errors }} = useForm()
     const handleEdit = (data) =>{
           const user ={
               name: data.name,
               university: data.versity,
               address: data.address
           }
           fetch(`http://localhost:5000/editporfile/${_id}`,{
               method:'PUT',
               headers:{
                    'content-type' : 'application/json'
               },
               body: JSON.stringify(user)
           })
           .then(res => res.json())
           .then(data => {
               refetch()
               toast.success('profile update successfully')
           })
     }
  return (
    <div>
               <input type="checkbox" id="my-modal-3" className="modal-toggle" />
               <div className="modal">
               <div className="modal-box relative">
               <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 className="text-lg font-bold">Edit your profile!</h3>
               <form onSubmit={handleSubmit(handleEdit)}>
               <input readOnly defaultValue={email} className='w-full bg-gray-100 my-2 text-black p-2'></input>
               <input {...register("name",{required: "name"})} defaultValue={name} className='w-full bg-gray-100 my-2 text-black p-2'></input>
               <input {...register("versity",{required: "versity"})} defaultValue={university} className='w-full bg-gray-100 my-2 text-black p-2'></input>
               <input {...register("address",{required: "address"})} defaultValue={address} className='w-full bg-gray-100 my-2 text-black p-2'></input>
               <button className='ml-52 mt-3 btn btn-outline btn-info btn-sm'>Submit</button>
               </form>
               </div>
               </div>        
    </div>
  )
}

export default EditAbout