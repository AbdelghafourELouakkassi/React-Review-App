//this function used to show the rating that user select from the form in the review list
function showRating(rate){

    if(rate>0){
        for(let i=1; i<=rate;i++){
            return(
                    <i className="bi bi-star-fill text-warning"></i>
                  )
        }
    }

 
    else
         return 'something wrong'
           
    }


  export default showRating;
