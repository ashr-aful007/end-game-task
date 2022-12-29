import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'

function PopularPost() {
  const {isLoading,data: popularPost = [],refetch} = useQuery({
    queryKey:['poplurPost'],
    queryFn: () => fetch('http://localhost:5000/poplurPost')
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
    popularPost.map( allpost =><div key={allpost._id} className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100">
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center space-x-2">
        <div className="-space-y-1">
          <h2 className="text-sm font-semibold leading-none">{allpost?.email}</h2>
          <span className="inline-block text-xs leading-none dark:text-gray-400">{allpost?.time}</span>
        </div>
      </div>
      <button title="Open options" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
          <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
          <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
          <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
        </svg>
      </button>
    </div>
    <img src={allpost?.img} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
    <div className="p-3">
      <div className="flex flex-wrap items-center pt-3 pb-1">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-1">
            <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
            <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?2" />
            <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
          </div>
          <div className='ml-72'>
        </div>
        </div>
      </div>
      <div className="space-y-3 mt-7">
        <p className="text-sm ">
          <span className="text-base">{allpost?.post.slice(0,190)}</span>
        </p>					
      </div>
    </div>
  </div>)
  )
}

export default PopularPost