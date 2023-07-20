import {useEffect, useState} from "react";
import Form from "./component/Form";
import ReviewsList from "./component/ReviewsList";


function App() {
  
  //get the reviews data from the localstorage
  const getReviewsDataFromLocalStorage=JSON.parse(localStorage.getItem('reviews'))
  
  const [reviews,setReviews] =useState(getReviewsDataFromLocalStorage);
  
  //useEffect hook to track the updates that happen on the reviews state and store this updates in the localStorage function
  //to keep the state of reviews fill up with data on the refresh of the page
  useEffect(()=>{
     localStorage.setItem('reviews',JSON.stringify(reviews))
  },[reviews])

  const [reviewToEdit,setReviewToEdit]=useState({
    review:null,
    updating:false
  })

  
  //function to add new review to the reviews list

  const addReview=(review)=>{
    setReviews([...reviews,review])
  }

  //function to active the update button to update a review

  const editReview=(review)=>{
    setReviewToEdit({
      review,
      updating:true
    }) 
  }

  //function to remove review from the reviews list

  const removeReview=(id)=>{
    setReviews(reviews.filter(review=>review.id !== id))
  }

  
  //function to update review from the reviews list

  const updateReview=(review)=>{
    setReviews(reviews.map(item=>item.id === review.id ? {...item,...review} : item))
    setReviewToEdit({
      review:null,
      updating:false
  })
  }

  

   //return the form and reviewlist components in the home page of our app  and send the above functions to this components to be used there
  return (
    <>
      <Form  addReview={addReview} reviewToEdit={reviewToEdit} reviews={reviews} updateReview={updateReview}/> 
      <ReviewsList reviews={reviews} removeReview={removeReview} editReview={editReview} /> 
    </>
  );
}

export default App;
