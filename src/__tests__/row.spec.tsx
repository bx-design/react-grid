import { render, screen } from '@testing-library/react'

import { Row } from '../row'

describe('Row', () => {
  test('render Row component', () => {
    render(
      <Row>
        <h1>ROW</h1>
      </Row>
    )
    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toHaveTextContent('ROW')
    expect(row).toHaveClass('bx-row')
    expect(row).toMatchSnapshot()
  })

  test('render Row with gutter props', () => {
    render(
      <Row
        g='0'
        gSm='1'
        gMd='2'
        gLg='3'
        gXl='4'
        gXxl='5'
        gX='0'
        gSmX='1'
        gMdX='2'
        gLgX='3'
        gXlX='4'
        gXxlX='5'
        gY='0'
        gSmY='1'
        gMdY='2'
        gLgY='3'
        gXlY='4'
        gXxlY='5'
      >
        <h1>ROW</h1>
      </Row>
    )

    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toHaveTextContent('ROW')
    expect(row).toHaveClass('bx-g-0')
    expect(row).toHaveClass('bx-g-sm-1')
    expect(row).toHaveClass('bx-g-md-2')
    expect(row).toHaveClass('bx-g-lg-3')
    expect(row).toHaveClass('bx-g-xl-4')
    expect(row).toHaveClass('bx-g-xxl-5')
    expect(row).toHaveClass('bx-gx-0')
    expect(row).toHaveClass('bx-gx-sm-1')
    expect(row).toHaveClass('bx-gx-md-2')
    expect(row).toHaveClass('bx-gx-lg-3')
    expect(row).toHaveClass('bx-gx-xl-4')
    expect(row).toHaveClass('bx-gx-xxl-5')
    expect(row).toHaveClass('bx-gy-0')
    expect(row).toHaveClass('bx-gy-sm-1')
    expect(row).toHaveClass('bx-gy-md-2')
    expect(row).toHaveClass('bx-gy-lg-3')
    expect(row).toHaveClass('bx-gy-xl-4')
    expect(row).toHaveClass('bx-gy-xxl-5')
  })

  test('render Row component with other classNames', () => {
    render(
      <Row className='bg-black'>
        <h1>ROW</h1>
      </Row>
    )
    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toHaveTextContent('ROW')
    expect(row).toHaveClass('bx-row')
    expect(row).toHaveClass('bg-black')
  })
})
