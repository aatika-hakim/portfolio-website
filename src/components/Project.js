import React from 'react'

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-8">
      <div className="relative group w-50">
        <img className="object-cover w-full "
            src={item.image} alt="" />
        <div
            className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-0 text-black opacity-0 group-hover:h-full group-hover:opacity-80 text-bold hover:bg-black">
            <div className='p-auto'>
            <a className="px-10 py-3 ml-5 duration-300 rounded-sm bg-accent hover:bg-white" target='_blank' rel='noreferrer noopener' href={item.link}>Preview Img</a>
            <a className="px-10 py-3 ml-5 duration-300 rounded-sm bg-accent hover:bg-white" target='_blank' rel='noreferrer noopener' href={item.href}>Code</a>
            </div>
        </div>
    </div>
    </div>
      <h3
        className="mb-3 text-2xl font-semibold capitalize"
      >
        {item.name}
      </h3>

      <p className="max-w-md text-base">
      </p>
    </div>
  )
}

export default Project;
