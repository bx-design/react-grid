import cx from 'clsx'
import { createMemoClass } from '../utils'
import { BaseRowProps } from './row'

const gutterClasses = (gProps: BaseRowProps) => [
  gProps.g && gProps.g !== undefined ? 'bx-g-' + gProps.g : '',
  gProps.gSm && gProps.gSm !== undefined ? 'bx-g-sm-' + gProps.gSm : '',
  gProps.gMd && gProps.gMd !== undefined ? 'bx-g-md-' + gProps.gMd : '',
  gProps.gLg && gProps.gLg !== undefined ? 'bx-g-lg-' + gProps.gLg : '',
  gProps.gXl && gProps.gXl !== undefined ? 'bx-g-xl-' + gProps.gXl : '',
  gProps.gXxl && gProps.gXxl !== undefined ? 'bx-g-xxl-' + gProps.gXxl : '',
  gProps.gX && gProps.gX !== undefined ? 'bx-gx-' + gProps.gX : '',
  gProps.gSmX && gProps.gSmX !== undefined ? 'bx-gx-sm-' + gProps.gSmX : '',
  gProps.gMdX && gProps.gMdX !== undefined ? 'bx-gx-md-' + gProps.gMdX : '',
  gProps.gLgX && gProps.gLgX !== undefined ? 'bx-gx-lg-' + gProps.gLgX : '',
  gProps.gXlX && gProps.gXlX !== undefined ? 'bx-gx-xl-' + gProps.gXlX : '',
  gProps.gXxlX && gProps.gXxlX !== undefined ? 'bx-gx-xxl-' + gProps.gXxlX : '',
  gProps.gY && gProps.gY !== undefined ? 'bx-gy-' + gProps.gY : '',
  gProps.gSmY && gProps.gSmY !== undefined ? 'bx-gy-sm-' + gProps.gSmY : '',
  gProps.gMdY && gProps.gMdY !== undefined ? 'bx-gy-md-' + gProps.gMdY : '',
  gProps.gLgY && gProps.gLgY !== undefined ? 'bx-gy-lg-' + gProps.gLgY : '',
  gProps.gXlY && gProps.gXlY !== undefined ? 'bx-gy-xl-' + gProps.gXlY : '',
  gProps.gXxlY && gProps.gXxlY !== undefined ? 'bx-gy-xxl-' + gProps.gXxlY : ''
]

export const useRowClass = createMemoClass<BaseRowProps>((props) =>
  cx('bx-row', gutterClasses(props))
)
