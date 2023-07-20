import showRating from "./showRating"



function ReviewsList({reviews,removeReview,editReview}) {

 

  /* return the review elements with two buttons one to active the update button in the form to update the review
   and the other to delete the review */

  return (
    <div className="row d-flex justify-content-center container ">
    {reviews.map(review=>
        <div className="col-lg-3 mb-2" key={review.id}>
        <div className="card p-2 mb-4 m-2">
            <div className="card-body" >
                <h6 className="card-title">Name : {review.name}</h6>
                <h6 className="card-text">Message : {review.message}</h6>
                <h6>Rating : {showRating(review.rating) }</h6>
            </div>
            <div>
                <button className="btn btn-info me-2 mb-2" onClick={()=>
                  editReview(review)
                }
                >Update
                </button>
                <button className="btn btn-danger mb-2" onClick={(e)=>{e.preventDefault()
                removeReview(review.id)
                }}>Remove
                </button>
            </div>
        </div>
        </div>
    
    )}
    </div>
  )
}

export default ReviewsList