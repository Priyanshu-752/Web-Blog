import React from 'react'
import "../style/sidebar.css"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='https://media.istockphoto.com/id/1313894807/vector/ui-designer-creates-structure-of-information-blocks-of-mobile-application-male-programmer.jpg?s=612x612&w=0&k=20&c=hkC8mIxMtaAAD37QidFhZ-bv0UeimpiOIJT6YsR36HY=' alt ='' />
        <p>
            Hello Everyone! Welcome to our Blog Website. 
            Everyone here is free to share their ideas and to post whatever they like.
            We beleave that everyone has the right to share their ideas on any topic.
        </p>
        </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className='sidebarItem'>
      <span className='sidebarTitle'>FOLLOW US</span>
      <a href='https://www.linkedin.com/in/priyanshu-negi-87a56124a/' target={"blank"}> <i className="siderbarIcon fab fa-brands fa-linkedin"></i></a>
      <a href='https://instagram.com/_priyansh_u123?igshid=ZDdkNTZiNTM=' target={"blank"}><i className="siderbarIcon fab fa-brands fa-instagram"></i></a>
      <a href='https://github.com/Priyanshu-752' target={"blank"}><i className="siderbarIcon fab fa-brands fa-github"></i></a>
      <a href='https://twitter.com/Priyanshu_1105' target={"blank"}><i className="siderbarIcon fab fa-brands fa-twitter"></i></a>
      </div>

    </div>
  )
}

export default Sidebar
