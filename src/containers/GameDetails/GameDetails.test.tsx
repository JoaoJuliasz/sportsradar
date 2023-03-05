import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import GameDetails from './GameDetails'

describe('GameDetails', () => {

    test('should render correctly', () => {

        const selectedGame = {
            game: {
                home: 'Mexico',
                away: 'Canada',
                score: [0, 5],
                additionOrder: 0
            },
            index: 0
        }

        render(<GameDetails selectedGame={selectedGame} />)
        const gameDetailsTxt = screen.getByText(/game details/i)
        expect(gameDetailsTxt).toBeInTheDocument()
    })

    test('should render save button', async () => {
        user.setup()
        const selectedGame = {
            game: {
                home: 'Mexico',
                away: 'Canada',
                score: [0, 5],
                additionOrder: 0
            },
            index: 0
        }

        render(<GameDetails selectedGame={selectedGame} />)
        const updateBtn = screen.getByRole('button', { name: /update/i })
        await user.click(updateBtn)
        const saveBtn = screen.getByRole('button', { name: /save/i })
        expect(saveBtn).toBeInTheDocument()
    })

    test('should render scores inputs', async () => {
        user.setup()
        const selectedGame = {
            game: {
                home: 'Mexico',
                away: 'Canada',
                score: [0, 5],
                additionOrder: 0
            },
            index: 0
        }

        render(<GameDetails selectedGame={selectedGame} />)
        const updateBtn = screen.getByRole('button', { name: /update/i })
        await user.click(updateBtn)
        const scoresInput = screen.getAllByRole('spinbutton')
        expect(scoresInput[0]).toHaveValue(0)
        expect(scoresInput[1]).toHaveValue(5)
    })

})