import React from 'react'
import Sidebar from '../../componets/sidebar/Sidebar'
import { MessageContainer } from '../../componets/messages/MessageContainer'

export const Home = () => {
  return (
    <>
        	<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
			<Sidebar />
			<MessageContainer />
		</div>
    </>
  )
}
