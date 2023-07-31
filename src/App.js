import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' 
      //  exact render={(props)=>(
      //     <>
      //       <Banner {...props}/>
      //       <Movies {...props}/>
      //     </>
      //   )}
         element={<><Banner  {...props}/><Movies  {...props}/></>}
        />
        <Route path='/favourites' element={<Favourite />} />
      </Routes>
      {/* <Banner/> */}
      {/* <Movies/> name="udai" */}
      {/* <Favourite/> */}
    </Router>
  );
}

export default App;