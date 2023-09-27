import styled from "styled-components"


export const StyledHomeComponent = styled.div`
.HomePage {
    width: 100vw;
    height: auto;
    overflow-x: hidden;
  }  
  .container{
    width: 100%;
    height: 80%;
    text-align: center;
    overflow-x: hidden;
  }
  .box{
    display:inline-block;
    margin: 10px 20px;
    width: 350px;
    height: 200px;
    border: 1px solid black;
    box-shadow: 6px 6px 4px grey;
    background-color: white;
  }
  .box:hover{
    animation: expand 0.1s linear 0s 1 forwards;
  }
  
  @keyframes expand{
    from {transform: scale(1)}
    to {transform :scale(1.05) }
  }
  .loadmore-box{
    width: 100%;
    height: auto;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .load-more{
    background-color: black;
    color: white;
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: larger;
    font-weight: 500;
  }
  .img{
    height: 100%;
    width : 45%;
    display: inline-block;
    background-color: black;
  }
  .desc-box{
    width: 55%;
    height: 100%;
    display: inline-block;
  }
  .thumbnail{
    height: 100%;
    width: 100%;
  }
  .desc-header{
    height: 30%;
    width : 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:thistle;
    font-size: 100%;
    font-weight: 700;
  
  }
  .info-box{
    height: 55%;
    width: 100%;
  }
  .rocket-model{
    height: 26%;
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    text-transform: capitalize;
    border-bottom: 2px solid black;
    font-weight: 600;
  }
  .rocket-modeltype{
    display: inline-block;
    width:40%;
    height: 100%;
  }
  .rocket-modelinfo{
    width:60%;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: flex-start;
  }
  .rocket-details{
    height: 74%;
    max-height: 600px;
    font-weight: 400;
    font-size: 14px;

  }
  .small{
    font-size: 10px;
  }
  .xsmall{
    font-size: 7px;
  }
  .xxsmall{
    font-size: 6px;
  }
 
  .launch-date{
    font-size: small;
    height: 10%;
    width: 100%;
    background-color: wheat;
    display: flex;
    justify-content: flex-start;
  }
`