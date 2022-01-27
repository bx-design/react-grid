import { render, screen } from '@testing-library/react'
import { Col } from '../col'

describe('Col', () => {
  test('render Col component', () => {
    render(
      <Col>
        <h1>COL</h1>
      </Col>
    )
    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toHaveClass('bx-col')
    expect(col).toMatchSnapshot()
  })

  test('render Col component with col boolean props', () => {
    render(
      <Col col sm md lg xl xxl>
        <h1>COL</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toHaveClass('bx-col')
    expect(col).toHaveClass('bx-col-sm')
    expect(col).toHaveClass('bx-col-md')
    expect(col).toHaveClass('bx-col-lg')
    expect(col).toHaveClass('bx-col-xl')
    expect(col).toHaveClass('bx-col-xxl')
  })

  test('render Col component with col props', () => {
    render(
      <Col col='6' sm='7' md='8' lg='9' xl='10' xxl='11'>
        <h1>COL</h1>
      </Col>
    )
    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toHaveClass('bx-col-6')
    expect(col).toHaveClass('bx-col-sm-7')
    expect(col).toHaveClass('bx-col-md-8')
    expect(col).toHaveClass('bx-col-lg-9')
    expect(col).toHaveClass('bx-col-xl-10')
    expect(col).toHaveClass('bx-col-xxl-11')
  })

  test('render Col component with other classNames', () => {
    render(
      <Col className='bg-white'>
        <h1>COL</h1>
      </Col>
    )
    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toHaveClass('bx-col')
    expect(col).toHaveClass('bg-white')
  })
})
