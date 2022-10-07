import { render } from '@redwoodjs/testing/web'

import ChartPage from './ChartPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChartPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChartPage />)
    }).not.toThrow()
  })
})
