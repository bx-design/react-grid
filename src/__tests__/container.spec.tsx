import { render, screen } from '@testing-library/react'
import Container from '../container'

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
    expect(container).toHaveClass('container')
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
    expect(container).toHaveClass('container-fluid')
    expect(container).toMatchSnapshot()
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
    expect(container).toHaveClass('container-sm')
    expect(container).toHaveClass('container-md')
    expect(container).toHaveClass('container-lg')
    expect(container).toHaveClass('container-xl')
    expect(container).toHaveClass('container-xxl')
    expect(container).toMatchSnapshot()
  })
})
