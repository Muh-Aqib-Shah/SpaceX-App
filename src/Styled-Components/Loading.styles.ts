import styled from "styled-components";

export const LoadingWrapper = styled.div`
.loading-cont{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pane-box{
    height: 40px;
    width: 300px;
    text-align: center;
  }
  .obj{
    display: inline-block;
    margin: 0 10px;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    background-color: purple;
  }
  .Toggle{
    animation: loading 0.4s alternate 0s linear;
  }
  @keyframes loading {
    from {transform: translateY(0);}
    to {transform: translateY(-100%);}
  }
`