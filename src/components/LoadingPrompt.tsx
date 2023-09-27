import { useEffect } from "react";

export const Loading = () => {
   
    useEffect(()=>{
        
    let index: number;
    let b = document.getElementsByClassName("obj");
   
    let interval: NodeJS.Timer = setInterval(()=>{
        
       Array.from(b).map((elem,ind) => {
     
            if(Array.from(elem.classList).find(df => df === "Toggle")){
             index = ind
             elem.classList.remove("Toggle")   
             }
     }) 
          index < 2  && index >= 0 ? b[index+1].classList.add("Toggle") : b[0].classList.add("Toggle")
           
    },400)
    
    return () => clearInterval(interval)
},[])
    
    return (
    <div className="loading-cont">
        <div className="pane-box">
            <div className = "obj Toggle" />
            <div className = "obj" />
            <div className = "obj" />
            
        </div>

    </div>
    )
}