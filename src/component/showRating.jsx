//this function used to show the rating that user select from the form in the review list
function showRating(rate){
    
        for(let i=1; i<=rate;i++){
            return(
                    <i className="bi bi-star-fill text-warning"></i>
                  )
        }
}


  export default showRating;
