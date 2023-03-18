import { useState, useContext } from "react"
import ReviewContext from "./ReviewContext"
import Card from "./Card"
import Button from "./Button"
import Giverating from "./Giverating"
function ReviewForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setmessage] = useState('')
    const [rating, setRating] =useState(10)
    const {addReview} = useContext(ReviewContext)

    const textchangeHandler = (e) =>{
          if(text===''){
            setbtnDisabled(true)
            setmessage(null)
          }else if(text !=='' && text.trim().length<=15){
            setmessage('input text must be above 15 characters')
          setbtnDisabled(true)
          }else{
            setmessage(null)
            setbtnDisabled(false)
          }
          setText(e.target.value)
    }

    const formSubmit = (e) =>{
       e.preventDefault()
       if(text.trim().length >15){
        const newReview ={
          text,
          rating
        }
         addReview(newReview)
         setText('')
      }
    }
  return (
    <Card>
        <form onSubmit={formSubmit}>
            <h4>Kindly Review Our Service </h4>
            <Giverating select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={textchangeHandler} type="text" placeholder="write us a review" value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>
                    submit
                </Button>
            </div>
            {message && <div className='message'>{message} </div>}
        </form>
    </Card>
  )
}

export default ReviewForm
