import { useState } from 'react';
import { MainProvider } from '../../context/Context';
import { Games } from '../../types/types';
import GameRegister from '../GameResgiter/GameRegister';
import Summary from '../Summary/Summary';

const Main = () => {

    const [games, setGames] = useState<Games[]>([])
    const [selectedGame, setSelectedGame] = useState({} as Games)


    const addNewGame = (game: Games) => {
        setGames([...games, game])
    }

    return (
        <MainProvider value={{ games, selectedGame, setSelectedGame }}>
            <div>
                <GameRegister addNewGame={addNewGame} />
                <Summary games={games} />
            </div>
        </MainProvider>
    );
};

export default Main;