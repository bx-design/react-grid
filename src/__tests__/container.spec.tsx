import { render, screen } from '@testing-library/react'
import { Container } from '../container'

describe('Container', () => {
  test('render Container component', () => {
    render(
      <Container>
        <h1>CONTAINER</h1>
      </Container>
    )
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent('CONTAINER')
    expect(container).toHaveClass('bx-container')
    expect(container).toMatchSnapshot()
  })

  test('render Container with fluid prop', () => {
    render(
      <Container fluid>
        <h1>CONTAINER</h1>
      </Container>
    )
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent('CONTAINER')
    expect(container).toHaveClass('bx-container-fluid')
  })

  test('render Container with breakpoints props', () => {
    render(
      <Container sm md lg xl xxl>
        <h1>CONTAINER</h1>
      </Container>
    )

    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent('CONTAINER')
    expect(container).toHaveClass('bx-container-sm')
    expect(container).toHaveClass('bx-container-md')
    expect(container).toHaveClass('bx-container-lg')
    expect(container).toHaveClass('bx-container-xl')
    expect(container).toHaveClass('bx-container-xxl')
  })

  test('render Container with other classNames', () => {
    render(
      <Container className='w-full'>
        <h1>CONTAINER</h1>
      </Container>
    )

    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent('CONTAINER')
    expect(container).toHaveClass('bx-container')
    expect(container).toHaveClass('w-full')
  })
})
