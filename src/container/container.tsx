import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import cx from 'clsx'
import type { DefaultProps } from '../types'
import { useContainerClass } from './styles'
import { __DEV__ } from '../utils'

export interface IBaseContainerProps {
  fluid?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
}

interface IContainerProps extends DefaultProps {
  children?: ReactNode
  fluid?: IBaseContainerProps['fluid']
  sm?: IBaseContainerProps['sm']
  md?: IBaseContainerProps['md']
  lg?: IBaseContainerProps['lg']
  xl?: IBaseContainerProps['xl']
  xxl?: IBaseContainerProps['xxl']
}

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    IContainerProps {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    const {
      children,
      className,
      fluid = false,
      sm,
      md,
      lg,
      xl,
      xxl,
      ...rest
    } = props
    const classes = useContainerClass({ fluid, sm, md, lg, xl, xxl })
    return (
      <div
        className={cx(classes, className)}
        {...rest}
        ref={ref}
        data-testid='container'
      >
        {children}
      </div>
    )
  }
)

if (__DEV__) {
  Container.displayName = 'Container'
}
