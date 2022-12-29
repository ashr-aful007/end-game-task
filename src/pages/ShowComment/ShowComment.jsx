import React, { useContext } from 'react'
import { AuthContext } from '../../Contaxt/AuthProvider'

function ShowComment({allcomment}) {
     const {user} = useContext(AuthContext)
     const {comment,date} = allcomment
  return (
    <div className='mt-12'>
     <div className="relative w-96 mx-auto bg-gray-50 flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
	<div className="p-3 space-y-1 xl:ml-6">
		<h3 className="text-xl font-semibold">{user?.email}</h3>
		<p className="text-sm dark:text-gray-400">{comment}</p>
	</div>
	<div className="flex items-center p-3 space-x-3">
		<div className="space-y-1">
			<span>{date}</span>
		</div>
	</div>
</div>
    </div>
  )
}

export default ShowComment