import React, { useState } from "react";
import { LaunchList } from "./generated/graphql";
import placeholder from './images/no_image_found.jpg';
import { Link,useNavigate } from "react-router-dom";


interface props{
  data: LaunchList | undefined
}

export const Home : React.FC<props> = ( { data } ) => {

let list= [1,2,3,4,5,6,7,8];
let navigate = useNavigate();

let [results,SetResults] = useState<number>(10)

function GetData(element: string){
  let newDate = new Date(element);

  return  newDate.getDate() + " " + months[newDate.getMonth()-1] + " " + newDate.getFullYear()
}
const months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
console.log("DATA:",data?.launches?.slice(0,results));

return (
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
                <div className='rocket-modeltype'>{elem?.rocket?.rocket_type} </div>
                <div className= "rocket-modelinfo">{elem?.rocket?.rocket_name}</div>
            </div>

            <div className="rocket-details">
              {elem?.details}
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
);
}