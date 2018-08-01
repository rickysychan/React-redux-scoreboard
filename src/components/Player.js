import React, { PropTypes, Component } from 'react';
import Counter from './Counter';

export default class Player extends Component{

  static propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired,
    updatePlayerScore: PropTypes.func.isRequired
  };

  removePlayer(e, index, cb){
    cb(index);
    e.stopPropagation();
  }

  render(){
      return(
        <div className="player">
          <div className="player-name" onClick={() => this.props.selectPlayer(this.props.index)}>
            <a className="remove-player"
              onClick={(e) => this.removePlayer(e, this.props.index, this.props.removePlayer)}>
              ✖
            </a>
            {this.props.name}
          </div>
          <div className="player-score">
            <Counter
              index={this.props.index}
              updatePlayerScore={this.props.updatePlayerScore}
              score={this.props.score}
            />
          </div>
        </div>
      )
  }
}


