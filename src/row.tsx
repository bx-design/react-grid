import { forwardRef } from 'react'
import type {
  Ref,
  RowProps,
  MarginProps,
  GutterProps,
  JustifyContentProps,
  AlignItemsProps,
  PaddingProps,
  RowPropsTypes
} from './types'
import { rowClasses } from './utils/get-classes'

const Row = forwardRef<Ref, RowPropsTypes>(({ children, ...props }, ref) => {
  const { ...rowProps }: RowProps = props
  const { ...justifyContentProps }: JustifyContentProps = props
  const { ...alignItemsProps }: AlignItemsProps = props
  const { ...marginProps }: MarginProps = props
  const { ...gutterProps }: GutterProps = props
  const { ...paddingProps }: PaddingProps = props
  return (
    <div
      className={rowClasses(
        rowProps,
        justifyContentProps,
        alignItemsProps,
        marginProps,
        gutterProps,
        paddingProps
      )}
      data-testid='row'
      ref={ref}
    >
      {children}
    </div>
  )
})

Row.defaultProps = {
  rowCols: false,
  rowColsSm: false,
  rowColsMd: false,
  rowColsLg: false,
  rowColsXl: false,
  rowColsXxl: false
}

Row.displayName = 'Row'

export default Row
