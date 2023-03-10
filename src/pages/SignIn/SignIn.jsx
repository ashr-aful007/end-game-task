import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Contaxt/AuthProvider'



function SignIn() {
  const {register,reset,handleSubmit,formState: { errors }} = useForm()
  const [loginError, setSignInError] = useState('')
  const {signIn,googleSignIn} = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = (data) =>{
    setSignInError('')
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user
      reset()
      navigate(from,{replace: true});
    })
    .catch(err =>{
      setSignInError(err.message)
    })
     
  }

  const handleGoogleSignIn = () =>{
    googleSignIn()
  }




  return (
    <div className='h-[800px] flex justify-center items-center'>
    <div className='w-96 p-7'>
       <h2 className='text-xl text-center font-semibold'>Login</h2>
       <form onSubmit={handleSubmit(handleLogin)}>
  <div>
     <label className='label'><span className='label-text'>Email</span></label>        
     <input type='text' {...register("email",{required: "Email Address is required"})} className='input input-bordered w-full max-w-xs'/>
     {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
  </div>
  <div>
     <label className='label'><span className='label-text'>Password</span></label>        
     <input type='password' {...register("password", {required: "password is required", minLength: {value: 6, message: 'Password must be 6 characters'}},{})} className='input input-bordered w-full max-w-xs'/>
     <label className='label'><span className='label-text'>porget Password</span></label>
     {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} 
  </div>
  <input className='btn btn-accent w-full' value="Login" type="submit" />
  <div>
    {loginError && <p className='text-red-500'>{loginError}</p>}
  </div>
</form>
<p className=''>New to toke<Link className='text-secondary' to="/signup">Create new account!</Link></p>
  <div className="divider">OR</div>
  <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>COUNTINUE WITH GOOGLE</button>
    </div>
</div>
  )
}

export default SignIn