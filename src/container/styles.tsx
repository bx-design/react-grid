import cx from 'clsx'
import { createMemoClass } from '../utils'
import type { IBaseContainerProps } from './container'

export const useContainerClass = createMemoClass<IBaseContainerProps>(
  (props) => {
    return cx(props.fluid ? 'bx-container-fluid' : 'bx-container', {
      'bx-container-sm': props.sm,
      'bx-container-md': props.md,
      'bx-container-lg': props.lg,
      'bx-container-xl': props.xl,
      'bx-container-xxl': props.xxl
    })
  }
)
