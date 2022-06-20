import Routing from './routing/Routing';
// import './App.css';
import LandingPage from './views/landingPage/LandingPage';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner/Banner';



function App() {
  // return (
  //   <div className='app-container'>
      
      
  //     <div className="body">
      //  <LandingPage/>
  //     </div>
      
  //   </div>
  // )
  return (
    <div className="App">
    
   
           {/* <LandingPage/> */}
      <Routing/>
      {/* <Banner/> */}

   
 
    </div>
  );
}

export default App;
