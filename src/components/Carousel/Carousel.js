import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios'
import {img_300 ,noPicture } from '../../Config/config';
import {useEffect , useState} from 'react'
import './Carousel.css'

const handleDragStart = (e) => e.preventDefault();



const Carousel = ({media_type, id}) => {

  const apikey = "be27d5e930f16c035d895a7b3303b9b9";
  const [credits, setCredits] = useState([]);

  // const items = [
    // <img src="path-to-img"  />,
    // <img src="path-to-img" onDragStart={handleDragStart} />,
    // <img src="path-to-img" onDragStart={handleDragStart} />,
  // ];
  const items = credits?.map((c)=>(
    <div className = "carouselItem">
      <img 
        src= {c.profile_path ? `${img_300}/${c.profile_path}`: noPicture}
        alt = {c.name}
        onDragStart={handleDragStart}
        className = "carouselItem_img"
      />
      <b className = "carouselItem_name">{c.name}</b>
    </div> 
  ));
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };
    

const fetchActor = async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${apikey}&language=en-US`)
    // console.log(data)
    setCredits(data.cast)
}
useEffect(()=>{
  fetchActor();

  // eslint-disable-next-line
  
})
  return (
    <AliceCarousel 
    mouseTracking
      infinite
      disableDotsControls
      disableB  uttonsControls
      responsive={responsive}
      items={items}
      autoPlay
     />
  );
}
export default Carousel;