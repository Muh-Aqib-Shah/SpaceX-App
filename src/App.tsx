import './App.css';
import { LaunchCard } from './LaunchCard';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { Home } from './Home';
import logo from './images/SpaceX-logo.png';
import { useQuery } from './generated/graphql';
import { Loading } from './components/LoadingPrompt';

function App() {

  let {data,loading,error} = useQuery();
  if(loading)
   return <Loading />

  else if(error){
    console.log("ERR:",error);
    console.log("DATA:",data);
    
    
    return <div> Yowaimo...</div>

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
      </Routes> 
    </Router>  
  </>
  )
  }

}
export default App;



