import { useState } from 'react';
import { Games } from '../../types/types';
import GameRegister from '../GameResgiter/GameRegister';
import Summary from '../Summary/Summary';

const Main = () => {

    const [games, setGames] = useState<Games[]>([])


    const addNewGame = (game: Games) => {
        setGames([...games, game])
    }

    return (
        <div>
            <GameRegister addNewGame={addNewGame} />
            <Summary games={games} />
        </div>
    );
};

export default Main;