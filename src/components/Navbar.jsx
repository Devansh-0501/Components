import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to={"/"}>Home</Link>
      <Link to={"/Carousel"}>Carousel</Link>
      <Link to={"/CountDownTimer"}>CountDown-Timer</Link>
      <Link to={"/Accordian"}>Accordian</Link>
      <Link to={"/NestedComments"}>NestedComments</Link>
      <Link to={"/StarRating"}>StarRating</Link>
      <Link to={"/Todo"}>Todo</Link>
      <Link to={"/ProgressBar"}>ProgressBar</Link>
    </div>
  )
}

export default Navbar