import { FC } from 'react'
import type {
  ColProps,
  OrderProps,
  OffsetProps,
  ColPropsTypes,
  MarginProps,
  PaddingProps,
  VisibleProps,
  HidddenProps
} from './types'
import { colClasses } from './utils/get-classes'

const Col: FC<ColPropsTypes> = ({ children, ...props }) => {
  const { ...colProps }: ColProps = props
  const { ...orderProps }: OrderProps = props
  const { ...offsetProps }: OffsetProps = props
  const { ...marginProps }: MarginProps = props
  const { ...paddingProps }: PaddingProps = props
  const { ...visibleProps }: VisibleProps = props
  const { ...hiddenProps }: HidddenProps = props
  return (
    <div
      className={colClasses(
        colProps,
        orderProps,
        offsetProps,
        marginProps,
        paddingProps,
        visibleProps,
        hiddenProps
      )}
      data-testid='col'
    >
      {children}
    </div>
  )
}

Col.defaultProps = {
  col: true
}

Col.displayName = 'Col'

export default Col
