import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item, postId, title }) => {
    let { image } = item;
    return (
        <Link to={`/singlePost/${postId}`} className="mb-4 block break-inside-avoid overflow-hidden rounded-xl shadow-md bg-white">
            <img className='mainImg' src={image} alt={title} referrerPolicy="no-referrer" />
            <p className='font-[500] line-clamp-2 w-[90%]'>{title}</p>
            <p className='text-[grey] text-[14px] line-clamp-2 w-[90%]'>description lorem ipsum dolor sit amet</p>
            <div className='flex items-center gap-[10px] mt-2'>
                <img className='w-[30px] h-[30px] rounded-[50%] object-cover cursor-pointer' src="https://i.pinimg.com/75x75_RS/e5/58/1a/e5581a9d8c67177522aaf62eb7ce1174.jpg" alt="" />
                <p className='mb-3'>Márton</p>
            </div>
        </Link>
    )
}

export default Card