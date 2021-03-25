import { forwardRef } from 'react'
import type { Ref, ContainerProps } from './types'
import { containerClasses } from './utils/get-classes'

const Container = forwardRef<Ref, ContainerProps>(
  ({ children, ...props }, ref) => {
    const { ...containerProps }: ContainerProps = props
    return (
      <div
        className={containerClasses(containerProps)}
        data-testid='container'
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

Container.defaultProps = {
  fluid: false
}

Container.displayName = 'Container'

export default Container
