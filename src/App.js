
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from "./component/Header"
import ReviewForm from "./component/ReviewForm"
import ReviewStats from "./component/ReviewStats"
import ReviewList from "./component/ReviewList"
import './index.css'
import { ReviewProvider } from './component/ReviewContext';
import About from './component/pages/About';
 import Aboutlink from './component/Aboutlink';

function App() {
  
  
  return (
    <ReviewProvider>
    <Router>
      <Header/>
    <div className="container">
      <Routes>
      <Route exact path='/review-app' element={
        <>
      <ReviewForm/>
      <ReviewStats/>
      <ReviewList/>
       <Aboutlink/> 
       </>
      }
      ></Route>

      <Route path='about' element={<About/>}/>
       </Routes>
       
      </div>
      
      </Router>
      </ReviewProvider>
  )
}

export default App
