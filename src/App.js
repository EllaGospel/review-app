import Header from "./component/Header"
import ReviewList from "./component/ReviewList"
import './index.css'
import {useState} from 'react'
import ReviewData from "./component/ReviewData"

function App() {
  const [review, setReview] = useState(ReviewData)




  return (
    <div className="container">
      <Header/>
      <ReviewList review={review}/>
      
      
    </div>
  )
}

export default App
