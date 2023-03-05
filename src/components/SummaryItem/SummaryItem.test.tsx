import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SummaryItem from './SummaryItem'

describe('SummaryItem', () => {

    test('should render correcly', () => {
        const selectGame = jest.fn()
        const game = {
            home: 'Mexico',
            away: 'Canada',
            score: [0, 5],
            additionOrder: 0
        }
        render(<SummaryItem game={game} index={0} selectGame={selectGame} />)
        const teamsNames = screen.getAllByRole('heading')
        expect(teamsNames.length).toBe(2)
    })

    test('should call selectGame function', async () => {
        user.setup()
        const selectGame = jest.fn()
        const game = {
            home: 'Mexico',
            away: 'Canada',
            score: [0, 5],
            additionOrder: 0
        }
        render(<SummaryItem game={game} index={0} selectGame={selectGame} />)
        const gameContainer = screen.getByTestId('game-container')
        await user.click(gameContainer)
        expect(selectGame).toBeCalled()
    })

})