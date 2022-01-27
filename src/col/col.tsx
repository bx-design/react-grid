import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import cx from 'clsx'
import type { DefaultProps } from '../types'
import { useColClass } from './styles'
import { __DEV__ } from '../utils'

type ColSizesType =
  | true
  | 'auto'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'

export interface BaseColProps {
  col?: ColSizesType
  sm?: ColSizesType
  md?: ColSizesType
  lg?: ColSizesType
  xl?: ColSizesType
  xxl?: ColSizesType
}

interface IColProps extends DefaultProps {
  children?: ReactNode
  col?: BaseColProps['col']
  sm?: BaseColProps['sm']
  md?: BaseColProps['md']
  lg?: BaseColProps['lg']
  xl?: BaseColProps['xl']
  xxl?: BaseColProps['xxl']
}

export interface ColProps extends HTMLAttributes<HTMLDivElement>, IColProps {}

export const Col = forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const {
    children,
    className,
    col = true,
    sm,
    md,
    lg,
    xl,
    xxl,
    ...rest
  } = props
  const classes = useColClass({ col, sm, md, lg, xl, xxl })
  return (
    <div
      className={cx(classes, className)}
      {...rest}
      ref={ref}
      data-testid='col'
    >
      {children}
    </div>
  )
})

if (__DEV__) {
  Col.displayName = 'Col'
}
