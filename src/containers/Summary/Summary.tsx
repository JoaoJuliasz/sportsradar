import React from 'react';
import { Games } from '../../types/types';

type Props = {
    games: Games
}

const Summary = ({ games }: Props) => {
    return (
        <div>
            <div>
                <h4>Home</h4>
                <h4>Away</h4>
            </div>

            <div>
                <ul>
                    {games.map(game => (
                        <li key={game.home + game.away}>
                            <div>
                                <h6>
                                    {game.home}
                                </h6>
                                <h6>
                                    {game.away}
                                </h6>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Summary;