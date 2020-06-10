const express = require("express");
const pool = require("../modules/pool");
require("dotenv").config();
const axios = require("axios");
const router = express.Router();

router.get('/:searchTerm', (req, res) => {
  // return all categories
    let searchTerm = req.params.searchTerm
    console.log("THIS THE SEARCH TERM SERVER SIDE", searchTerm);
  axios
    .get(
      `http://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.searchTerm}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
    )
    .then(response => {
      console.log("success server side summoner GET", response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log("error in server side summoner GET", error);
    });
});

module.exports = router;
