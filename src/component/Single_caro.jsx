import React, { Component } from "react";
import {Link} from "react-router-dom"
import Slider from "react-slick";
import { useEffect,useState } from "react";

export default function Cero({data}) {
// console.log(data)
if(data){

    if(data.length<=5){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows:false,
            //   variableWidth:true,
        slidesToShow:1,
        
        
      };
    }
    else if (data.length>5){
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
        //   variableWidth:true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
}

}



        if(data  && data.length<=5){
return(
    <div Style="display:flex;margin-left:100px" >
         {data  && data.map(el=>(
        <div className="single_page" Style=" width: 264px;margin-left:30px">
       <img src={el.img} Style="width: 100% !important" />
       </div>
     ))}
     </div>
)
        }
        else if(data && data.length>5){
return(
    <div>

    <Slider {...settings}>
    {data  && data.map(el=>(
       <div className="ceroDiv">
       <img src={el.img}/>
       </div>
     ))}
   </Slider>
     </div>
)
        }
      
  }
  