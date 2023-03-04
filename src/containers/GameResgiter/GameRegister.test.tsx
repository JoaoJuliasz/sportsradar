import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import GameRegister from './GameRegister'

describe('GamesRegister', () => {

    test('should render correctly', () => {
        const addNewGame = jest.fn()
        render(<GameRegister addNewGame={addNewGame} />)
        const addBtn = screen.getByRole('button', { name: 'New Game' })
        expect(addBtn).toBeInTheDocument()
    })

    test('should render game resgiter container', async () => {
        user.setup()
        const addNewGame = jest.fn()
        render(<GameRegister addNewGame={addNewGame} />)
        const addBtn = screen.getByRole('button', { name: 'New Game' })
        await user.click(addBtn)
        const gameRegisterTitle = screen.getByText(/add new game teams/i)
        const teamsInputs = screen.getAllByRole('textbox')
        expect(gameRegisterTitle).toBeInTheDocument()
        expect(teamsInputs.length).toBe(2)
    })

    test('should call addNewGame function', async () => {
        user.setup()
        const addNewGame = jest.fn()
        render(<GameRegister addNewGame={addNewGame} />)
        const addBtn = screen.getByRole('button', { name: 'New Game' })
        await user.click(addBtn)
        const createGameBtn = screen.getByRole('button', { name: /Add Game/i })
        await user.click(createGameBtn)
        expect(createGameBtn).toBeInTheDocument()
        expect(addNewGame).toBeCalled()
    })

})