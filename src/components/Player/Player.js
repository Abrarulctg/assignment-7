import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import PlayerCart from '../PlayerCart/PlayerCart';

const Player = () => {
    const [player, setPlayer] = useState([]);
    const [playerCart, setPlayerCart] = useState([]);

    useEffect(() => {
        fetch('https://res.cloudinary.com/abrar1125/raw/upload/v1625318931/volunteer-network/fakeData_yldecf.json')
            .then(res => res.json())
            .then(data => setPlayer(data))
            .catch(error => console.log(error))
    }, []);

    const handleAddPlayer = (player) => {
        // console.log("someone clicked me");
        const newPlayerCart = [...playerCart, player];
        setPlayerCart(newPlayerCart);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            player.map((player) =>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <SinglePlayer
                                            player={player}
                                            handleAddPlayer={() => handleAddPlayer(player)}
                                        >
                                        </SinglePlayer>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <PlayerCart playerCart={playerCart}></PlayerCart>
                </div>
            </div>
        </div>
    );
};

export default Player;