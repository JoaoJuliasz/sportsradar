import React, { memo, useCallback, useContext, useMemo, useState } from 'react';
import SummaryInfos from '../../components/SummaryInfos/SummaryInfos';
import SummaryItem from '../../components/SummaryItem/SummaryItem';
import { MainContext } from '../../context/Context';
import { Games } from '../../types/types';

type Props = {
    games: Games[]
}

const Summary = ({ games }: Props) => {

    const [showSummary, setshowSummary] = useState<boolean>(false)

    const context = useContext(MainContext)

    const selectGame = useCallback((index: number) => {
        const game = games[index]
        context?.setSelectedGame({ game, index })
    }, [games])

    const getSummary = () => {
        setshowSummary(!showSummary)
    }


    return (
        <div style={{ margin: '15px' }}>
            <div style={{ display: 'flex', maxWidth: '250px', justifyContent: 'space-evenly', margin: '15px 0', alignItems: 'center' }}>
                <h3 style={{ margin: '0' }}>Home</h3>
                <h3 style={{ margin: '0' }}>Away</h3>
                {games.length > 0 ? <a style={{ cursor: 'pointer', color: '#4e7dd1' }} onClick={getSummary}>{!showSummary ? 'Show' : 'Hide'} Summary</a> : null}
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

            {showSummary ?
                <SummaryInfos games={games} /> : null}
        </div>
    );
};

export default memo(Summary);