//this function used to show the rating that user select from the form in the review list
function showRating(rate){

    if(rate){
            return(
                    <i className="bi bi-star-fill text-warning"></i>
                  )
    }

 
    else
         return 'something wrong'
           
    }


  export default showRating;
