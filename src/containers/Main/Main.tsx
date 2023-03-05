import { useState } from 'react';
import { MainProvider } from '../../context/Context';
import { Games, SelectedGame } from '../../types/types';
import GameDetails from '../GameDetails/GameDetails';
import GameRegister from '../GameResgiter/GameRegister';
import Summary from '../Summary/Summary';

const Main = () => {

    const [games, setGames] = useState<Games[]>([])
    const [selectedGame, setSelectedGame] = useState({} as SelectedGame)


    const addNewGame = (game: Games) => {
        setGames([...games, game])
    }

    return (
        <MainProvider value={{ games, setGames, selectedGame, setSelectedGame }}>
            <div>
                <GameRegister addNewGame={addNewGame} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%' }}>
                    <Summary games={games} />
                    <GameDetails selectedGame={selectedGame} />
                </div>
            </div>
        </MainProvider>
    );
};

export default Main;