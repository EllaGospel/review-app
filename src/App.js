import {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {v4 as uuidv4 } from 'uuid';
import Header from "./component/Header"
import ReviewForm from "./component/ReviewForm"
import ReviewStats from "./component/ReviewStats"
import ReviewList from "./component/ReviewList"
import './index.css'
import ReviewData from "./component/ReviewData"
import About from './component/pages/About';
// import Aboutlink from './component/Aboutlink';

function App() {
  const [review, setReview] = useState(ReviewData)
  const addReview = (newReview) =>{
    newReview.id = uuidv4()
    setReview([newReview, ...review])

  }
  const deleteReview =(id) =>{
    if(window.confirm('Are you sure you want to delete this item?')){
      setReview(review.filter((item)=>item.id!==id))
    }
  }

  return (
    <Router>
      <Header/>
    <div className="container">
      <Routes>
      <Route exact path='/' element={
        <>
      <ReviewForm handleAdd={addReview}/>
      <ReviewStats review={review}/>
      <ReviewList review={review} revDelete={deleteReview}/>
      {/* <Aboutlink/> */}
       </>
      }
      ></Route>

      <Route path='about' element={<About/>}/>
       </Routes>
       
      </div>
      
      </Router>
  )
}

export default App
