import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import ActionButton from './ActionButton'


describe('ActionButton', () => {

    test('should click clickFunction', async () => {
        user.setup()
        const clickFunction = jest.fn()
        render(<ActionButton clickFunction={clickFunction} text="Testing"/>)
        const btn = screen.getByText(/testing/i)
        await user.click(btn)
        expect(clickFunction).toBeCalled()
    })

})