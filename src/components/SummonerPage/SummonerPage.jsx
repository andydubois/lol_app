import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
      <li>
        {this.props.champion.championObject.name}
        {this.props.champion.championObject.id}
      </li>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});
export default withRouter(connect(mapStateToProps)(SummonerPage));
