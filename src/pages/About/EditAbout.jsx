import React from 'react'
import { useForm } from 'react-hook-form'

function EditAbout({userData}) {
     const {register,reset,handleSubmit,formState: { errors }} = useForm()
     const handleEdit = (data) =>{
           const user ={
               name: data.name,
               versity: data.versity,
               address: data.address
           }
           console.log(user)
     }
  return (
    <div>
          {
               userData.map(userD => <div key={userD._id}>
                         <input type="checkbox" id="my-modal-3" className="modal-toggle" />
               <div className="modal">
               <div className="modal-box relative">
               <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 className="text-lg font-bold">Edit your profile!</h3>
               <form onSubmit={handleSubmit(handleEdit)}>
               <input readOnly defaultValue={userD?.email} className='w-full bg-gray-100 my-2 text-black p-2'></input>
               <input {...register("name",{required: "name"})} value={userD?.name} className='w-full bg-gray-100 my-2 text-black p-2'></input>
               <input {...register("versity",{required: "versity"})} defaultValue={userD?.university} className='w-full bg-gray-100 my-2 text-black p-2'></input>
               <input {...register("address",{required: "address"})} defaultValue={userD?.address} className='w-full bg-gray-100 my-2 text-black p-2'></input>
               <button className='ml-52 mt-3 btn btn-outline btn-info btn-sm'>Submit</button>
               </form>
               </div>
               </div>
               </div>)
          }
    </div>
  )
}

export default EditAbout