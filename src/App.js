import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending'
import "./style/landingpage.css"
import Superhero from './components/Superhero';
function App() {
  return (
   <div> 
    {/* intro */}
      <div className='myBG '>
          <NavigationBar />  
          <Intro />          
      </div>   
      {/* end */}
      {/* trending */}
      <div className='trending'>
        <Trending />
      </div>
      <div className='superhero'>
        <Superhero/>
      </div>
      {/* trending */}
   </div>
  )
}

export default App;
