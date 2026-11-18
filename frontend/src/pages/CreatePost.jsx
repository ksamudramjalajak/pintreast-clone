import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { MdOutlineFileUpload } from "react-icons/md";

const CreatePost = () => {
  const [preview, setPreview] = useState("");

  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <>
      <Navbar />
      <main className="create-page">
        <h1>Create Pin</h1>
        <div className="create-layout">
          <label className="upload-area">
            {preview ? (
              <img src={preview} alt="Upload preview" />
            ) : (
              <>
                <MdOutlineFileUpload className="upload-icon" />
                <strong>Choose a file</strong>
                <span>or drag and drop it here</span>
              </>
            )}
            <input type="file" accept="image/*" onChange={handleFile} />
          </label>
          <form className="create-form" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="post-title">Title</label>
            <div className="inputBox2">
              <input id="post-title" required type="text" placeholder="Add a title" />
            </div>

            <label htmlFor="post-description">Description</label>
            <div className="inputBox2">
              <textarea id="post-description" placeholder="Tell people about this Pin"></textarea>
            </div>

            <button className="btnNormal publish-button" type="submit">Publish</button>
          </form>
        </div>
      </main>
    </>
    )
}
export default CreatePost