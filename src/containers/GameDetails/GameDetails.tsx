import { memo, useContext, useMemo, useState } from "react";
import { MainContext } from "../../context/Context";
import { Games, SelectedGame } from "../../types/types";

type Props = {
    selectedGame: SelectedGame
}

const GameDetails = ({ selectedGame }: Props) => {

    const [showUpdate, setShowUpdate] = useState<boolean>(false)
    const context = useContext(MainContext)

    const oldSelectedGame = useMemo(() => {
        const index = selectedGame.index
        return { game: context?.games[index]!, index }
    }, [selectedGame, context?.games])

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

    const closeGameDetails = () => {
        context?.setSelectedGame({} as SelectedGame)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', margin: '15px' }}>
            {selectedGame.game?.home ?
                <>
                    <div style={{ margin: '15px 0px' }}>
                        <h3 style={{ margin: '0' }}>Game Details</h3>
                        <a style={{ cursor: 'pointer', color: '#4e7dd1', fontSize: '14px' }} onClick={closeGameDetails}>close</a>
                    </div>
                    <div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-evenly' }}>
                                <h5 style={{ margin: '0' }}>{selectedGame.game.home}</h5>
                                <span>x</span>
                                <h5 style={{ margin: '0' }}>{selectedGame.game.away}</h5>
                            </div>
                            <div style={{ width: '100%' }}>
                                {selectedGame.game.score.map((score, index) => (
                                    <input key={index} type="number"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeScore(parseInt(e.target.value), index)}
                                        min="0"
                                        style={{ maxWidth: '50px', outline: 'none', border: showUpdate ? '1px solid #ccc' : 'none' }}
                                        readOnly={!showUpdate} value={score} />
                                ))}
                            </div>
                        </div>
                        <div>
                            {!showUpdate ?
                                <>
                                    <a style={{ cursor: 'pointer', color: '#4e7dd1', fontSize: '14px', margin: '7px' }} onClick={finishGame}>Finish</a>
                                    <a style={{ cursor: 'pointer', color: '#4e7dd1', fontSize: '14px', margin: '7px' }} onClick={toggleShowUpdate}>Update</a>
                                </>
                                :
                                <>
                                    <a style={{ cursor: 'pointer', color: '#4e7dd1', fontSize: '14px', margin: '7px' }} onClick={handleCancelBtn}>Cancel</a>
                                    <a style={{ cursor: 'pointer', color: '#4e7dd1', fontSize: '14px', margin: '7px' }} onClick={handleSaveBtn}>Save</a>
                                </>
                            }
                        </div>
                    </div>
                </> : null}

        </div>
    );
};

export default memo(GameDetails);