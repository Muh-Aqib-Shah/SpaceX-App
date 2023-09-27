import React, { useState } from "react";
import { LaunchList } from "./generated/graphql";
import placeholder from './images/no_image_found.jpg';
import { useNavigate } from "react-router-dom";
import { StyledHomeComponent } from "./Styled-Components/Home.styles";


interface props{
  data: LaunchList | undefined
}

export const Home : React.FC<props> = ( { data } ) => {

let navigate = useNavigate();

let [results,SetResults] = useState<number>(10)

function GetData(element: string){
  let newDate = new Date(element);

  return  newDate.getDate() + " " + months[newDate.getMonth()-1] + " " + newDate.getFullYear()
}

const months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];

let dummyText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam, autem consequuntur doloribus possimus nihil expedita laudantium rem laborum enim cupiditate cumque minima nisi? Illo deleniti eius est velit doloremque";

setTimeout(()=>{
 let Data = Array.from(document.getElementsByClassName("rocket-details"))

 if(Data){
  Data.forEach((node)=>{
    console.log("SCROLL:",node.children[0].clientHeight," and totall:",node.clientHeight);
    
    if(node.children[0].clientHeight > node.clientHeight){
      
     node.children[0].clientHeight < (node.clientHeight + 70) ? node.classList.add("small") : 
     node.children[0].clientHeight < (node.clientHeight + 150) ? node.classList.add("xsmall") :
     node.classList.add("xxsmall")
     }
     
  })
 }

 
},1000)

return (
  <StyledHomeComponent>
  <div className="HomePage">

    <div className='container'>
      {data?.launches?.slice(0,results).map(elem => {
      return (
      
      <div className='box' onClick={()=> navigate(`/${elem?.mission_name}`)}>

        <div className='img'>
          <img className="thumbnail" 
          src= {elem?.links?.flickr_images != null && elem?.links?.flickr_images[0] ? elem?.links?.flickr_images[0] : placeholder}
          alt="Rocket" />
        </div>

        <div className='desc-box'>
          <div className='desc-header'>
            <p>{elem?.mission_name}</p>
          </div>
          <div className='info-box'> 

            <div className='rocket-model'>
                <div className='rocket-modeltype'>{elem?.rocket?.rocket_type}:</div>
                <div className= "rocket-modelinfo">{elem?.rocket?.rocket_name}</div>
            </div>

            <div className="rocket-details">
             <p id="dynamic-text"> {elem?.details ?? dummyText}</p>
            </div>
            

          </div>
          <div className='launch-date'>
              {GetData(elem?.launch_date_local)}
            </div>
        </div>
      
      </div>
      )})}
      <div className="loadmore-box">
      <button className="load-more" onClick={()=> SetResults(prev => prev + 10)}>Load More...</button>
      </div>
    </div>
    
  </div>
  </StyledHomeComponent>
);
}