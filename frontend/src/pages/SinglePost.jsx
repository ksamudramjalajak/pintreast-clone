import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { items, postTitles } from '../data/posts'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineFileUpload } from "react-icons/md";
import Avatar from 'react-avatar';
import { FaRegHeart } from "react-icons/fa";




const SinglePost = () => {
  const { id } = useParams()
  const postId = Number(id)
  const image = Number.isInteger(postId) && postId > 0 ? items[postId - 1] : undefined
  const title = postTitles[postId - 1]
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      <Navbar />
      <main className="mx-auto mt-8 max-w-5xl px-5 sm:px-10">
        <Link to="/" className="font-medium text-[#e60023]">Back to home</Link>
        {image ? (
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            
            <img
              src={image}
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full rounded-xl object-contain"
            />
      
            <section className="right min-h-full rounded-[20px] p-[10px]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {isLoggedIn && (
                    <i className="cursor-pointer text-[20px]" aria-label="Like post">
                      <FaRegHeart />
                    </i>
                  )}
                  <i className="cursor-pointer text-[30px]"><HiOutlineDotsHorizontal /></i>
                  <i className="cursor-pointer text-[20px]"><MdOutlineFileUpload /></i>
                </div>
                <button className="btnNormal !bg-[#e60023] !text-white">Save</button>
              </div>
              <h3 className="mt-5 text-3xl font-[500]">cold talk</h3>
              <p className="mt-4 text-[grey]">Winter snow walk morning</p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    className="w-[50px] cursor-pointer rounded-full object-cover"
                    src="https://i.pinimg.com/75x75_RS/40/d7/d5/40d7d5658dcb272fbb0d6cd465ddcd0f.jpg"
                    alt="Mickey"
                  />
                  <div>
                    <p className="font-[500]">Mickey</p>
                    <p className="text-[14px] text-[grey]">10 followers</p>
                  </div>
                </div>
                {isLoggedIn && (
                  <button className="btnNormal">Follow</button>
                )}
              </div>
              <h3 className="mt-4 text-xl font-[500]">2 comments</h3>
              <div className="comments pt-4">
                <div className="mb-2 flex items-center gap-3">
                  <Avatar name="Wim Mostmans" size="30" round className="cursor-pointer" />
                  <p>
                    <b>Wim Mostmans</b>{' '}
                    Healing and getting through hard days rarely happens in a straight line, and it's okay if all you managed today was just showing up. Be gentle with yourself right now. Even when things feel heavy and slow, better days are still ahead of you, and you have people in your corner rooting for you every step of the way. 🌿
                  </p>
                </div>
                <div className="mb-2 flex items-center gap-3">
                  <Avatar name="Andy" size="30" round className="cursor-pointer" />
                  <p>
                    <b>Andy</b>{' '}
                    Sending you so much warmth right now. You don't have to have everything figured out today—just take it one step at a time. 🤍
                  </p>
                </div>
              </div>
            </section>
          </div>
          
        ) : (
          <section className="mt-8">
            <h1 className="text-2xl font-bold">Post not found</h1>
            <p className="mt-2 text-gray-600">There is no post with ID {id}.</p>
          </section>
        )}
      </main>
    </>
  )
}

export default SinglePost



