import React from 'react'
import AddPost from '../AddPost/AddPost'
import PopularPost from '../PopularPost/PopularPost'
import ShowMedia from '../ShowMedia/ShowMedia'

function Home() {
  return (
     <div className='pt-28'>
      <div className='grid grid-rows-2 md:gap-10 md:grid-cols-2 h-full m-5'>
          <div>
             <div className=' h-screen'>
             <div>
                <AddPost></AddPost>
             </div>
             <div>
                 <p className='text-xl mt-16'>Media section</p>
                 <ShowMedia></ShowMedia>
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