import React from "react"

export type Games = {
    home: string,
    away: string,
    score: number[],
    additionOrder?: number
}

export type SelectedGame = { game: Games, index: number }

export type MainContextProps = {
    games: Games[]
    setGames: React.Dispatch<React.SetStateAction<Games[]>>
    selectedGame: SelectedGame
    setSelectedGame: React.Dispatch<React.SetStateAction<SelectedGame>>
}