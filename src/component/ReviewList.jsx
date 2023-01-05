import PropTypes from 'prop-types'
import ReviewItem from "./ReviewItem"

function ReviewList({review}) {
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
