import React, {Component} from 'react';
import {connect} from "react-redux";


class Home extends Component {
    state = {
        summonerName: ""
    }

    getSummoner = event => {
        this.props.dispatch({
            type: "FETCH_SUMMONER",
            payload: this.state.summonerName
        });
        console.log(this.state)
    }

    handleChangeFor = event => {
        this.setState({
            summonerName: event.target.value
        });
        console.log(this.state)
    };
    render() {
        return (
            <div>
                <form onSubmit={this.getSummoner}>
                    <input type="text" onChange={this.handleChangeFor} />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = store => ({
    store
})
export default connect(mapStateToProps)(Home);