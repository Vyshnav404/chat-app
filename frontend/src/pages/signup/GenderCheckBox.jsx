import React from 'react'

export const GenderCheckBox = () => {
  return (
    <div className='flex'>
     			<div className='form-control'>
     				<label className={`label gap-2 cursor-pointer`}>
     					<span className='label-text text-slate-300'>Male</span>
     					<input type='checkbox' className='checkbox border-slate-900' />
     				</label>
     			</div>
     			<div className='form-control'>
    				<label className={`label gap-2 cursor-pointer`}>
     					<span className='label-text text-slate-300'>Female</span>
     					<input type='checkbox' className='checkbox border-slate-900' />
     				</label>
     			</div>
     		</div>
  )
}