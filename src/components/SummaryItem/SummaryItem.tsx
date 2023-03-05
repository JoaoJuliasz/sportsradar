import React, { memo, useContext } from 'react';
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

            style={{ display: 'flex', maxWidth: '250px', margin: '15px 7px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-evenly' }}>
                <h4 style={{ margin: '0' }}>{game.home}</h4>
                <span>x</span>
                <h4 style={{ margin: '0' }}>{game.away}</h4>
            </div>
            <a onClick={() => { selectGame(index) }} style={{ cursor: 'pointer', color: '#4e7dd1', fontSize: '14px' }}>actions</a>
        </div >
    );
};

export default memo(SummaryItem);