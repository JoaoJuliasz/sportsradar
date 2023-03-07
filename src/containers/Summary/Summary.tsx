import React, { memo, useCallback, useContext, useState } from 'react';
import ActionButton from '../../components/ActionButton/ActionButton';
import Heading from '../../components/Heading/Heading';
import SummaryInfos from '../../components/SummaryInfos/SummaryInfos';
import SummaryItem from '../../components/SummaryItem/SummaryItem';
import { MainContext } from '../../context/Context';
import { Game } from '../../types/types';

import './summary.styles.css'

type Props = {
    games: Game[]
}

const Summary = ({ games }: Props) => {

    const [showSummary, setshowSummary] = useState<boolean>(false)

    const context = useContext(MainContext)

    const selectGame = useCallback((index: number) => {
        const game = games[index]
        context?.setSelectedGame({ game, index })
    }, [games, context])

    const getSummary = () => {
        setshowSummary(!showSummary)
    }


    return (
        <div className="summary-container">
            <div className="titles-container">
                <Heading text="Home" />
                <Heading text="Away" />
                {games.length > 0 ? <ActionButton clickFunction={getSummary} text={(!showSummary ? 'Show' : 'Hide') + ' Summary'} /> : null}
            </div>
            {
                !showSummary ?
                    <div>
                        <ul className="list-container">
                            {games.map((game, index) => (
                                <li key={game.home + game.away}>
                                    <SummaryItem selectGame={selectGame} index={index} game={game} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    :
                    <SummaryInfos games={games} />
            }
        </div >
    );
};

export default memo(Summary);