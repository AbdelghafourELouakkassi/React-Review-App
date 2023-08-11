//this function used to show the rating that user select from the form in the review list
function showRating(rate){
        let stars=[]
        for(let i=1; i<=rate;i++){
            stars.push(<i className="bi bi-star-fill text-warning" ></i>)
            
        }
        return(<div>{stars}</div>)
}


  export default showRating;
