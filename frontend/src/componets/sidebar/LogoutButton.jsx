import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

export const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className='mt-auto '>
   {!loading ? (
        <div className='tooltip' data-tip="Logout">
				<BiLogOut className='tooltip w-6 h-6 text-white cursor-pointer  hover:p-1'   onClick={logout} />
        </div>
  		) : (
				<span className='loading loading-spinner'></span>
			)}

</div>
  )
}
