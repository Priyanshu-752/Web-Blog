import '../style/post.css'
import { Link } from 'react-router-dom' ;
const Post = () => {
  return (
    <div className='post'>
    <img src='https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1610912652422-5DB14EV6QR7GBFBE9U2W/41.jpg' alt='' />
    <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className='postTitle'>Remix</span>
        <hr />
        <span className='postDate'>1 hr ago</span>
      </div>
      <p className='postDesc'>
      Concert music is the music that is not only pleasing to the
       ears and mind but also nurturing for the soul. It has been 
       long said that music gives one an emotional response. Music 
       an raise someone’s mood, get them excited, or make them calm
        and relaxed. Music also - and this is important - allows us 
        to feel nearly or possibly all emotions that we experience
        in our lives. The possibilities are endless.
      </p>
    </div>
  )
}

export default Post
