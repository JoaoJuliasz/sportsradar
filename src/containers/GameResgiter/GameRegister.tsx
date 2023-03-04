import React, { useState } from 'react';
import { Games } from '../../types/types';

type Props = {
    addNewGame: (game: Games) => void
}

const GameRegister = ({ addNewGame }: Props) => {
    const [showGameRegister, setShowGameRegister] = useState<boolean>(false)
    const [gameToAdd, setGameToAdd] = useState({
        home: '',
        away: '',
        score: [0, 0]
    } as Games)

    const showGameResgiter = () => {
        setShowGameRegister(true)
    }

    const setTeamName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setGameToAdd({ ...gameToAdd, [name]: value })
    }

    return (
        <div>
            <div>
                <button onClick={() => showGameResgiter()}>New Game</button>
            </div>
            {showGameRegister ?
                <div>
                    <h1>Add new game teams</h1>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ margin: '0 5px ' }}>
                            <label htmlFor="home">Home team</label>
                            <input onChange={setTeamName} value={gameToAdd.home} type="text" name="home" />
                        </div>
                        <div style={{ margin: '0 5px ' }}>
                            <label htmlFor="away">Away team</label>
                            <input onChange={setTeamName} value={gameToAdd.away} type="text" name="away" />
                        </div>
                        <button onClick={() => addNewGame(gameToAdd)} style={{ margin: '0 5px ' }}>Add game</button>
                    </div>
                </div>
                : null}
        </div>
    );
};

export default GameRegister;