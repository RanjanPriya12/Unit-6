
import './App.css';
import CustomizedTables from  "./components/table"
import {Form} from "./components/form"
import {Routes,Route} from "react-router-dom"
// import {UseNavigate} from "react-router-dom";
import { Country } from './components/addCountry';

function App() {
  return (
    <div className="App">
   

<Routes>

  <Route path='/form' element={<Form/>}></Route>
  <Route path="/" element={<CustomizedTables/>}></Route>
  <Route path="/country" element={<Country/>}></Route>
</Routes>

    </div>
  )
}

export default App;