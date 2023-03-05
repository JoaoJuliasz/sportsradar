import { useState } from 'react';
import { MainProvider } from '../../context/Context';
import { Games, SelectedGame } from '../../types/types';
import GameDetails from '../GameDetails/GameDetails';
import GameRegister from '../GameResgiter/GameRegister';
import Summary from '../Summary/Summary';

import './main.styles.css'

const Main = () => {

    const [games, setGames] = useState<Games[]>([])
    const [selectedGame, setSelectedGame] = useState({} as SelectedGame)


    const addNewGame = (game: Games) => {
        setGames([...games, game])
    }

    return (
        <MainProvider value={{ games, setGames, selectedGame, setSelectedGame }}>
            <div className="main-container">
                <GameRegister addNewGame={addNewGame} />
                <div className="games-container">
                    <Summary games={games} />
                    <GameDetails selectedGame={selectedGame} />
                </div>
            </div>
        </MainProvider>
    );
};

export default Main;