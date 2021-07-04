import React from 'react';
import './PlayerCart.css';


const PlayerCart = (props) => {
    const playerCart = props.playerCart;
    console.log(playerCart)

    let playerNames = [];
    for (let i = 0; i < playerCart.length; i++) {
        const player = playerCart[i];
        playerNames.push([player.first_name, " (Salary: $", player.salary, "), "]);
    }

    // Bangla System (using for loop) to calculate total Salary
    // let totalSalary = 0;
    // for (let i = 0; i < playerCart.length; i++) {
    //     const player = playerCart[i];
    //     totalSalary = totalSalary + player.salary;        
    // }


    // ModernSystem
    const totalSalary = playerCart.reduce((sum, player) => sum + player.salary, 0)


    return (
        <div>
            <h5>Total Added Players: <span className="added-player-counter">{playerCart.length}</span></h5>
            {
                (playerNames.length === 0) ? <p className="text-danger">You have not added any player to cart. Click "Add Player" Button to add player.</p> : <p><strong>You have added:</strong> {playerNames}</p>
            }
            <h6>Total Salary: ${totalSalary}</h6>
        </div>
    );
};

export default PlayerCart;