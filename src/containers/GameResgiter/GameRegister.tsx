import React, { useContext, useState } from 'react';
import { MainContext } from '../../context/Context';
import { Games } from '../../types/types';

type Props = {
    addNewGame: (game: Games) => void
}

const initialState = {
    home: '',
    away: '',
    score: [0, 0]
}


const GameRegister = ({ addNewGame }: Props) => {
    const [showGameRegister, setShowGameRegister] = useState<boolean>(false)
    const [gameToAdd, setGameToAdd] = useState({} as Games)

    const context = useContext(MainContext)

    const showGameResgiter = () => {
        setShowGameRegister(true)
        const length = context?.games.length!
        const game = { ...initialState, additionOrder: length }
        setGameToAdd(game)
    }

    const setTeamName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setGameToAdd({ ...gameToAdd, [name]: value })
    }

    const handleAddGame = () => {
        if (gameToAdd.home && gameToAdd.away) {
            addNewGame(gameToAdd)
            setShowGameRegister(false)
            setGameToAdd(initialState)
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
            <div>
                <button onClick={() => showGameResgiter()}>New Game</button>
            </div>
            {showGameRegister ?
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ margin: '0 5px ' }}>
                            <label htmlFor="home">Home team</label>
                            <input onChange={setTeamName} value={gameToAdd.home} type="text" name="home" />
                        </div>
                        <div style={{ margin: '0 5px ' }}>
                            <label htmlFor="away">Away team</label>
                            <input onChange={setTeamName} value={gameToAdd.away} type="text" name="away" />
                        </div>
                        <button onClick={handleAddGame} style={{ margin: '0 5px ' }}>Add game</button>
                    </div>
                </div>
                : null}
        </div>
    );
};

export default GameRegister;