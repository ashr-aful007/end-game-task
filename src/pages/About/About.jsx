import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../Contaxt/AuthProvider'
import pofilepic from '../../assets/profilepic.jpg'
import{FaLandmark, FaHome} from 'react-icons/fa'
import EditAbout from './EditAbout'


function About() {
     const {user} = useContext(AuthContext)
     const {isLoading,data: userData = [],refetch} = useQuery({
          queryKey:['userInfo', user?.email],
          queryFn: () => fetch(`https://end-game-backend.vercel.app/userInfo?email=${user?.email}`)
          .then(res => res.json())
       })
       console.log(userData)
       if(isLoading){
          return <div className="flex flex-col mx-auto pt-32 m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
          <div className="h-48 rounded-t bg-gray-700"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
               <div className="w-full h-6 rounded bg-gray-700"></div>
               <div className="w-full h-6 rounded bg-gray-700"></div>
               <div className="w-3/4 h-6 rounded bg-gray-700"></div>
          </div>
        </div>
       }
  return (
    <div className='pt-32 h-screen'>
     {
          userData.map(userD => <div key={userD?._id} className='w-96 mx-auto'>
               <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl dark:bg-gray-900 dark:text-gray-100">
                    <label htmlFor="my-modal-3" className='ml-56 btn btn-outline btn-info btn-sm'>Edit</label>
	<img src={pofilepic} alt="" className="w-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-3 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{userD?.name}</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">{userD?.email}</p>
		</div>
	</div>
     <div>
        <p><FaLandmark className='inline-block m-2'></FaLandmark><span className='font-semibold pt-4 text-sm'>university:</span> {userD?.university}</p>
          <p><FaHome className='inline-block m-2'></FaHome><span className='font-semibold pt-5 text-sm'>address:</span> {userD?.address}</p>

         </div>
        </div>
          </div>)
     }
     {
          userData.map(userDt =><EditAbout userDt={userDt}
               refetch={refetch}
               key={userDt._id}
               ></EditAbout>)
     }
    </div>
  )
}

export default About