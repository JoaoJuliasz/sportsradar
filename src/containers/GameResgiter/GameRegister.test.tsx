import { render, screen, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import GameRegister from './GameRegister'

describe('GamesRegister', () => {

    test('should render correctly', () => {
        const addNewGame = jest.fn()
        render(<GameRegister addNewGame={addNewGame} />)
        const addBtn = screen.getByText(/new game/i )
        expect(addBtn).toBeInTheDocument()
    })

    test('should render game resgiter container', async () => {
        user.setup()
        const addNewGame = jest.fn()
        render(<GameRegister addNewGame={addNewGame} />)
        const addBtn = screen.getByText(/new game/i )
        await user.click(addBtn)
        const teamsInputs = screen.getAllByRole('textbox')
        expect(teamsInputs.length).toBe(2)
    })

    test('should call addNewGame function', async () => {
        user.setup()
        const addNewGame = jest.fn()
        render(<GameRegister addNewGame={addNewGame} />)
        const addBtn = screen.getByText(/new game/i )
        await user.click(addBtn)
        const createGameBtn = screen.getByText(/add game/i )
        const teamsInputs = screen.getAllByRole('textbox')
        fireEvent.change(teamsInputs[0], {target: {value: 'Spain'}})
        fireEvent.change(teamsInputs[1], {target: {value: 'Brazil'}})
        await user.click(createGameBtn)
        expect(addNewGame).toBeCalled()
    })
})