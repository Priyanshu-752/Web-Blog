import React from 'react'
import '../style/singlePost.css'
import { Link } from 'react-router-dom'

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>

        <img src='https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1610912652422-5DB14EV6QR7GBFBE9U2W/41.jpg' alt='' 
        className='singlePostImg' />

        <h1 className='singlePostTitle'>
        Yo Yo Bantai Rapper.
        <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
        </div>
        </h1>
    
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Ansh
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className='singlePostDesc'>
        Concert music is the music that is not only pleasing to the
       ears and mind but also nurturing for the soul. It has been 
       long said that music gives one an emotional response. Music 
       an raise someone’s mood, get them excited, or make them calm
        and relaxed. Music also - and this is important - allows us 
        to feel nearly or possibly all emotions that we experience
        in our lives. The possibilities are endless.
        </p>
      </div>
    </div>
  )
}

export default SinglePost
