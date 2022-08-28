// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {data} from "../data/mainData"
import React, { Component } from "react";
import {Link} from "react-router-dom"
import Slider from "react-slick";
import { useEffect,useState } from "react";
function getdata(){
    return fetch("http://localhost:8000/data").then(res=>(res.json())).catch(err=>console.log(err))
}
export default function Cero({hendleclick}) {
const [data,setdata]=useState([])
    useEffect(()=>{
        getdata().then(res=>(setdata(res))).catch(err=>(console.log(err)))
        console.log(data.length)
    },[])

    if(data.length<=5){
      var settings = {
        dots: false,
        infinite: true,
        // speed: 500,
        arrows:false,
      //   variableWidth:true,
        slidesToShow: data.length,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    }
    else if (data.length>5){
      var settings = {
        dots: false,
        infinite: true,
        // speed: 500,
        arrows:false,
      //   variableWidth:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 7000,
        cssEase: "linear"
      };
    }
 


    return (
        
      <Slider {...settings}>
       {data.map(el=>(<Link to={`/${el.name}/${el.id}`}>
        <div className="ceroDiv">
          <img src={el.thumbnail}/>
          </div>
        </Link>))}
      </Slider>
    );
  }