import {v4 as uuidv4 } from 'uuid';
import { createContext,useState } from "react";
import ReviewData from '../component/ReviewData';

const ReviewContext = createContext()

export const ReviewProvider =({children}) =>{
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

     return <ReviewContext.Provider value={{
        review,
        deleteReview,
        addReview,
     }}>
            {children}
     </ReviewContext.Provider>
}

export default ReviewContext