import React,{useEffect} from 'react'
import './main.css'
import img1 from '../../Assets/tajmahal.jpg'
import img2 from '../../Assets/dal lake.jpg'
import img3 from '../../Assets/beach.jpg'
import img4 from '../../Assets/hawamahal.jpg'
import img5 from '../../Assets/indiagate.jpg'
import img6 from '../../Assets/banaras.jpg'
import img7 from '../../Assets/konark.jpg'
import img8 from '../../Assets/cave.jpg'
import img9 from '../../Assets/memorial.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data=[
  {
    id: 1,
    imgSrc: img1,
    destTitle:'Taj Mahal',
    location: 'Agra',
grade:'CULTURAL RELAX',
//fees:'$700',
description:'Taj Mahal, white marble mausoleum complex in Agra, western Uttar Pradesh state, northern India. The Taj Mahal was built by the Mughal emperor Shah Jahan (reigned 1628–58) to immortalize his empress consort Mumtaz Mahal , who died in childbirth in 1631.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle:'Dal Lake',
    location: 'Srinagar',
grade:'CULTURAL RELAX',
//fees:'$700',
description:'Dal Lake is a picturesque freshwater lake in Srinagar, the summer capital of Jammu and Kashmir, India. Known as the "Jewel in the crown of Kashmir," it is famous for its stunning natural beauty, floating gardens, vibrant shikaras (traditional wooden boats), and houseboats.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle:'Calangute Beach',
    location: 'Goa',
grade:'CULTURAL RELAX',
//fees:'$700',
description:'Calangute Beach, often referred to as the "Queen of Beaches," is one of the most famous beaches in Goa, India. Located in North Goa, it is known for its golden sands, vibrant nightlife, and a wide range of water sports like parasailing and jet skiing.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle:'Hawa Mahal',
    location: 'Jaipur',
grade:'CULTURAL RELAX',
//fees:'$700',
description:'Hawa Mahal, or the "Palace of Winds," is an iconic five-story palace in Jaipur, Rajasthan, India. Built in 1799 by Maharaja Sawai Pratap Singh, it features a stunning façade with 953 intricately designed small windows (jharokhas). These windows allowed royal women to observe street festivals and daily life without being seen, adhering to the purdah system.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle:'India Gate ',
    location: 'New Delhi,',
grade:'CULTURAL RELAX',
//fees:'$700',
description:'India Gate is a majestic war memorial located in New Delhi, India. Designed by Sir Edwin Lutyens and completed in 1931, it stands 42 meters tall and honors the soldiers of the British Indian Army who lost their lives during World War I and the Third Anglo-Afghan War.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle:'Dashashwamedh Ghat',
    location: 'Varanasi',
grade:'CULTURAL RELAX',
//fees:'$700',
description:'Dashashwamedh Ghat is one of the most famous and vibrant ghats in Varanasi (Banaras), Uttar Pradesh, India. Located near the iconic Kashi Vishwanath Temple, it is steeped in mythology and history. According to legend, Lord Brahma performed a grand ten-horse sacrifice (Dashashwamedh) here.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle:' Konark Sun Temple',
    location: 'Odisha',
grade:'CULTURAL RELAX',
//fees:'$700',
description:'The Konark Sun Temple, located in Konark, Odisha, is a 13th-century architectural marvel and a UNESCO World Heritage Site. Built by King Narasimhadeva I of the Eastern Ganga Dynasty, the temple is designed as a colossal chariot dedicated to the Sun God, Surya.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle:'Ajanta and Ellora Caves,',
    location: 'Mumbai',
grade:'CULTURAL RELAX',
//fees:'$700',
description:'The Ajanta and Ellora Caves in Maharashtra, India, are UNESCO World Heritage Sites. Ajanta, dating back to 2nd century BCE, features 29 Buddhist caves with exquisite frescoes and carvings. Ellora, from the 6th–9th centuries CE, includes 34 caves representing Buddhist, Hindu, and Jain traditions.'
  },
  {
    id: 8,
    imgSrc: img9,
    destTitle:'Victoria Memorial',
    location: 'Kolkata',
grade:'CULTURAL RELAX',
//fees:'$700',
description:'The Victoria Memorial, located in Kolkata, India, is a magnificent white marble monument built between 1906 and 1921 to honor Queen Victoria. Designed by Sir William Emerson, it blends British and Mughal architectural styles. The memorial houses a museum showcasing paintings, artifacts, and historical memorabilia from the British Raj era.'
  },
  
]

const Main = () => {

useEffect(()=>{
Aos.init({duration:2000})
},[])

  return (
      
<section className="main container section">
  <div className="secTitle">
    <h3 data-aos="fade-right" className="title">
      Most visited destinations
    </h3>
  </div>
  <div className="secContent grid">
    {}
{
Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
return(
  <div key={id}
  data-aos="fade-up" 
  className="singleDestitation">
{}
<div className="imageDiv">
  <img src={imgSrc} alt={destTitle} />
</div>
  <div className="cardInfo">
    <h4 className="destTitle">{destTitle}</h4>
    <span className="continent flex">
    <IoLocationOutline className="icon"/>
    <span className="name">{location}</span>
    </span>
    <div className="fees flex">
      <div className="grade">
        <span>{grade}<small>+1</small></span>
      </div>
      <div className="price">
        <h5>{fees}</h5>
      </div>
    </div>
    <div className="desc">
      <p>{description}</p>
    </div>
    <button className="btn flex">
      DETAILS <FaClipboardList className="icon" />
    </button>
  </div>


  </div>
)
})
}
  </div>
</section>
  )
}

export default Main