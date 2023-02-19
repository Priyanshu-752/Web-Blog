
import '../style/topbar.css'
import { Link } from 'react-router-dom';

export default function Topbar() {
  const user =true;
  return (
    <div className="top">
      <div className="topLeft">
      <a href='https://www.linkedin.com/in/priyanshu-negi-87a56124a/' target={"blank"}><i class="topIcon fab fa-brands fa-linkedin"></i></a>
        <a href='https://instagram.com/_priyansh_u123?igshid=ZDdkNTZiNTM=' target={"blank"}> <i className="topIcon fab fa-instagram-square"></i></a>
        <a href='https://github.com/Priyanshu-752' target={"blank"}><i className="topIcon fab fa-brands fa-github"></i></a>
        <a href='https://twitter.com/Priyanshu_1105' target={"blank"}><i className="topIcon fab fa-twitter-square"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem" >
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://wallpapers.com/images/hd/scary-anime-fanart-of-shigeo-kageyama-tbga6tyucjm76y8u.jpg"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
            <Link  className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
            <Link  className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>

    </div>
    
  );
}
