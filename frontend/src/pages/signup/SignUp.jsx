import React, { useState } from 'react'
import { GenderCheckBox } from './GenderCheckBox'
import { Link } from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup'

export const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName:"",
        userName:"",
        password:"",
        confirmPassword:"",
        gender:"",
    })

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await signup(inputs)
    }

    const handleCheckBoxChange = (gender)=>{
        setInputs({...inputs,gender})
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='h-full w-full bg-gray-300 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-blue-500'> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base text-slate-300  label-text'>Full Name</span>
                        </label>
                        {/* <input
                            type='text'
                            placeholder='John Doe'
                            className='w-full input input-bordered focus:outline-slate-200 h-10'
                            value={inputs.fullName}
                            onChange={e=> setInputs({...inputs,fullName:e.target.value})}
                        /> */}
                           <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" placeholder="Fullname" value={inputs.fullName}
                                onChange={e => setInputs({ ...inputs, fullName: e.target.value })} />
                        </label>
                    </div>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base text-slate-300  label-text'>Username</span>
                        </label>
                        {/* <input
                            type='text'
                            placeholder='johndoe'
                            className='w-full input input-bordered focus:outline-slate-200 h-10'
                            value={inputs.userName}
                            onChange={e=> setInputs({...inputs,userName:e.target.value})}
                        /> */}
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" placeholder="Username" value={inputs.userName}
                                onChange={e => setInputs({ ...inputs, userName: e.target.value })} />
                        </label>
                    </div>
                    <div>
                        <label className='label'>
                            
                            <span className='text-base text-slate-300  label-text'>Password</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow" value={inputs.password} onChange={e=> setInputs({...inputs,password:e.target.value})}/>
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
                            <input type="password" className="grow" value={inputs.confirmPassword} onChange={ (e)=> setInputs({...inputs,confirmPassword:e.target.value})}/>
                        </label>
                    </div>

                  <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

                    
 					<Link to='/login' className='text-sm text-slate-300  hover:text-blue-600 mt-2 inline-block'>
 						Already have an account?
 					</Link>

                 	<div>
 						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                         {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
 					</div>

                </form>
            </div>
        </div>
    )
}
