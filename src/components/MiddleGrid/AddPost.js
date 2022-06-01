import React from 'react'
import { profile4 } from '../../assets'

export const AddPost = () => {
  return (
    <>
    <form action="" className="create-post">
        <div className="profile-photo">
          <img src={profile4} alt="profile-pic" />
        </div>
        <input
          type="text"
          placeholder="What's on your mind, Ranita?"
          id="create-post"
        />
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>
      </>
  )
}
