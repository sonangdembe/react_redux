import React, { useState } from 'react'

const Form = ({type}) => {

  return (
    <div className="flex justify-center  w-screen h-screen">

	<div className="container my-3 px-4 lg:px-20 ">

		<div className="w-full p-8 my-2 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl mx-25">
			<div className="flex">
				<h1 className="font-bold uppercase text-5xl">{type} <br /> Blog</h1>
			</div>
		<form >
		<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Title*" name='title' required />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Subtitle*" name='subtitle'  required/>
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="file" name='image' />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Category*" name='category' required/>
        </div>
				<div className="my-4">
					<textarea required placeholder="Description*" name='description' className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div className="my-2 w-1/2 lg:w-1/4">
					<button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            Submit
          </button>
				</div>
		</form>
			</div>


    </div>
 
</div>
  )
}

export default Form