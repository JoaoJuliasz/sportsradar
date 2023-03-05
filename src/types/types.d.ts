import React from "react"

export type Games = {
    home: string,
    away: string,
    score: number[]
}


export type MainContextProps = {
    games: Games[]
    selectedGame: Games
    setSelectedGame: React.Dispatch<React.SetStateAction<Games>>
}