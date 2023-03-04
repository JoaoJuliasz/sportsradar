import { render, screen } from '@testing-library/react'
import Summary from './Summary'


describe('Summary', () => {

    test('should render correctly', () => {

        const games = [
            {
                home: 'Mexico',
                away: 'Canada',
                score: [0, 5]
            },
            {
                home: 'Spain',
                away: 'Brazil',
                score: [10, 2]
            },
        ]

        render(<Summary games={games} />)
        const homeTitle = screen.getByText(/home/i)
        const awayTitle = screen.getByText(/away/i)

        const gamesList = screen.getByRole('list')

        expect(homeTitle).toBeInTheDocument()
        expect(awayTitle).toBeInTheDocument()
        expect(gamesList).toBeInTheDocument()

    })

})