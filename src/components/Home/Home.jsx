import React, {Component} from 'react';
import {connect} from "react-redux";
//components



class Home extends Component {
    state = {
        summonerName: ""
    }

    getSummoner = event => {
        this.props.dispatch({
            type: "FETCH_SUMMONER",
            payload: this.state.summonerName
        });
        console.log(this.state);
        this.props.history.push(`/summoner/${this.props.store.summoner.accountId}`)
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
                {/* <div>
                    <ul>
                        {this.props.store.match.matches.map(champion => {
                            return <ChampionList champion={champion} />;
                        })}
                    </ul>
                </div> */}
            </div>
        )
    }
}
const mapStateToProps = store => ({
    store
})
export default connect(mapStateToProps)(Home);