import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FaRegHeart, FaRegThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function PopularPost({allpost}) {
  const {isLoading,data: popularPost = [],refetch} = useQuery({
    queryKey:['poplurPost'],
    queryFn: () => fetch('https://end-game-backend.vercel.app/poplurPost')
    .then(res => res.json())
 })
  console.log(popularPost)
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
      <div>
        {
          popularPost.map(allpost => 
            <div key={allpost._id} className="max-w-xs mx-auto mt-4 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img src={allpost?.img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2">
          <button><FaRegHeart className='text-black'></FaRegHeart>{allpost?.love?.length}</button> <button className='ml-2 text-black'><FaRegThumbsUp></FaRegThumbsUp>{allpost?.like?.length}</button>
            
            <h2 className="text-xl font-semibold tracking-wide">{allpost?.email}</h2>
          </div>
          <p className="dark:text-gray-100">{allpost?.post.slice(0,190)}</p>
        </div>)
        }
      </div>
  )
}

export default PopularPost