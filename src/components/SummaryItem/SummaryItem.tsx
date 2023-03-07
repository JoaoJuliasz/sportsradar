import { memo } from 'react';
import { Game } from '../../types/types';
import ActionButton from '../ActionButton/ActionButton';

import './summaryItem.styles.css'

type Props = {
    game: Game
    index: number
    selectGame: (gameIndex: number) => void
}

const SummaryItem = ({ game, index, selectGame }: Props) => {

    const handleClick = () => {
        selectGame(index)
    }

    return (
        <div data-testid="game-container" className="summary-item-container">
            <div className="teams-container">
                <h4>{game.home}</h4>
                <span>x</span>
                <h4>{game.away}</h4>
                <ActionButton clickFunction={handleClick} text="actions" />
            </div>
        </div >
    );
};

export default memo(SummaryItem);