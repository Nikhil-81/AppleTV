import React, { Component } from "react";
import {Link} from "react-router-dom"
import Slider from "react-slick";
import { useEffect,useState } from "react";

export default function O_Cero({data}) {
// console.log(data)
if(data){

    if(data.length<=5){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows:true,
            //   variableWidth:true,
        slidesToShow: data.length,
        
        
      };
    }
    else if (data.length>5){
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows:true,
        //   variableWidth:true,
        slidesToShow: 10,
        slidesToScroll: 10
    };
}

}



        if(data  && data.length<=5){
return(
    <div Style="display:flex;margin-left:84px" >
         {data  && data.map(el=>(
        <div className="Less_5_ocero" Style=" width: 150px;margin-left:30px">
       <img src={el.c_img} Style="width:100%,border-radius: 50%;" />
       <p>{el.name}</p>
       <p>{el.s_name}</p>
       </div>
     ))}
     </div>
)
        }
        else if(data && data.length>5){
return(
    <div className="Dcerosel">

    <Slider {...settings}>
    {data  && data.map(el=>(
        <div className="ceroDiv Less_5_ocero">
       <img src={el.c_img} Style={"border-radius: 50%;"}/>
       <p>{el.name}</p>
       <p>{el.s_name}</p>
       </div>
     ))}
   </Slider>
     </div>
)
        }
      
  }
  