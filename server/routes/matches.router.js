const express = require("express");
const pool = require("../modules/pool");
require("dotenv").config();
const axios = require("axios");
const router = express.Router();

router.get('/:searchTerm', (req, res) => {
  // return all categories
    let searchTerm = req.params.searchTerm
  axios
    .get(
      `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/LS-Mm2pLg_mtbJV8aeprVucLH6Yjp0DW7gGEfF9xhJKpmg?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
    )
    .then((response) => {
      console.log("success server side matches GET", response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log("error in server side matches GET", error);
    });
});

module.exports = router;
