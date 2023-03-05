import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import GameRegister from './GameRegister'

describe('GamesRegister', () => {

    test('should render correctly', () => {
        const addNewGame = jest.fn()
        render(<GameRegister addNewGame={addNewGame} />)
        const addBtn = screen.getByRole('button', { name: /new game/i })
        expect(addBtn).toBeInTheDocument()
    })

    test('should render game resgiter container', async () => {
        user.setup()
        const addNewGame = jest.fn()
        render(<GameRegister addNewGame={addNewGame} />)
        const addBtn = screen.getByRole('button', { name: /new game/i })
        await user.click(addBtn)
        const teamsInputs = screen.getAllByRole('textbox')
        expect(teamsInputs.length).toBe(2)
    })

    test('should call addNewGame function', async () => {
        user.setup()
        const addNewGame = jest.fn()
        render(<GameRegister addNewGame={addNewGame} />)
        const addBtn = screen.getByRole('button', { name: /new game/i })
        await user.click(addBtn)
        const createGameBtn = screen.getByRole('button', { name: /add game/i })
        await user.click(createGameBtn)
        expect(addNewGame).toBeCalled()
    })

})