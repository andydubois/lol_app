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
  let accountId = req.params.searchTerm;
  LeagueAPI.initialize()
    .then(() => {
      return LeagueAPI.getMatchList(accountId);
    })
    .then(function (accountInfo) {
      // do something with accountInfo
      console.log("success server side match list GET", accountInfo);
      res.send(accountInfo);
      console.log(accountInfo);
    })
    .catch((error) => {
      console.log("error in server side match list GET", error);
    }); // LeagueAPI returned objects will now have details from DDRagon API.
});

// router.get('/:searchTerm', (req, res) => {
//   // return all categories
//     let searchTerm = req.params.searchTerm
//   axios
//     .get(
//       `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/LS-Mm2pLg_mtbJV8aeprVucLH6Yjp0DW7gGEfF9xhJKpmg?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
//     )
//     .then((response) => {
//       console.log("success server side matches GET", response.data);
//       res.send(response.data);
//     })
//     .catch((error) => {
//       console.log("error in server side matches GET", error);
//     });
// });

module.exports = router;
