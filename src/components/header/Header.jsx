import React from 'react';

export default function () {
  return (
    <>
      <header>
        <div className="container main-header">
            <div className="logo">
                <h1>code16</h1>
                <h2>HEy i am Ankit vishwaakrama</h2>
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
