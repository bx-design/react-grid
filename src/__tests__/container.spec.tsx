import { render, screen } from '@testing-library/react'
import Container from '../container'
import type { ContainerProps } from '../types'

const customRender = (props?: ContainerProps) => {
  return render(<Container {...props} />)
}

describe('Container', () => {
  test('render Container component', () => {
    customRender()
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('container')
    expect(container).toMatchSnapshot()
  })

  test('render Container with fluid prop', () => {
    customRender({ fluid: true })
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('container-fluid')
    expect(container).toMatchSnapshot()
  })

  test('render Container with breakpoints props', () => {
    customRender({ sm: true, md: true, lg: true, xl: true, xxl: true })
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('container-sm')
    expect(container).toHaveClass('container-md')
    expect(container).toHaveClass('container-lg')
    expect(container).toHaveClass('container-xl')
    expect(container).toHaveClass('container-xxl')
    expect(container).toMatchSnapshot()
  })
})
