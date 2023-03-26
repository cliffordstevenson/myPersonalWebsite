import React from 'react'
import ProfilePhoto from '/CliffPhoto.jpg'

const Photo = () => {
    return (
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#1f1f1f]'>
            <img src={ProfilePhoto} alt="img" height={100}/>
        </div>
    )
}

export default Photo