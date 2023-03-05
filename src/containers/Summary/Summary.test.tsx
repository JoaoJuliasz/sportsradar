import { render, screen } from '@testing-library/react'
import Summary from './Summary'


describe('Summary', () => {

    test('should render correctly', () => {

        const games = [
            {
                home: 'Mexico',
                away: 'Canada',
                score: [0, 5],
                additionOrder: 0
            },
            {
                home: 'Spain',
                away: 'Brazil',
                score: [10, 2],
                additionOrder: 1
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

    test('should sort games by addition order first', () => {
        const games = [
            {
                home: 'Mexico',
                away: 'Canada',
                score: [0, 5],
                additionOrder: 0
            },
            {
                home: 'Spain',
                away: 'Brazil',
                score: [3, 2],
                additionOrder: 1
            },
        ]

        render(<Summary games={games} />)
        const homeTitle = screen.getByText(/home/i)
        const awayTitle = screen.getByText(/away/i)

        const gamesListContainer = screen.getByRole('list')
        const brazilGame = screen.getByText(/brazil/i)
        const mexicoGame = screen.getByText(/mexico/i)

        expect(homeTitle).toBeInTheDocument()
        expect(awayTitle).toBeInTheDocument()
        expect(gamesListContainer).toBeInTheDocument()
        expect(brazilGame.compareDocumentPosition(mexicoGame)).toBe(4)
    })

})