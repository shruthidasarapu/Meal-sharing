import React, { useState, useEffect } from "react";
import {MealWrapper} from "./mealWrapper";
import {Footer} from "./footer";
export function MainPage(){
   const[meals, setMeals] = useState([])
   console.log(meals);
   useEffect (() => {

      (async() => { 
              const response = await fetch('/api/meals')
             const data = await response.json()
             setMeals(data)
             console.log(data);
            })()

   },[])
   
   
   return (
       <div>
            
               {/* <h1>MEAL-SHARING APP</h1>
                <h2>different type of meals</h2>*/}
            <div>
               {meals.map((meal) => <MealWrapper key= {meal.id}{...meal}/>)}
            
           </div>
             <Footer></Footer>
             </div>
    )
}
