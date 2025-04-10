import React ,{useEffect}from 'react'
import './footer.css'
import { FiSend } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import video from '../../Assets/video.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {

  useEffect(()=>{
  Aos.init({duration:2000})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
        <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up"  type="text" placeholder='Enter Email Address' />
            <button className="btn flex" type="submit">
          SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

<div className="footerCard flex">
<div className="footerIntro flex">
  <div className="logoDiv">
    <a href="#" className='logo flex'>
    <MdOutlineTravelExplore className="icon"/>
      TripGo
    </a>
  </div>
  <div data-aos="fade-up" className="footerParagraph">
  Explore the rich cultural heritage of India with breathtaking landmarks like Hawa Mahal, India Gate, and Dashashwamedh Ghat. From historic palaces to sacred ghats, experience the essence of India's vibrant traditions and timeless architecture
  </div>
  <div data-aos="fade-up" className="footerSocials flex">
  <FaTwitter className='icon'/>
  <FaYoutube className='icon'/>
  <FaInstagram className='icon'/>
  <FaTripadvisor className='icon'/>
  </div>
</div>

<div className="footerLinks grid">
  {/*group 1*/}
  <div data-aos="fade-up" 
  data-aos-duration="3000"
  className="linkGroup">
    <span className="groupTitle">
      OUR AGENCY
    </span>
    <li className="footerList flex">
    <FaChevronRight className="icon" />
    Services
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
    Insurance
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
    Agency
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
    Tourism
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
    Payment
    </li>
  </div>
  {/*group 2*/}
  <div data-aos="fade-up"
  data-aos-duration="4000"
  className="linkGroup">
    <span className="groupTitle">
      PARTNERS
    </span>
    <li className="footerList flex">
    <FaChevronRight className="icon" />
    Bookings
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
   Rentcars
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
    HostelWorld
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
    Trivago
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
    TripAdvisor
    </li>
  </div>
  {/*group 3*/}
  <div data-aos="fade-up" 
  data-aos-duration="5000"
  className="linkGroup">
    <span className="groupTitle">
     LAST MINUTE
    </span>
    <li className="footerList flex">
    <FaChevronRight className="icon" />
    Jaipur
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
  New Delhi
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
  Banaras
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
   Agra
    </li>

    <li className="footerList flex">
    <FaChevronRight className="icon" />
    Kolkata
    </li>
  </div>
</div>
<div className="footerDiv flex">
  <small>BEST TRAVEL WEBSITE THEME</small>
  <small>COPYRIGHT RESERVED-SUHANI 2025</small>
</div>
</div>
      </div>
    </section>
  )
}

export default Footer