import React, { useCallback, useContext } from 'react';
import SummaryItem from '../../components/SummaryItem/SummaryItem';
import { MainContext } from '../../context/Context';
import { Games } from '../../types/types';

type Props = {
    games: Games[]
}

const Summary = ({ games }: Props) => {

    const context = useContext(MainContext)

    const selectGame = useCallback((index: number) => {
        const game = games[index]
        context?.setSelectedGame(game)
    }, [games])

    return (
        <div style={{ margin: '15px' }}>
            <div style={{ display: 'flex', maxWidth: '250px', justifyContent: 'space-evenly', margin: '15px 0' }}>
                <h2 style={{ margin: '0' }}>Home</h2>
                <h2 style={{ margin: '0' }}>Away</h2>
            </div>

            <div>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {games.map((game, index) => (
                        <li key={game.home + game.away}>
                            <SummaryItem selectGame={selectGame} index={index} game={game} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Summary;