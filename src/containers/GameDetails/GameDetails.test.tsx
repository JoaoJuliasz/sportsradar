import { screen, render } from '@testing-library/react'
import GameDetails from './GameDetails'

describe('GameDetails', () => {

    test('should render correctly', () => {

        const selectedGame = {
            home: 'Mexico',
            away: 'Canada',
            score: [0, 5]
        }

        render(<GameDetails selectedGame={selectedGame}/>)
        const gameDetailsTxt = screen.getByText(/game details/i)
        expect(gameDetailsTxt).toBeInTheDocument()
    })

})