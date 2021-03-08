import { FC } from 'react'
import type { ContainerProps } from './types'
import { containerClasses } from './utils/get-classes'

const Container: FC<ContainerProps> = ({ children, ...props }) => {
  const { ...containerProps }: ContainerProps = props
  return (
    <div className={containerClasses(containerProps)} data-testid='container'>
      {children}
    </div>
  )
}

Container.defaultProps = {
  fluid: false
}

Container.displayName = 'Container'

export default Container
