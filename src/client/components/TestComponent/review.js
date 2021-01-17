import React, {useEffect, useState} from "react";

export  function ReviewDisplay() {
  const[review, setReview] = useState([])
  console.log("hello");
  console.log(review);
  useEffect (() => {

    (async() => { 
            const response = await fetch("/api/reviews")
            const data = await response.json();
            console.log(data)
            setReview(data);
           })()

 },[])
  
  return (
    <div>
     { review.map((review) => 
     <div className= "rev">
       <h3>{review.title} </h3>
       <h4>reviews:{review.stars}</h4>
     </div> )}
    </div>
  );
}