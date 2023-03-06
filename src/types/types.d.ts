import React from "react"

export type Game = {
    home: string,
    away: string,
    score: number[],
    additionOrder?: number
}

export type SelectedGame = { game: Game, index: number }

export type MainContextProps = {
    games: Game[]
    setGames: React.Dispatch<React.SetStateAction<Game[]>>
    selectedGame: SelectedGame
    setSelectedGame: React.Dispatch<React.SetStateAction<SelectedGame>>
}