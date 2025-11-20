import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Carousel from './components/Carousel'
import CountDownTImer from './components/CountDownTimer'
import Accordian from "./components/Accordian"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NestedComments from "./components/NestedComments"
import StarRating from "./components/StarRating"
import Todo from "./components/Todo"
import ProgressBar from "./components/ProgressBar"

function App() {


  return (
    <BrowserRouter>
    
    <div className="app">
      < Navbar/>
      <Routes>
         
          <Route path="/" element={<Home/>}/>
          <Route path="/Carousel" element={<Carousel/>}/>
          <Route path="/CountDownTimer" element={<CountDownTImer/>}/>
          <Route path="/Accordian" element={<Accordian/>}/>
          <Route path="/NestedComments" element={<NestedComments/>}/>
          <Route path="/StarRating" element={<StarRating/>}/>
          <Route path="/Todo" element={<Todo/>}/>
          <Route path="/ProgressBar" element={<ProgressBar/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
