import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import cx from 'clsx'
import type { DefaultProps } from '../types'
import { useRowClass } from './styles'
import { __DEV__ } from '../utils'

type GutterTypes = '0' | '1' | '2' | '3' | '4' | '5'

export interface BaseRowProps {
  g?: GutterTypes
  gX?: GutterTypes
  gY?: GutterTypes
  gSm?: GutterTypes
  gSmX?: GutterTypes
  gSmY?: GutterTypes
  gMd?: GutterTypes
  gMdX?: GutterTypes
  gMdY?: GutterTypes
  gLg?: GutterTypes
  gLgX?: GutterTypes
  gLgY?: GutterTypes
  gXl?: GutterTypes
  gXlX?: GutterTypes
  gXlY?: GutterTypes
  gXxl?: GutterTypes
  gXxlX?: GutterTypes
  gXxlY?: GutterTypes
}

export interface IRowProps extends DefaultProps {
  children?: ReactNode
  g?: BaseRowProps['g']
  gX?: BaseRowProps['gX']
  gY?: BaseRowProps['gY']
  gSm?: BaseRowProps['gSm']
  gSmX?: BaseRowProps['gSmX']
  gSmY?: BaseRowProps['gSmY']
  gMd?: BaseRowProps['gMd']
  gMdX?: BaseRowProps['gMdX']
  gMdY?: BaseRowProps['gMdY']
  gLg?: BaseRowProps['gLg']
  gLgX?: BaseRowProps['gLgX']
  gLgY?: BaseRowProps['gLgY']
  gXl?: BaseRowProps['gXl']
  gXlX?: BaseRowProps['gXlX']
  gXlY?: BaseRowProps['gXlY']
  gXxl?: BaseRowProps['gXxl']
  gXxlX?: BaseRowProps['gXxlX']
  gXxlY?: BaseRowProps['gXxlY']
}

export interface RowProps extends HTMLAttributes<HTMLDivElement>, IRowProps {}

export const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const {
    children,
    className,
    g,
    gX,
    gY,
    gSm,
    gSmX,
    gSmY,
    gMd,
    gMdX,
    gMdY,
    gLg,
    gLgX,
    gLgY,
    gXl,
    gXlX,
    gXlY,
    gXxl,
    gXxlX,
    gXxlY,
    ...rest
  } = props
  const classes = useRowClass({
    g,
    gX,
    gY,
    gSm,
    gSmX,
    gSmY,
    gMd,
    gMdX,
    gMdY,
    gLg,
    gLgX,
    gLgY,
    gXl,
    gXlX,
    gXlY,
    gXxl,
    gXxlX,
    gXxlY
  })
  return (
    <div
      className={cx(classes, className)}
      {...rest}
      ref={ref}
      data-testid='row'
    >
      {children}
    </div>
  )
})

if (__DEV__) {
  Row.displayName = 'Row'
}
