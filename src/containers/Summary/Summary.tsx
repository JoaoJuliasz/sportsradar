import React, { memo, useCallback, useContext, useMemo } from 'react';
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
        context?.setSelectedGame({ game, index })
    }, [games])

    const sortedGames = useMemo(() => {
        return games.sort((a, b) => {
            const teamA = a.score[0] + a.score[1]
            const teamB = b.score[0] + b.score[1]
            if (teamA > teamB) return -1
            if (teamA < teamB) return 1
            if (teamA === teamB) {
                return b.additionOrder! - a.additionOrder!
            }
            return 0
        })
    }, [games])

    return (
        <div style={{ margin: '15px' }}>
            <div style={{ display: 'flex', maxWidth: '250px', justifyContent: 'space-evenly', margin: '15px 0' }}>
                <h3 style={{ margin: '0' }}>Home</h3>
                <h3 style={{ margin: '0' }}>Away</h3>
            </div>

            <div>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {sortedGames.map((game, index) => (
                        <li key={game.home + game.away}>
                            <SummaryItem selectGame={selectGame} index={index} game={game} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default memo(Summary);