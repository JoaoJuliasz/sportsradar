import React, { useContext } from 'react';
import { MainContext } from '../../context/Context';
import { Games } from '../../types/types';

type Props = {
    game: Games
    index: number
    selectGame: (gameIndex: number) => void
}

const SummaryItem = ({ game, index, selectGame }: Props) => {

    return (
        <div data-testid="game-container"
            onClick={() => { selectGame(index) }}
            style={{ display: 'flex', maxWidth: '250px', flexDirection: 'column', margin: '7px' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-evenly' }}>
                <h5 style={{ margin: '0' }}>{game.home}</h5>
                <span>x</span>
                <h5 style={{ margin: '0' }}>{game.away}</h5>
            </div>
            <div style={{ width: '100%' }}>
                <p>{game.score.join(' x ')}</p>
            </div>
        </div>
    );
};

export default SummaryItem;