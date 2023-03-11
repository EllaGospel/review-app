import {v4 as uuidv4 } from 'uuid';
import Header from "./component/Header"
import ReviewForm from "./component/ReviewForm"
import ReviewStats from "./component/ReviewStats"
import ReviewList from "./component/ReviewList"
import './index.css'
import {useState} from 'react'
import ReviewData from "./component/ReviewData"

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
    <div className="container">
      <Header/>
      <ReviewForm handleAdd={addReview}/>
      <ReviewStats review={review}/>
      <ReviewList review={review} revDelete={deleteReview}/>
      
      
    </div>
  )
}

export default App
