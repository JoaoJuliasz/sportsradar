import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Main from './Main'

describe('Main', () => {

    test('should render correctly', () => {
        render(<Main />)
        const addBtn = screen.getByRole('button', { name: 'New Game' })
        expect(addBtn).toBeInTheDocument()
    })

    // test('should call showGameResgiter', async () => {
    //     user.setup()
    //     render(<Main />)
    //     const addBtn = screen.getByRole('button', { name: 'New Game' })
    //     user.click(addBtn)
    //     const showGameResgiter = jest.fn()
    //     expect(showGameResgiter).toBeCalled()
    // })

})