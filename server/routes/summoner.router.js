const express = require("express");
const pool = require("../modules/pool");
require("dotenv").config();
const axios = require("axios");
const router = express.Router();
//MundoScript
let LeagueAPI = require("leagueapiwrapper");
let leagueAPIKey = process.env.REACT_APP_RIOT_API_KEY;
LeagueAPI = new LeagueAPI(leagueAPIKey, Region.NA);

router.get("/:searchTerm", (req, res) => {
  let summonerName = req.params.searchTerm
  LeagueAPI.initialize()
    .then( () => {return LeagueAPI.getSummonerByName(summonerName) })
    .then(function (accountInfo) {
      // do something with accountInfo
      console.log("success server side summoner GET", accountInfo);
      res.send(accountInfo);
      console.log(accountInfo);
    })
    .catch((error) => {
      console.log("error in server side summoner GET", error);
    });// LeagueAPI returned objects will now have details from DDRagon API.
    })




//   LeagueAPI.getSummonerByName(summonerName)
//     .then(function (accountInfo) {
//       // do something with accountInfo
//       console.log("success server side summoner GET", accountInfo);
//       res.send(accountInfo);
//       console.log(accountInfo);
//     })
//     .catch((error) => {
//       console.log("error in server side summoner GET", error);
//     });
// });

// router.get("/:searchTerm", (req, res) => {
//   // return all categories
//   let searchTerm = req.params.searchTerm;
//   console.log("THIS THE SUMMONER SEARCH TERM SERVER SIDE", searchTerm);
//   axios
//     .get(
//       `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.searchTerm}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
//     )
//     .then((response) => {
//       console.log("success server side summoner GET", response.data);
//       res.send(response.data);
//     })
//     .catch((error) => {
//       console.log("error in server side summoner GET", error);
//     });
// });

module.exports = router;
