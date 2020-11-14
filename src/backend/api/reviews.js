const express = require("express");
const router = express.Router();
const knex = require("../database");

//  Returns all reviews(GET)

router.get("/", async (request, response) => {
  
  try {
    // console.log(request.query);
   const reviews = await knex("review").select("*");
    response.json(reviews);
   
  } catch (error) {
    throw error;
  }
});

// Adds a new reviews (POST)
router.post("/", async (request, response) => {
  
  try {
    
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reviews = await knex("review").select("*").insert(request.body);
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});
// Returns review by id (GET)
router.get("/:id", async (request, response) => {
  
  try {
    //console.log(request.query);
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reviewsWithId = await knex("review").select("*").where({id: request.params.id});
    response.json(reviewsWithId);
  } catch (error) {
    throw error;
  }
});

// Updates the review by id (PUT)

router.put("/:id", async (request, response) => {
  
  try {
    //console.log(request.query);
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reviewsWithId = await knex("review").select("*")
    .where({id: request.params.id})
    .update({title: "chicken nuggets"});
    response.json(reviewsWithId);
  } catch (error) {
    throw error;
  }
});

// Deletes the review by id(DELETE)

router.delete("/:id", async (request, response) => {
  
  try {
    //console.log(request.query);
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reviewsWithId = await knex("review").select("*")
    .where({id: request.params.id})
    .del();
    response.json(reviewsWithId);
  } catch (error) {
    throw error;
  }
});
module.exports = router;