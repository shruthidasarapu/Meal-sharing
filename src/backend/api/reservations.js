const express = require("express");
const router = express.Router();
const knex = require("../database");

//  Returns all reservations(GET)

router.get("/", async (request, response) => {
  
  try {
    // console.log(request.query);
    const reservations = await knex("reservation").select("*");
    response.json(reservations);
   
  } catch (error) {
    throw error;
  }
});

// Adds a new reservation (POST)
router.post("/", async (request, response) => {
  
  try {
    
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservations = await knex("reservation").select("*").insert(request.body);
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});
// Returns reservation by id (GET)
router.get("/:id", async (request, response) => {
  
  try {
    //console.log(request.query);
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservationsWithId = await knex("reservation").select("*").where({id: request.params.id});
    response.json(reservationsWithId);
  } catch (error) {
    throw error;
  }
});

// Updates the reservation by id (PUT)

router.put("/:id", async (request, response) => {
  
  try {
    //console.log(request.query);
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservationsWithId = await knex("reservation").select("*")
    .where({id: request.params.id})
    .update({contact_name: "John smith"});
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

// Deletes the reservation by id(DELETE)

router.delete("/:id", async (request, response) => {
  
  try {
    //console.log(request.query);
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservationsWithId = await knex("reservation").select("*")
    .where({id: request.params.id})
    .del();
    response.json(reservationsWithId);
  } catch (error) {
    throw error;
  }
});
module.exports = router;