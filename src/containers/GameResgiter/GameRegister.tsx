import React, { useContext, useState } from 'react';
import ActionButton from '../../components/ActionButton/ActionButton';
import { MainContext } from '../../context/Context';
import { Game } from '../../types/types';

import './gameRegister.styles.css'

type Props = {
    addNewGame: (game: Game) => void
}

const initialState = {
    home: '',
    away: '',
    score: [0, 0]
}


const GameRegister = ({ addNewGame }: Props) => {
    const [showGameRegister, setShowGameRegister] = useState<boolean>(false)
    const [gameToAdd, setGameToAdd] = useState({} as Game)

    const context = useContext(MainContext)

    const openGameRegister = () => {
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
        <div className="games-register-container">
            <div>
                <ActionButton clickFunction={openGameRegister} text="New Game"/>
            </div>
            {showGameRegister ?
                <div>
                    <div className="values-container">
                        <div className="input-container">
                            <label htmlFor="home">Home team</label>
                            <input onChange={setTeamName} value={gameToAdd.home} type="text" name="home" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="away">Away team</label>
                            <input onChange={setTeamName} value={gameToAdd.away} type="text" name="away" />
                        </div>
                        <ActionButton clickFunction={handleAddGame} text="Add Game"/>
                    </div>
                </div>
                : null}
        </div>
    );
};

export default GameRegister;