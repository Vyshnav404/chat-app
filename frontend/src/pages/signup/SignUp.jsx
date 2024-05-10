import React from 'react'
import { GenderCheckBox } from './GenderCheckBox'

export const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='h-full w-full bg-gray-300 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-blue-500'> ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base text-slate-300  label-text'>Full Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='John Doe'
                            className='w-full input input-bordered focus:outline-slate-200 h-10'
                        />
                    </div>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base text-slate-300  label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='johndoe'
                            className='w-full input input-bordered focus:outline-slate-200 h-10'
                        />
                    </div>
                    <div>
                        <label className='label'>
                            
                            <span className='text-base text-slate-300  label-text'>Password</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow"/>
                        </label>
                    </div>
                   
                    <div>
                    <label className='label'>
                        <span className='text-base text-slate-300  label-text'>Confirm Password</span>
                    </label>
                        {/* <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered focus:outline-slate-200 h-10'
                        /> */}
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow"/>
                        </label>
                    </div>

                  <GenderCheckBox/>

                    
 					<a className='text-sm text-slate-300  hover:text-blue-600 mt-2 inline-block' href='#'>
 						Already have an account?
 					</a>

                 	<div>
 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
 					</div>

                </form>
            </div>
        </div>
    )
}
