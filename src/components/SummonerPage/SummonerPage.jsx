import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
//components
import ChampionList from "../ChampionList/ChampionList";
class SummonerPage extends Component {
  state = {
    summonerName: "",
  };

  componentDidMount() {
    this.getSummoner();
    this.championCount();
  }

  getSummoner = (event) => {
    this.props.dispatch({
      type: "FETCH_SUMMONER",
      payload: this.state.summonerName,
    });
    console.log("Summoner page get", this.state);
  };

  championCount = (event) => {
    let arr = this.props.store.match;
    let champArray = [];
    for (let i=0; i<arr.length; i++) {
      champArray.push(arr.championObject.name)
    };
    let result = {};
    //loop over array
    for (let i = 0; i < champArray.length; i++) {
      if (!result[champArray[i]]) {
        result[champArray[i]] = 0;
      }

      ++result[champArray[i]]
    }
    this.props.dispatch({
      type: "SET_COUNTS",
      payload: champArray,
    });
    console.log("champ counts");
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.store.match.map((champion) => {
            return <ChampionList champion={champion} />;
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});
export default withRouter(connect(mapStateToProps)(SummonerPage));
