import React,{useState} from 'react'
import './navbar.scss'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
 const[active, setActive]=useState('navBar')
 //function to toggle navbar
 const showNav =()=>{
  setActive('navBar activeNavbar')
 }
 //function to remove navbar
 const removeNav =()=>{
  setActive('navBar')
 }
  return (
    <section className='navBarSection'>
<header className="header flex">
  <div className="logoDiv">
    <a href="#" className="logo flex">
      <h1><MdOutlineTravelExplore className="icon"/>TripGo</h1>
    </a>
  </div>
  {}
  <div className= {active}>
    <ul className="navLists flex">
      <li className="navItem">
        <a href="#" className="navLink">Home</a>
      </li>
      <li className="navItem">
        <a href="#" className="navLink">Packages</a>
      </li>
      <li className="navItem">
        <a href="#" className="navLink">Shop</a>
      </li>
      <li className="navItem">
        <a href="#" className="navLink">About</a>
      </li>
      <li className="navItem">
        <a href="#" className="navLink">Pages</a>
      </li>
      <li className="navItem">
        <a href="#" className="navLink">News</a>
      </li>
      <li className="navItem">
        <a href="#" className="navLink">Contact</a>
      </li>

<button className="btn">
  <a href="#">Book Now</a>
</button>

    </ul>
<div onClick={removeNav}className="closeNavbar">
<IoIosCloseCircle className="icon "/>
</div>
  </div>

<div onClick={showNav} className="toggleNavbar ">
<TbGridDots className="icon" />
</div>



</header>
    </section>
  )
}

export default Navbar ;





