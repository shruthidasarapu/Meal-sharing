const express = require("express");
const router = express.Router();
const knex = require("../database");

//  Returns all meals(GET)

router.get("/", async (request, response) => {
  
  try {
    // console.log(request.query);

   if(request.query.maxPrice)
   {
     const mealsWithMaxPrice = await knex("meal").select("*").where("price", "<", request.query.maxPrice);
     response.send(mealsWithMaxPrice);
   } 
   /*if(request.query.availableReservations){
    const availableReservations = await knex("meal","reservation").select("*").where("reservation.number_of_guests","<","meal.max_reservation" );
     response.send(availableReservations);
    
  }*/
  if(request.query.title)
  {
    const title = await knex("meal").select("*").where("title","LIKE",request.query.title);
    response.send(title);
  }
  if(request.query.createdAfter)
  {
    const createdAfter = await knex("meal").select("*").where("created_date",">",request.query.createdAfter);
    response.send(createdAfter);
  }
  if(request.query.limit)
  {
    const limit = await knex("meal").select("*").limit(request.query.limit);
    response.send(limit);
  }
   else { 
    const meals = await knex("meal").select("*");
    response.json(meals);
   }
  } catch (error) {
    throw error;
  }
});

// Adds a new meal (POST)
router.post("/", async (request, response) => {
  
  try {
    
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("meal").select("*").insert(request.body);
    response.json(meals);
  } catch (error) {
    throw error;
  }
});
// Returns meal by id (GET)
router.get("/:id", async (request, response) => {
  
  try {
    //console.log(request.query);
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const mealsWithId = await knex("meal").select("*").where({id: request.params.id});
    response.json(mealsWithId);
  } catch (error) {
    throw error;
  }
});

// Updates the meal by id (PUT)

router.put("/:id", async (request, response) => {
  
  try {
    //console.log(request.query);
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const mealsWithId = await knex("meal").select("*")
    .where({id: request.params.id})
    .update({title: "chicken nuggets"});
    response.json(mealsWithId);
  } catch (error) {
    throw error;
  }
});

// Deletes the meal by id(DELETE)

router.delete("/:id", async (request, response) => {
  
  try {
    //console.log(request.query);
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const mealsWithId = await knex("meal").select("*")
    .where({id: request.params.id})
    .del();
    response.json(mealsWithId);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
