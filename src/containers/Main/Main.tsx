import React, { useState } from 'react';
import { Games } from '../../types/types';
import Summary from '../Summary/Summary';

const Main = () => {

    const [games, setGames] = useState<Games>([])

    return (
        <div>
            <div>
                <button>New Game</button>
            </div>
            <Summary games={games} />
        </div>
    );
};

export default Main;