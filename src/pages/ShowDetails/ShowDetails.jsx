import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { FaRegHeart, FaRegThumbsUp } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'
import ShowComment from '../ShowComment/ShowComment'

function ShowDetails() {
     const {register,reset,handleSubmit,formState: { errors }} = useForm()
          const postDetails = useLoaderData()

          const handleComment = (data) =>{
               const comment ={
                  comment: data.comment,
                  date: new Date()
               }
               fetch(`http://localhost:5000/comment`,{
                    method: 'POST',
                    headers:{
                         'content-type' : 'application/json'
                    },
                    body: JSON.stringify(comment)
               })
               .then(res => res.json())
               .then(data => {
                    toast.success('comment successfully')
                    reset()
                    refetch()
                    console.log(data)
               })
          }

          const {isLoading,data: allcommentCollection = [],refetch} = useQuery({
               queryKey:[],
               queryFn: () => fetch('http://localhost:5000/comment')
               .then(res => res.json())      
          })
          


          const likepost = (id) =>{
            fetch(`http://localhost:5000/like/${id}`,{
               method: 'PUT',
               headers:{
                    'content-type' : 'application/json'
               },
               body: JSON.stringify(id)
            }) 
            .then(res => res.json())
            .then(data => console.log(data))     


          }

          const lovePost = () =>{

          }
          
  return (
    <div className='pt-44 p-2'>
       {postDetails.map(postDetail =>  <div key={postDetail._id} className="rounded-md mx-auto  shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100">
			<div className="flex items-center justify-between p-3">
				<div className="flex items-center space-x-2">
					<div className="-space-y-1">
						<h2 className="text-sm font-semibold leading-none">{postDetail?.email}</h2>
						<span className="inline-block text-xs leading-none dark:text-gray-400">{postDetail?.time}</span>
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
			<img src={postDetail?.img} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
			<div className="p-3">
				<div className="flex flex-wrap items-center pt-3 pb-1">
					<div className="flex items-center space-x-2">
						<div className="flex -space-x-1">
							<img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
							<img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?2" />
							<img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
						</div>
						<div className='ml-72'>
						<button><FaRegHeart className='text-black'></FaRegHeart>{postDetail?.love?.length}</button> <button onClick={() =>{likepost(postDetail?._id)}} className='ml-2 text-black'><FaRegThumbsUp></FaRegThumbsUp>{postDetail?.love?.length}</button>
					</div>
					</div>
				</div>
				<div className="space-y-3 mt-7">
					<p className="text-sm ">
						<span className="text-base">{postDetail?.post}</span>
					</p>
				</div>
                    
			</div>
		</div>)}
          <div className='w-96 mx-auto mt-6 bg-white '>
            <form onSubmit={handleSubmit(handleComment)}>
             <textarea {...register("comment",{required: "comment"})} className='w-96 bg-gray-200' placeholder='write your comment'></textarea>
             <button className='btn btn-outline btn-info ml-32 btn-sm text-sm mb-3'>Add comment</button>
            </form>
          </div>
          {
              allcommentCollection.map(allcomment => <ShowComment
               allcomment={allcomment}
               key={allcomment._id}
              ></ShowComment>) 
          }
    </div>
  )
}

export default ShowDetails