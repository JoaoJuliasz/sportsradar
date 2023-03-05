import { useContext, useMemo, useState } from "react";
import { MainContext } from "../../context/Context";
import { Games, SelectedGame } from "../../types/types";

type Props = {
    selectedGame: SelectedGame
}

const GameDetails = ({ selectedGame }: Props) => {

    const [showUpdate, setShowUpdate] = useState<boolean>(false)

    const oldSelectedGame = useMemo(() => selectedGame, [])

    const context = useContext(MainContext)

    const finishGame = () => {
        const updatedGames = [...context?.games!]
        updatedGames.splice(selectedGame.index, 1)
        context?.setGames(prev => [...updatedGames])
        context?.setSelectedGame({} as SelectedGame)
    }

    const toggleShowUpdate = () => {
        setShowUpdate(!showUpdate)
    }

    const handleChangeScore = (value: number, index: number) => {
        const updatedScore = [...selectedGame.game.score]
        updatedScore[index] = value
        context?.setSelectedGame(prev => ({ ...prev, game: { ...prev.game, score: updatedScore } }))
    }

    const handleCancelBtn = () => {
        context?.setSelectedGame(oldSelectedGame)
        toggleShowUpdate()
    }

    const handleSaveBtn = () => {
        const updatedGames = [...context?.games!]
        updatedGames[selectedGame.index] = selectedGame.game
        context?.setGames(prev => [...updatedGames])
        setShowUpdate(false)
    }

    return (
        <div>
            {selectedGame.game?.home ?
                <>
                    <div>
                        <h5>Game Details</h5>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-evenly' }}>
                            <h5 style={{ margin: '0' }}>{selectedGame.game.home}</h5>
                            <span>x</span>
                            <h5 style={{ margin: '0' }}>{selectedGame.game.away}</h5>
                        </div>
                        <div style={{ width: '100%' }}>
                            {selectedGame.game.score.map((score, index) => (
                                <input key={index} type="number"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeScore(parseInt(e.target.value), index)}
                                    style={{ maxWidth: '50px', outline: 'none', border: showUpdate ? '1px solid #ccc' : 'none' }}
                                    readOnly={!showUpdate} value={score} />
                            ))}
                        </div>
                    </div>
                    <div>
                        {!showUpdate ?
                            <>
                                <button onClick={finishGame}>Finish</button>
                                <button onClick={toggleShowUpdate}>Update</button>
                            </>
                            :
                            <>
                                <button onClick={handleCancelBtn}>Cancel</button>
                                <button onClick={handleSaveBtn}>Save</button>
                            </>
                        }
                    </div>
                </> : null}
        </div>
    );
};

export default GameDetails;