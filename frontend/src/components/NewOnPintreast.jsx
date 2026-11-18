import React from "react"
import Card from "./Card"
import { items, postTitles } from "../data/posts"

const NewOnPintreast = () => {
    return (
        <div className='px-4 sm:px-8 lg:px-[100px] mt-5 font-[500]'>
            <h3 className='text-2xl font-bold mb-4'>What's New on Pinterest</h3>
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
                {items.map((image, index) => (
                    <Card key={`${image}-${index}`} item={{ image }} postId={index + 1} title={postTitles[index]} />
                ))}
            </div>
        </div>
    )
}

export default NewOnPintreast