//this function used to show the rating that user select from the form in the review list
function showRating(rate){

    if(rate===1){
            return(
                    <i className="bi bi-star-fill text-warning"></i>
                  )
    }

    else if(rate===2){
            return(
                <>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                </>
            )
      
    }

     else if(rate===3){
            return(
                <>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                </>
      
                )
     }

    else if (rate===4){
            return(
                <>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                </>
                  )

    }             
    
    else if(rate===5){
            return(
                <>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                </>
                  )
    }

    else
         return 'something wrong'
           

    }

  


  export default showRating;