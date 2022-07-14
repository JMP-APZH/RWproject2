import { render } from '@redwoodjs/testing/web'

import Rwp2Layout from './Rwp2Layout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Rwp2Layout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Rwp2Layout />)
    }).not.toThrow()
  })
})
