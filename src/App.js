import Header from "./component/Header"
import ReviewStats from "./component/ReviewStats"
import ReviewList from "./component/ReviewList"
import './index.css'
import {useState} from 'react'
import ReviewData from "./component/ReviewData"

function App() {
  const [review, setReview] = useState(ReviewData)
  const deleteReview =(id) =>{
    if(window.confirm('Are you sure you want to delete this item?')){
      setReview(review.filter((item)=>item.id!==id))
    }
  }

  return (
    <div className="container">
      <Header/>
      <ReviewStats review={review}/>
      <ReviewList review={review} revDelete={deleteReview}/>
      
      
    </div>
  )
}

export default App
