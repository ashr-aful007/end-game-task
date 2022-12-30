import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contaxt/AuthProvider'

function SignUp() {
  const {register,reset,handleSubmit,formState: { errors }} = useForm()
  const [signUpError, setSignUpError] = useState('')
  const {createUser} = useContext(AuthContext)

  const handleSignUp = (data) =>{
    setSignUpError('')
      createUser(data.email,data.password)
      .then(result =>{
          const user = result.user
          saveUserData(data)
          toast.success('signUp successfully')
          reset()
      })
      .catch(err =>{
        setSignUpError(err.message)      
      })

      const saveUserData = (data) =>{
          const user ={
             name: data.name,
             email: data.email,
             university: data.university,
             address: data.address
          }
          fetch('http://localhost:5000/user',{
            method: 'POST',
            headers:{
               'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => console.log(data))
      }
  }

  return (
    <div className='h-[800px] flex justify-center items-center'>
    <div className='w-96 p-7'>
       <h2 className='text-xl text-center font-semibold'>Sign Up</h2>
       <form onSubmit={handleSubmit(handleSignUp)}>
  <div>
     <label className='name'><span className='label-text'>Name</span>
     </label>  
     <input type="name" {...register("name",{
        required: "Name is Required"
     })} className="input input-bordered w-full"></input>
     {errors.name && <p className='text-red-600'>{errors.name.message}</p>}           
  </div>
  <div>
     <label className='label'><span className='label-text'>Email</span></label> 
     <input type="email" {...register("email",{
        required: true
     })} className="input input-bordered w-full"></input>            
  </div>
  <div>
     <label className='label'><span className='label-text'>Password</span></label> 
     <input type="password" {...register("password",{
        required: "password is requird",
        minLength: {value: 6, message: "Password must be 6 character"},
     })} className="input input-bordered w-full"></input> 
     {errors.password && <p className='text-red-600'>{errors.password.message}</p>}      
  </div>
  <div>
     <label className='label'><span className='label-text'>University</span></label> 
     <input type="text" {...register("university",{
        required: "university is required",
     })} className="input input-bordered w-full"></input> 
     {errors.university && <p className='text-red-600'>{errors.university.message}</p>}      
  </div>
  <div>
     <label className='label'><span className='label-text'>Address</span></label> 
     <input type="text" {...register("address",{
        required: "Address is required",
     })} className="input input-bordered w-full"></input> 
     {errors.address && <p className='text-red-600'>{errors.address.message}</p>}      
  </div>
  <input className='btn btn-accent w-full mt-5' value="Sign Up" type="submit" />
  {signUpError && <p className='text-red-600'>{signUpError}</p>}
</form>
<p className='mb-4'>Already have an account please<Link className='text-secondary' to="/signIn">login!</Link></p>
  <div className="divider">OR</div>
    </div>
</div>
  )
}

export default SignUp