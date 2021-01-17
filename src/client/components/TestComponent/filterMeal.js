import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Form} from "./form"; 

export default function FilterMeal() {
  const {id} = useParams();
  const[mealwithId, setMealwithId ] = useState([])
  console.log(mealwithId);

  useEffect (() => {

    (async() => { 
            const response = await fetch(`/api/meals/${id}`)
            const data = await response.json()
            setMealwithId(data);
           })()

 },[])
  
  return (
    <div>
     { mealwithId.map((meal) => <Form key= {meal.id}{...meal}/>)}
    </div>
  );
}
