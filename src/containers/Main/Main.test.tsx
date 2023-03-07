import { screen, render } from '@testing-library/react'
import Main from './Main'

describe('Main', () => {

    test('should render correctly', () => {
        render(<Main />)
        const addBtn = screen.getByText(/new game/i )
        expect(addBtn).toBeInTheDocument()
    })

})