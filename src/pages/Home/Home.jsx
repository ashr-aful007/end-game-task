import { useQuery } from '@tanstack/react-query'
import React from 'react'
import AddPost from '../AddPost/AddPost'
import PopularPost from '../PopularPost/PopularPost'
import ShowMedia from '../ShowMedia/ShowMedia'

function Home() {
   const {isLoading,data: allpostCollection = [],refetch} = useQuery({
      queryKey:['allpost'],
      queryFn: () => fetch('http://localhost:5000/allpost')
      .then(res => res.json())
   })
  return (
     <div className='pt-28'>
      <div className='grid grid-rows-2 md:gap-10 md:grid-cols-2 h-full m-5'>
          <div>
             <div className=' h-screen'>
             <div>
                <AddPost refetch={refetch}></AddPost>
             </div>
             <div>
                 <p className='text-xl mt-16'>Media section</p>
                 <ShowMedia allpostCollection={allpostCollection}></ShowMedia>
             </div>
             </div>
          </div>
          <div className='h-screen'>
             <p className='text-xl'>popular post</p>
             <PopularPost></PopularPost>
          </div>
      </div>  
     </div>
  )
}

export default Home