import React, { Component } from "react";
import {Link} from "react-router-dom"
import Slider from "react-slick";
import { useEffect,useState } from "react";

export default function Cero({data,hendleData}) {
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
        infinite: true,
        speed: 500,
        arrows:true,
        //   variableWidth:true,
        slidesToShow: 5,
        slidesToScroll: 3
    };
}

}
console.log(data)
function hendleClick(el){
  // console.log(el)
    hendleData(el)
}

        if(data  && data.length<=5){
return(
    <div Style="display:flex;margin-left:84px" >
         {data  && data.map(el=>(
        <div onClick={()=>hendleClick(el)} className="Less_5_cero" Style=" width: 264px;margin-left:30px">
       <img src={el.s_thumbnail} Style="width:100%" />
       <div Style={"text-align: start;"} >
        <p>EPISODE {el.epi_no}</p>
       <h5>{el.title}</h5>
       <p>{el.Disc}</p>
       <div Style={"display:flex;gap:25px"} >
        <p>{el.time}</p>
        <p>{el.data}</p>
        <p>A</p>
       </div>

       </div>
       </div>
     ))}
     </div>
)
//"/:show/:id/epidode/:no"
        }
        else if(data && data.length>5){
return(
    <div className="Dcerosel">

    <Slider {...settings}>
    {data  && data.map(el=>(
        <div onClick={()=>hendleClick(el)} className="ceroDiv">
       <img src={el.s_thumbnail} />
       <div Style={"text-align: start;"} >
        <p>EPISODE {el.epi_no}</p>
       <h5>{el.title}</h5>
       <p>{el.Disc}</p>
       <div Style={"display:flex;gap:25px"} >
        <p>{el.time}</p>
        <p>{el.data}</p>
        <p>A</p>
       </div>

       </div>
       </div>
     ))}
   </Slider>
     </div>
)
        }
      
  }
  