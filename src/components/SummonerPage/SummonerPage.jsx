import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
//components
import ChampionList from '../ChampionList/ChampionList'
class SummonerPage extends Component {
  state = {
    summonerName: "",
  };

  getSummoner = (event) => {
    this.props.dispatch({
      type: "FETCH_SUMMONER",
      payload: this.state.summonerName,
    });
    console.log(this.state);
  };

  handleChangeFor = (event) => {
    this.setState({
      summonerName: event.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.store.match.matches.map((champion) => {
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
