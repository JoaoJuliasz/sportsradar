import { Game } from '../../types/types';
import Heading from '../Heading/Heading';

import './summaryInfos.styles.css'


type Props = {
    games: Game[]
}

const SummaryInfos = ({ games }: Props) => {

    const sortGames = (a: Game, b: Game) => {
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
        <div className="summary-infos-container">
            <Heading text="Summary"/>
            <ul className="list-item">
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