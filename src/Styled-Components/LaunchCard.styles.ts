import styled from "styled-components";

export const StyledLaunchCard = styled.div`

.Launch-cont{
    height: 80vh;
    width : 100vw;
    display: flex;
    justify-content: center;
  }
  
  .Card{
    margin: 70px 0;
    height: 70%;
    width: 50%;
    display: flex;
    justify-content: space-around;
    background-color: grey;
  }
  .thumb-image{
    height: 100%;
    width: 100%;
  }
  .image{
    width: 50%;
    background-color: black;
    height: 100%;
    position: relative;
  }
  
  .image .img-btn1{
    position: absolute;
    top: 50%;
    left: 0;
  }
  .image .img-btn2{
    position: absolute;
    top: 50%;
    right: 0;
  }
  
  .desc-cont{
    width : 50%;
    height: 100%;
  
  }
  
  .head{
    margin: 10px 0;
    height: 20%;
    background-color: burlywood;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 150%;
    font-weight: 800;
  }
  
  .rckt-type{
    margin: 10px 0;
    height: 10%;
    font-weight: 600;
    background-color: yellowgreen;
    text-transform: capitalize; 
  }
  
  .rckt-details{
    height: 50%;
    font-size: 100%;
    background-color: thistle;
    overflow-Y: scroll;
  }

  .rckt-details::-webkit-scrollbar{
    width : 5px;
    border-radius: 10px 10px 10px 10px;
  }

  .rckt-details::-webkit-scrollbar-thumb{
    background-color: black;
    border-radius: 10px 10px 10px 10px;
  }
  .rckt-takeoff{
    background-color: tan;
    height: 10%;
    font-size: small;
    display: flex;
    align-items: end;
  }
`