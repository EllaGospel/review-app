import PropTypes from 'prop-types'
import ReviewItem from "./ReviewItem"

function ReviewList({review, revDelete}) {
    if(!review||review.length===0)
    return <p>no review yet</p>

  return (
    <>
    <div>
        {review.map((item) => (
            <ReviewItem key={item.id} item={item} revDelete={revDelete}/>
        ))}
    </div>
    </>
  )
}
export default ReviewList
