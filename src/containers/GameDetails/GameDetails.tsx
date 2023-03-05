import { Games } from "../../types/types";

type Props = {
    selectedGame: Games
}

const GameDetails = ({ selectedGame }: Props) => {
    return (
        <div>
            <div>
                <h5>Game Details</h5>
            </div>
            <div>
                {JSON.stringify(selectedGame)}
            </div>
        </div>
    );
};

export default GameDetails;