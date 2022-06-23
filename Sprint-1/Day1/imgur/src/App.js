
import './App.css';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom';
import TopNavbar from './Components/TopNavbar';
import BottomNavbar from './Components/BottomNavbar';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <BottomNavbar/>
    </div>
  );
}

export default App;
