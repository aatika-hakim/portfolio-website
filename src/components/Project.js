import React from 'react'

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col
    items-center text-center"
    >
      <div className="mb-8">
      <div className="group relative w-50">
        <img className="w-full object-cover "
            src={item.image} alt="" />
        <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center
            opacity-0 group-hover:h-full group-hover:opacity-80 text-black text-bold hover:bg-black">
            <div className='pt-20 mt-20'>
            <a className="px-10 py-3 ml-5  rounded-sm bg-accent hover:bg-white duration-300" target='_blank' rel='norefferer' href={item.link}>Preview Img</a>
            <a className="px-10 py-3 ml-5 rounded-sm bg-accent hover:bg-white duration-300" target='_blank' rel='norefferer' href={item.href}>Code</a>
            </div>
        </div>
    </div>
    </div>
      <h3
        className="text-2xl font-semibold
    capitalize mb-3"
      >
        {item.name}
      </h3>

      <p className="text-base max-w-md">
      </p>
    </div>
  )
}

export default Project
