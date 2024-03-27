import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


export default function (props) {

  return (
    <>
      <header className='navbar'>
        <div className="container main-header">
          <div className="logo">
            <h1>CODE16</h1>
          </div>
          <div className="menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Course</a></li>
              <li><a href="#">Tutorial</a></li>
              <li><a href="#">Blog</a></li>
              <li className="btn"><a href='#'>Contact</a></li>
            </ul>
          </div>
          <div className='headBtn'>
            <ul>
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
          </div>
          <div>
            <FontAwesomeIcon onClick={props.toggleMode} icon={faMoon} size="2x" color="#9333ea" />
          </div>
        </div>
        <div className="course-menu">
          <ul>
            <li><a href="#">Html</a></li>
            <li><a href="#">css</a></li>
            <li><a href="#">javascript</a></li>
            <li><a href="#">jquery</a></li>
            <li><a href="#">cms</a></li>
          </ul>
        </div>
      </header>
    </>
  );
}
