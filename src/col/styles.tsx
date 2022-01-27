import cx from 'clsx'
import { createMemoClass } from '../utils'
import { BaseColProps } from './col'

const colClasses = (colProps: BaseColProps['col']) =>
  colProps !== true && colProps !== undefined ? `bx-col-${colProps}` : ''

const smClasses = (smProps: BaseColProps['sm']) =>
  smProps !== true && smProps !== undefined ? `bx-col-sm-${smProps}` : ''

const mdClasses = (mdProps: BaseColProps['md']) =>
  mdProps !== true && mdProps !== undefined ? `bx-col-md-${mdProps}` : ''

const lgClasses = (lgProps: BaseColProps['lg']) =>
  lgProps !== true && lgProps !== undefined ? `bx-col-lg-${lgProps}` : ''

const xlClasses = (xlProps: BaseColProps['xl']) =>
  xlProps !== true && xlProps !== undefined ? `bx-col-xl-${xlProps}` : ''

const xxlClasses = (xxlProps: BaseColProps['xxl']) =>
  xxlProps !== true && xxlProps !== undefined ? `bx-col-xxl-${xxlProps}` : ''

export const useColClass = createMemoClass<BaseColProps>((props) =>
  cx(
    {
      'bx-col': props.col === true,
      'bx-col-sm': props.sm === true,
      'bx-col-md': props.md === true,
      'bx-col-lg': props.lg === true,
      'bx-col-xl': props.xl === true,
      'bx-col-xxl': props.xxl === true
    },
    colClasses(props.col),
    smClasses(props.sm),
    mdClasses(props.md),
    lgClasses(props.lg),
    xlClasses(props.xl),
    xxlClasses(props.xxl)
  )
)
