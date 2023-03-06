import { memo, useContext, useMemo, useState } from "react";
import ActionButton from "../../components/ActionButton/ActionButton";
import Heading from "../../components/Heading/Heading";
import { MainContext } from "../../context/Context";
import { SelectedGame } from "../../types/types";

import './gameDetails.styles.css'

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
        <div className="game-details-container">
            {selectedGame.game?.home ?
                <>
                    <div className="title-container">
                        <Heading text="Game Details"/>
                        <ActionButton clickFunction={closeGameDetails} text="close" />
                    </div>
                    <div>
                        <div>
                            <div className="game-details">
                                <h5>{selectedGame.game.home}</h5>
                                <span>x</span>
                                <h5>{selectedGame.game.away}</h5>
                            </div>
                            <div className="game-values-container">
                                {selectedGame.game.score.map((score, index) => (
                                    <input key={index} type="number"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeScore(parseInt(e.target.value), index)}
                                        min="0"
                                        className={showUpdate ? 'border' : ''}
                                        readOnly={!showUpdate} value={score} />
                                ))}
                            </div>
                        </div>
                        <div className="buttons-container">
                            {!showUpdate ?
                                <>
                                    <ActionButton clickFunction={finishGame} text="Finish" />
                                    <ActionButton clickFunction={toggleShowUpdate} text="Update" />
                                </>
                                :
                                <>
                                    <ActionButton clickFunction={handleCancelBtn} text="Cancel" />
                                    <ActionButton clickFunction={handleSaveBtn} text="Save" />
                                </>
                            }
                        </div>
                    </div>
                </> : null}

        </div>
    );
};

export default memo(GameDetails);