import React, {useEffect, useState} from "react";

export  function ReservationDisplay() {
  const[reservation, setReservation] = useState([])
  console.log("hello");
  useEffect (() => {

    (async() => { 
            const response = await fetch("/api/reservations")
            const data = await response.json();
            console.log(data)
            setReservation(data);
           })()

 },[])
  
  return (
    <div>
     { reservation.map((reservation) => 
     <div className= "res">
       <h3> name : {reservation.contact_name} </h3>
       <h5>reservation : {reservation.created_date}</h5>
       
     </div> )}
    </div>
  );
}