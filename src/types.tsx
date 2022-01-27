import { ReactNode } from 'react'

export interface DefaultProps {
  className?: string
}

export type Cols = boolean | 'auto' | '1' | '2' | '3' | '4' | '5' | '6'

export type JustifyContentType =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'

export type AlignItemsType = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

export type GuttersTypes = '0' | '1' | '2' | '3' | '4' | '5'

export type MarginTypes = '0' | '1' | '2' | '3' | '4' | '5' | 'auto'

export type PaddingTypes = '0' | '1' | '2' | '3' | '4' | '5' | 'auto'

export type ColSizes =
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

export type OrderTypes = 'first' | '0' | '1' | '2' | '3' | '4' | '5' | 'last'

export type OffsetTypes =
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

export type VisibleTypes = boolean

export type VisibleProps = {
  visible?: VisibleTypes
  visibleSm?: VisibleTypes
  visibleMd?: VisibleTypes
  visibleLg?: VisibleTypes
  visibleXl?: VisibleTypes
  visibleXll?: VisibleTypes
}

export type HiddenTypes = boolean

export type HidddenProps = {
  hidden?: HiddenTypes
  hiddenSm?: HiddenTypes
  hiddenMd?: HiddenTypes
  hiddenLg?: HiddenTypes
  hiddenXl?: HiddenTypes
  hiddenXll?: HiddenTypes
}

export type MarginProps = {
  m?: MarginTypes
  mSm?: MarginTypes
  mMd?: MarginTypes
  mLg?: MarginTypes
  mXl?: MarginTypes
  mXxl?: MarginTypes
  mx?: MarginTypes
  mxSm?: MarginTypes
  mxMd?: MarginTypes
  mxLg?: MarginTypes
  mxXl?: MarginTypes
  mxXxl?: MarginTypes
  my?: MarginTypes
  mySm?: MarginTypes
  myMd?: MarginTypes
  myLg?: MarginTypes
  myXl?: MarginTypes
  myXxl?: MarginTypes
  mb?: MarginTypes
  mbSm?: MarginTypes
  mbMd?: MarginTypes
  mbLg?: MarginTypes
  mbXl?: MarginTypes
  mbXxl?: MarginTypes
  mt?: MarginTypes
  mtSm?: MarginTypes
  mtMd?: MarginTypes
  mtLg?: MarginTypes
  mtXl?: MarginTypes
  mtXxl?: MarginTypes
  ms?: MarginTypes
  msSm?: MarginTypes
  msMd?: MarginTypes
  msLg?: MarginTypes
  msXl?: MarginTypes
  msXxl?: MarginTypes
  me?: MarginTypes
  meSm?: MarginTypes
  meMd?: MarginTypes
  meLg?: MarginTypes
  meXl?: MarginTypes
  meXxl?: MarginTypes
}

export type PaddingProps = {
  p?: PaddingTypes
  pSm?: PaddingTypes
  pMd?: PaddingTypes
  pLg?: PaddingTypes
  pXl?: PaddingTypes
  pXxl?: PaddingTypes
  px?: PaddingTypes
  pxSm?: PaddingTypes
  pxMd?: PaddingTypes
  pxLg?: PaddingTypes
  pxXl?: PaddingTypes
  pxXxl?: PaddingTypes
  py?: PaddingTypes
  pySm?: PaddingTypes
  pyMd?: PaddingTypes
  pyLg?: PaddingTypes
  pyXl?: PaddingTypes
  pyXxl?: PaddingTypes
  pb?: PaddingTypes
  pbSm?: PaddingTypes
  pbMd?: PaddingTypes
  pbLg?: PaddingTypes
  pbXl?: PaddingTypes
  pbXxl?: PaddingTypes
  pt?: PaddingTypes
  ptSm?: PaddingTypes
  ptMd?: PaddingTypes
  ptLg?: PaddingTypes
  ptXl?: PaddingTypes
  ptXxl?: PaddingTypes
  ps?: PaddingTypes
  psSm?: PaddingTypes
  psMd?: PaddingTypes
  psLg?: PaddingTypes
  psXl?: PaddingTypes
  psXxl?: PaddingTypes
  pe?: PaddingTypes
  peSm?: PaddingTypes
  peMd?: PaddingTypes
  peLg?: PaddingTypes
  peXl?: PaddingTypes
  peXxl?: PaddingTypes
}

export type GutterProps = {
  g?: GuttersTypes
  gSm?: GuttersTypes
  gMd?: GuttersTypes
  gLg?: GuttersTypes
  gXl?: GuttersTypes
  gXxl?: GuttersTypes
  gx?: GuttersTypes
  gxSm?: GuttersTypes
  gxMd?: GuttersTypes
  gxLg?: GuttersTypes
  gxXl?: GuttersTypes
  gxXxl?: GuttersTypes
  gy?: GuttersTypes
  gySm?: GuttersTypes
  gyMd?: GuttersTypes
  gyLg?: GuttersTypes
  gyXl?: GuttersTypes
  gyXxl?: GuttersTypes
}

export type JustifyContentProps = {
  justifyContent?: JustifyContentType
  justifyContentSm?: JustifyContentType
  justifyContentMd?: JustifyContentType
  justifyContentLg?: JustifyContentType
  justifyContentXl?: JustifyContentType
  justifyContentXxl?: JustifyContentType
}

export type AlignItemsProps = {
  alignItems?: AlignItemsType
  alignItemsSm?: AlignItemsType
  alignItemsMd?: AlignItemsType
  alignItemsLg?: AlignItemsType
  alignItemsXl?: AlignItemsType
  alignItemsXxl?: AlignItemsType
}

export type RowProps = {
  rowCols?: Cols
  rowColsSm?: Cols
  rowColsMd?: Cols
  rowColsLg?: Cols
  rowColsXl?: Cols
  rowColsXxl?: Cols
}

export type OrderProps = {
  order?: OrderTypes
  orderSm?: OrderTypes
  orderMd?: OrderTypes
  orderLg?: OrderTypes
  orderXl?: OrderTypes
  orderXxl?: OrderTypes
}

export type OffsetProps = {
  offset?: OffsetTypes
  offsetSm?: OffsetTypes
  offsetMd?: OffsetTypes
  offsetLg?: OffsetTypes
  offsetXl?: OffsetTypes
  offsetXxl?: OffsetTypes
}

export type ColProps = {
  col?: ColSizes
  sm?: ColSizes
  md?: ColSizes
  lg?: ColSizes
  xl?: ColSizes
  xxl?: ColSizes
}

export type GeneralTypes = {
  children?: ReactNode
}

export type Ref = HTMLDivElement

export type ReactHTMLProps = HTMLDivElement

export type RowPropsTypes = RowProps &
  MarginProps &
  GutterProps &
  JustifyContentProps &
  AlignItemsProps &
  PaddingProps &
  GeneralTypes

export type ColPropsTypes = ColProps &
  OrderProps &
  OffsetProps &
  MarginProps &
  PaddingProps &
  VisibleProps &
  HidddenProps &
  GeneralTypes

export type ContainerPropsTypes = {
  fluid?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
} & GeneralTypes
