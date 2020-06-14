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
  }

  getSummoner = (event) => {
    this.props.dispatch({
      type: "FETCH_SUMMONER",
      payload: this.state.summonerName,
    });
    console.log("Summoner page get", this.state);
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
