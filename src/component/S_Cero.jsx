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
        slidesToShow: data.length,
        
        
      };
    }
    else if (data.length>5){
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
        //   variableWidth:true,
        slidesToShow: 5,
        slidesToScroll: 3
    };
}

}



        if(data  && data.length<=5){
return(
    <div Style="display:flex;margin-left:84px" >
         {data  && data.map(el=>(
        <div className="Less_5_cero" Style=" width: 264px;margin-left:30px">
       <img src={el.img} Style="width:100%" />
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
  