
import { useContext } from 'react'
import ReviewContext from './ReviewContext'
import ReviewItem from "./ReviewItem"

function ReviewList() {
  const {review} = useContext(ReviewContext)
    if(!review||review.length===0)
    return <p>no review yet</p>

  return (
    <>
    <div>
        {review.map((item) => (
            <ReviewItem key={item.id} item={item}/>
        ))}
    </div>
    </>
  )
}
export default ReviewList
