import React from 'react'
import '../style/header.css'
export default function Header() {
    return (
      <div className="header">
        <div className="headerTitles">
          {/* <span className="headerTitleSm">Welcome to our site</span> */}
          <span className="headerTitleLg">Get Updated</span>
        </div>
        <img
          className="headerImg"
          src="https://lh3.googleusercontent.com/R6rOc8wmmlJeAwzLYCAH36cRa7OsKycZ_qDJLuD7HPEM-gBt_qdLTCufouksP7n20R99SLKIsBYMxz95sdGzijSjMfoVSyhf97P0X3PP"
          alt=""
        />
      </div>
    );
  }
