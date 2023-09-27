import { LaunchCard } from './LaunchCard';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { Home } from './Home';
import logo from './images/SpaceX-logo.png';
import { useQuery } from './generated/graphql';
import { Loading } from './components/LoadingPrompt';
import { LoadingWrapper } from "./Styled-Components/Loading.styles"
import { ErrorPage } from './components/ErrorPage';

function App() {

  let {data,loading,error} = useQuery();
  if(loading){
    return (
    <LoadingWrapper>
    <Loading />
    </LoadingWrapper>
    )

  }
  else if(error){
    console.log("ERR:",error);
    console.log("DATA:",data);
    
    
    return <ErrorPage />

  }
  else{
    console.log("DATA:",data);
  return (
    <>
    <div className='header'>
      <img src={logo} alt="logo" className='logo'/>
    </div>
    <Router > 
      <Routes>
        <Route path="/" element={<Home data={data} />}/>
        <Route path="/:mission_name" element={<LaunchCard data={data}/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes> 
    </Router>  
  </>
  )
  }

}
export default App;



