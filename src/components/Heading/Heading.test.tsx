import { render, screen } from '@testing-library/react'
import Heading from './Heading'

describe('Heading', () => {

    test('should render correctly', () => {
        render(<Heading text="Testing" />)
        const heading = screen.getByText(/testing/i)
        expect(heading).toBeInTheDocument()
    })

})