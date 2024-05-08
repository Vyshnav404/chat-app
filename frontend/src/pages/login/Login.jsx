import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='h-full w-full bg-gray-300 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>

                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>
                <form>
                <div>
						<label className='label p-2'>
							<span className='text-base label-text text-slate-300 '>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered focus:outline-slate-200 h-10'
						/>
					</div>
                    <div>
						<label className='label'>
							<span className='text-base label-text text-slate-300'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered focus:outline-slate-200 h-10'
						/>
					</div>
                    <a href='#'  className='text-sm text-slate-300 hover:text-slate-50 mt-2 inline-block'>
                    {"Don't"} have an account?
                    </a>
                    {/* <Link to='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link> */}

                    <div>
						<button className='btn btn-block btn-sm mt-2'>Login
						 {/* <span className='loading loading-spinner '></span> */}
						</button>
					</div>
                </form>
            </div>
        </div>
    )
}


//starterr code for login=====================================
// export const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='h-full w-full bg-gray-300 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>

//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Login
//                     <span className='text-blue-500'> ChatApp</span>
//                 </h1>
//                 <form>
//                 <div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text text-slate-300 '>Username</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='Enter username'
// 							className='w-full input input-bordered focus:outline-slate-200 h-10'
// 						/>
// 					</div>
//                     <div>
// 						<label className='label'>
// 							<span className='text-base label-text text-slate-300'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered focus:outline-slate-200 h-10'
// 						/>
// 					</div>
//                     <a href='#'  className='text-sm text-slate-300 hover:text-slate-50 mt-2 inline-block'>
//                     {"Don't"} have an account?
//                     </a>
//                     {/* <Link to='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</Link> */}

//                     <div>
// 						<button className='btn btn-block btn-sm mt-2'>Login
// 						 {/* <span className='loading loading-spinner '></span> */}
// 						</button>
// 					</div>
//                 </form>
//             </div>
//         </div>
//     )
// }
