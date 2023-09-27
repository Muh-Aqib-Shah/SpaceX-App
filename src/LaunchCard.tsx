import React, { useState } from "react";
import './App.css'
import { LaunchList } from "./generated/graphql";
import { useParams } from "react-router-dom";
import placeholder from './images/no_image_found.jpg'
import {ArrowBackIos,ArrowForwardIosRounded} from '@mui/icons-material';
import { IconButton } from "@mui/material";

interface Props{
    data: LaunchList | undefined
}

const months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];

function GetData(element: string){
    let newDate = new Date(element);

    return  newDate.getDate() + " " + months[newDate.getMonth()-1] + " " + newDate.getFullYear()
  }

export const LaunchCard : React.FC<Props> = ( { data } ) => {

    const { mission_name } = useParams()

    let LaunchDetails = data?.launches?.filter(elem => elem?.mission_name === mission_name)
    let [heroImage,SetheroImage] = useState<(string | null)[]>((LaunchDetails && LaunchDetails[0]?.links?.flickr_images) ?? [placeholder]);
    let [index,Setindex] = useState<number>(0);
    
    function frwrdimg(list: (string | null)[]){
        console.log("f INDEX IS:",index," And length:",list.length);
        
        if(index < list.length)
      Setindex(prev => prev+1)
        else{
            Setindex(0)
        }
    }
    function bckwrdimg(list : (string | null)[]){
        console.log("b INDEX IS:",index," And length:",list.length);
        if(index > 0){
            Setindex(prev => prev-1)
        }
        else{
            Setindex(list.length)
        }
    }

    return (
        <div className="Launch-cont">
            <div className="Card">
                <div className="image">
                    <img src={heroImage[index] ?? placeholder} 
                    alt="Rocket" className="thumb-image"/> 
                    <IconButton onClick={()=>bckwrdimg(heroImage) } className="img-btn1">
                    <ArrowBackIos/>
                    </IconButton>
                    <IconButton onClick={()=>frwrdimg(heroImage)} className="img-btn2">
                    <ArrowForwardIosRounded/>
                    </IconButton>
                </div>
                <div className="desc-cont">
                    <div className="head">{LaunchDetails && LaunchDetails[0]?.mission_name}</div>
                    <div className="rckt-type">{LaunchDetails && LaunchDetails[0]?.rocket?.rocket_type}: {LaunchDetails && LaunchDetails[0]?.rocket?.rocket_name}</div>
                    <div className="rckt-details">{LaunchDetails && LaunchDetails[0]?.details}</div>
                    <div className="rckt-takeoff">{GetData(LaunchDetails && LaunchDetails[0]?.launch_date_local)}</div>
                </div>
            </div>
        </div>
    )
}