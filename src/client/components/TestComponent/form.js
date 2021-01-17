import React, {useState,useEffect} from 'react';

export function Form({id,title}){
const [name, setName] = useState("");
const [number, setNumber] = useState();
const [email, setEmail] = useState("");

  function onSubmit(){
    (async() => { 
        fetch('/api/reservations',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              
              contact_phonenumber: number,
              contact_name:name,
              contact_email:email 
            })
        })
    })()
}

return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
        <form>
  
  <label>
    Name: 
    <input type="text" value = {name} onChange= {(e) => setName(e.target.value) } />
  </label><hr></hr>
  <label>
    Phonenumber: 
    <input type="number" value = {number} onChange= {(e) => setNumber(e.target.value) } />
  </label><hr></hr>
  <label>
    Email: 
    <input type="text" value = {email} onChange= {(e) => setEmail(e.target.value) }/>
  </label><hr></hr>
  <button  onClick= {onSubmit} >submit </button>
</form>
    </div>
)


}