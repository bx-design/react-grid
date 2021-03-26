import { forwardRef } from 'react'
import type { Ref, ContainerPropsTypes } from './types'
import { containerClasses } from './utils/get-classes'

const Container = forwardRef<Ref, ContainerPropsTypes>(
  ({ children, ...props }, ref) => {
    const { ...containerProps }: ContainerPropsTypes = props
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
