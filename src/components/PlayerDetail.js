import React, { PropTypes } from 'react';

const PlayerDetail = props => {
  if(props.selectedPlayerIndex === -1) {
    return (<p>Click on a player to see more details</p>);
  } else 
    {
    return (
      <div>
        <h3>{ props.players[props.selectedPlayerIndex].name}</h3>
        <ul>
          <li>
            <span>Score: </span> 
            { props.players[props.selectedPlayerIndex].score }
          </li>
          <li>
            <span>Created: </span> 
            { props.players[props.selectedPlayerIndex].created}
          </li>
          <li>
            <span>Updated: </span> 
            { props.players[props.selectedPlayerIndex].updated }
          </li>        
        </ul>
      </div>
    );
  }
};


export default PlayerDetail;
