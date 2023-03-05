import React, { useContext } from 'react';
import { MainContext } from '../../context/Context';
import { Games } from '../../types/types';


type Props = {
    games: Games[]
}

const SummaryInfos = ({ games }: Props) => {

    const sortGames = (a: Games, b: Games) => {
        const teamA = a.score[0] + a.score[1]
        const teamB = b.score[0] + b.score[1]
        if (teamA > teamB) return -1
        if (teamA < teamB) return 1
        if (teamA === teamB) {
            return b.additionOrder! - a.additionOrder!
        }
        return 0
    }

    return (
        <div>
            <h3>Summary</h3>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {[...games].sort(sortGames).map((game) => (
                    <li key={game.home + game.away}>
                        <p>{game.home} {game.score[0]} - {game.away} {game.score[1]}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SummaryInfos;