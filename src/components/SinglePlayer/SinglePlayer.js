import React from 'react';
import './SinglePlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const SinglePlayer = (props) => {
    const {first_name, last_name, email, photo, salary } = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div className="player-card">
            <img src={photo} alt="" />
            <h4 className="mt-3">{first_name} {last_name}</h4>
            <h6>{email}</h6>
            <h5>Salary: ${salary}</h5>
            <button className="btn-success mt-3 py-2 px-4 rounded-pill" onClick={() => handleAddPlayer()} > <FontAwesomeIcon icon={faCartPlus} /> Add Player </button>
            {/* {
                (id !== props.playerCart.id) ? <button className="btn-success mt-3 py-2 px-4 rounded-pill" onClick={() => handleAddPlayer()} > <FontAwesomeIcon icon={faCartPlus} /> Add Player </button> :  <button className="btn-success mt-3 py-2 px-4 rounded-pill" onClick={() => handleAddPlayer()} disabled={true}> <FontAwesomeIcon icon={faCartPlus} /> Add Player </button>
            } */}

        </div>
    );
};

export default SinglePlayer;