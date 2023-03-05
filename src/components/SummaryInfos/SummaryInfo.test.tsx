import { render, screen } from '@testing-library/react'
import SummaryInfos from './SummaryInfos'

describe('SummaryInfo', () => {
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
        render(<SummaryInfos games={games}/>)
        const summaryTitle = screen.getByText(/summary/i)
        expect(summaryTitle).toBeInTheDocument()
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

        render(<SummaryInfos games={games} />)

        const gamesListContainer = screen.getByRole('list')
        const brazilGame = screen.getByText(/brazil/i)
        const mexicoGame = screen.getByText(/mexico/i)
        
        expect(gamesListContainer).toBeInTheDocument()
        expect(brazilGame.compareDocumentPosition(mexicoGame)).toBe(4)
    })
})