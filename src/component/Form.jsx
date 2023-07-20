import { useState,useEffect } from 'react';
import { Rating } from 'react-simple-star-rating'


//Review form 

function Form({addReview,reviewToEdit,reviews,updateReview}){

  //initialize the state of the form elements
    const [name,setName]=useState('');
    const [message,setMessage]=useState('');
    const [rating,setRating] =useState(1);

    const handleRating = (rate) => {
        setRating(rate);
      }

    
    //useEffect hook to fill up the form elements with the info of the review that the user want to update 
    useEffect(()=>{
      if(reviewToEdit.updating){
        setName(reviewToEdit.review.name)
        setMessage(reviewToEdit.review.message)
        setRating(reviewToEdit.review.rating)
      }
    },[reviewToEdit])
    
    
   
  
   //submit function to update the review if the update button is active else to add new review 

   const formSubmit=(e)=>{
     e.preventDefault()
     if(reviewToEdit.updating){
      const review={
        id:reviewToEdit.review.id,
        name,
        message,
        rating
      }
      updateReview(review)
      setName('')
      setMessage('')
      setRating(1)
     }
     else {
      const review={
        id:reviews.length+1,
        name,
        message,
        rating
      }
      addReview(review)
      setName('')
      setMessage('')
      setRating(1)
    }

  }

 
   
  
    return (

        <div className="mb-3 container mt-3 ">
            <form>
                <h1 className="text-center"> <i className="bi bi-star-half text-warning"></i> React-Review-App</h1>
                    <label  className="form-label">Name</label>
                    <input type="text" id='name' name="name" onChange={(e)=>{setName(e.target.value)}}  className="form-control mb-3 " value={name} />
                    <label  className="form-label">Message</label>
                    <textarea className="form-control mb-3" id="message" onChange={(e)=>{setMessage(e.target.value)}} value={message} rows="4"></textarea>
                   <Rating onClick={handleRating} initialValue={rating} /><br/>
                { !reviewToEdit.updating ?
                <button className="btn btn-primary mb-2 mt-2" onClick={formSubmit}>
                Add
                </button> :
                <button className="btn btn-warning mb-2 mt-2" onClick={formSubmit}>
                Update
                </button>
                }
            </form>
        </div>
    )
    }

export default Form