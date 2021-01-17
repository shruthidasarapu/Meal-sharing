import React from "react";
import { BrowserRouter as Router, Link, Route, Switch,NavLink } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import {CreateMeal} from "./components/TestComponent/createMeal";
import {MainPage} from "./components/TestComponent/mainPage";
import logo from './logo.png';
//import {Form} from "./components/TestComponent/form";
import FilterMeal from "./components/TestComponent/filterMeal";
import {Nav,Navbar, Form,FormControl,Button, Container,Col,Image} from "react-bootstrap";
import {ReviewDisplay} from "./components/TestComponent/review";
import {ReservationDisplay} from "./components/TestComponent/reservation";
import "./App.css";
function App(){ 
  return (
   <>
      
  <Navbar bg="dark" variant="dark">
  <img src={logo} alt="Logo" style= {{height:30 , width:30}} />;
    <Navbar.Brand href="#">MEAL-SHARING</Navbar.Brand>
    <Nav className="mr-auto">
      
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/meal">Add Meal</Nav.Link>
      <Nav.Link href="/reservation">Reservations</Nav.Link>
      <Nav.Link href="/review">Reviews</Nav.Link>
    </Nav>
    {/*<Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>*/}
  </Navbar>
  

     
    <Router>
     
      <Route exact path="/">
        <MainPage></MainPage>
      </Route>
      <Route exact path="/meal">
        <CreateMeal></CreateMeal>
      </Route>
      <Route exact path="/meal/:id">
        <FilterMeal></FilterMeal>
        </Route>
        <Route exact path="/reservation">
     <ReservationDisplay></ReservationDisplay>
     </Route>
     <Route exact path="/review">
     <ReviewDisplay></ReviewDisplay>
     </Route>
      </Router>
   </> 
  );
}

export default App;