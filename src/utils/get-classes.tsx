import cs from 'classnames'
import type {
  RowProps,
  MarginProps,
  GutterProps,
  JustifyContentProps,
  AlignItemsProps,
  PaddingProps,
  ColProps,
  ContainerPropsTypes,
  OrderProps,
  OffsetProps,
  VisibleProps,
  HidddenProps
} from '../types'

export const getMarginClasses = (props: MarginProps): Array<string> => [
  props.m && props.m !== undefined ? 'm-' + props.m : '',
  props.mSm && props.mSm !== undefined ? 'm-sm-' + props.mSm : '',
  props.mMd && props.mMd !== undefined ? 'm-md-' + props.mMd : '',
  props.mLg && props.mLg !== undefined ? 'm-lg-' + props.mLg : '',
  props.mXl && props.mXl !== undefined ? 'm-xl-' + props.mXl : '',
  props.mXxl && props.mXxl !== undefined ? 'm-xxl-' + props.mXxl : '',
  props.mx && props.mx !== undefined ? 'mx-' + props.mx : '',
  props.mxSm && props.mxSm !== undefined ? 'mx-sm-' + props.mxSm : '',
  props.mxMd && props.mxMd !== undefined ? 'mx-md-' + props.mxMd : '',
  props.mxLg && props.mxLg !== undefined ? 'mx-lg-' + props.mxLg : '',
  props.mxXl && props.mxXl !== undefined ? 'mx-xl-' + props.mxXl : '',
  props.mxXxl && props.mxXxl !== undefined ? 'mx-xxl-' + props.mxXxl : '',
  props.my && props.my !== undefined ? 'my-' + props.my : '',
  props.mySm && props.mySm !== undefined ? 'my-sm-' + props.mySm : '',
  props.myMd && props.myMd !== undefined ? 'my-md-' + props.myMd : '',
  props.myLg && props.myLg !== undefined ? 'my-lg-' + props.myLg : '',
  props.myXl && props.myXl !== undefined ? 'my-xl-' + props.myXl : '',
  props.myXxl && props.myXxl !== undefined ? 'my-xxl-' + props.myXxl : '',
  props.mb && props.mb !== undefined ? 'mb-' + props.mb : '',
  props.mbSm && props.mbSm !== undefined ? 'mb-sm-' + props.mbSm : '',
  props.mbMd && props.mbMd !== undefined ? 'mb-md-' + props.mbMd : '',
  props.mbLg && props.mbLg !== undefined ? 'mb-lg-' + props.mbLg : '',
  props.mbXl && props.mbXl !== undefined ? 'mb-xl-' + props.mbXl : '',
  props.mbXxl && props.mbXxl !== undefined ? 'mb-xxl-' + props.mbXxl : '',
  props.mt && props.mt !== undefined ? 'mt-' + props.mt : '',
  props.mtSm && props.mtSm !== undefined ? 'mt-sm-' + props.mtSm : '',
  props.mtMd && props.mtMd !== undefined ? 'mt-md-' + props.mtMd : '',
  props.mtLg && props.mtLg !== undefined ? 'mt-lg-' + props.mtLg : '',
  props.mtXl && props.mtXl !== undefined ? 'mt-xl-' + props.mtXl : '',
  props.mtXxl && props.mtXxl !== undefined ? 'mt-xxl-' + props.mtXxl : '',
  props.ms && props.ms !== undefined ? 'ms-' + props.ms : '',
  props.msSm && props.msSm !== undefined ? 'ms-sm-' + props.msSm : '',
  props.msMd && props.msMd !== undefined ? 'ms-md-' + props.msMd : '',
  props.msLg && props.msLg !== undefined ? 'ms-lg-' + props.msLg : '',
  props.msXl && props.msXl !== undefined ? 'ms-xl-' + props.msXl : '',
  props.msXxl && props.msXxl !== undefined ? 'ms-xxl-' + props.msXxl : '',
  props.me && props.me !== undefined ? 'me-' + props.me : '',
  props.meSm && props.meSm !== undefined ? 'me-sm-' + props.meSm : '',
  props.meMd && props.meMd !== undefined ? 'me-md-' + props.meMd : '',
  props.meLg && props.meLg !== undefined ? 'me-lg-' + props.meLg : '',
  props.meXl && props.meXl !== undefined ? 'me-xl-' + props.meXl : '',
  props.meXxl && props.meXxl !== undefined ? 'me-xxl-' + props.meXxl : ''
]

export const getPaddingClasses = (props: PaddingProps): Array<string> => [
  props.p && props.p !== undefined ? 'p-' + props.p : '',
  props.pSm && props.pSm !== undefined ? 'p-sm-' + props.pSm : '',
  props.pMd && props.pMd !== undefined ? 'p-md-' + props.pMd : '',
  props.pLg && props.pLg !== undefined ? 'p-lg-' + props.pLg : '',
  props.pXl && props.pXl !== undefined ? 'p-xl-' + props.pXl : '',
  props.pXxl && props.pXxl !== undefined ? 'p-xxl-' + props.pXxl : '',
  props.px && props.px !== undefined ? 'px-' + props.px : '',
  props.pxSm && props.pxSm !== undefined ? 'px-sm-' + props.pxSm : '',
  props.pxMd && props.pxMd !== undefined ? 'px-md-' + props.pxMd : '',
  props.pxLg && props.pxLg !== undefined ? 'px-lg-' + props.pxLg : '',
  props.pxXl && props.pxXl !== undefined ? 'px-xl-' + props.pxXl : '',
  props.pxXxl && props.pxXxl !== undefined ? 'px-xxl-' + props.pxXxl : '',
  props.py && props.py !== undefined ? 'py-' + props.py : '',
  props.pySm && props.pySm !== undefined ? 'py-sm-' + props.pySm : '',
  props.pyMd && props.pyMd !== undefined ? 'py-md-' + props.pyMd : '',
  props.pyLg && props.pyLg !== undefined ? 'py-lg-' + props.pyLg : '',
  props.pyXl && props.pyXl !== undefined ? 'py-xl-' + props.pyXl : '',
  props.pyXxl && props.pyXxl !== undefined ? 'py-xxl-' + props.pyXxl : '',
  props.pb && props.pb !== undefined ? 'pb-' + props.pb : '',
  props.pbSm && props.pbSm !== undefined ? 'pb-sm-' + props.pbSm : '',
  props.pbMd && props.pbMd !== undefined ? 'pb-md-' + props.pbMd : '',
  props.pbLg && props.pbLg !== undefined ? 'pb-lg-' + props.pbLg : '',
  props.pbXl && props.pbXl !== undefined ? 'pb-xl-' + props.pbXl : '',
  props.pbXxl && props.pbXxl !== undefined ? 'pb-xxl-' + props.pbXxl : '',
  props.pt && props.pt !== undefined ? 'pt-' + props.pt : '',
  props.ptSm && props.ptSm !== undefined ? 'pt-sm-' + props.ptSm : '',
  props.ptMd && props.ptMd !== undefined ? 'pt-md-' + props.ptMd : '',
  props.ptLg && props.ptLg !== undefined ? 'pt-lg-' + props.ptLg : '',
  props.ptXl && props.ptXl !== undefined ? 'pt-xl-' + props.ptXl : '',
  props.ptXxl && props.ptXxl !== undefined ? 'pt-xxl-' + props.ptXxl : '',
  props.ps && props.ps !== undefined ? 'ps-' + props.ps : '',
  props.psSm && props.psSm !== undefined ? 'ps-sm-' + props.psSm : '',
  props.psMd && props.psMd !== undefined ? 'ps-md-' + props.psMd : '',
  props.psLg && props.psLg !== undefined ? 'ps-lg-' + props.psLg : '',
  props.psXl && props.psXl !== undefined ? 'ps-xl-' + props.psXl : '',
  props.psXxl && props.psXxl !== undefined ? 'ps-xxl-' + props.psXxl : '',
  props.pe && props.pe !== undefined ? 'pe-' + props.pe : '',
  props.peSm && props.peSm !== undefined ? 'pe-sm-' + props.peSm : '',
  props.peMd && props.peMd !== undefined ? 'pe-md-' + props.peMd : '',
  props.peLg && props.peLg !== undefined ? 'pe-lg-' + props.peLg : '',
  props.peXl && props.peXl !== undefined ? 'pe-xl-' + props.peXl : '',
  props.peXxl && props.peXxl !== undefined ? 'pe-xxl-' + props.peXxl : ''
]

export const getJustifyContentClasses = (
  props: JustifyContentProps
): Array<string> => [
  props.justifyContent && props.justifyContent !== undefined
    ? 'justify-content-' + props.justifyContent
    : '',
  props.justifyContentSm && props.justifyContentSm !== undefined
    ? 'justify-content-sm-' + props.justifyContentSm
    : '',
  props.justifyContentMd && props.justifyContentMd !== undefined
    ? 'justify-content-md-' + props.justifyContentMd
    : '',
  props.justifyContentLg && props.justifyContentLg !== undefined
    ? 'justify-content-lg-' + props.justifyContentLg
    : '',
  props.justifyContentXl && props.justifyContentXl !== undefined
    ? 'justify-content-xl-' + props.justifyContentXl
    : '',
  props.justifyContentXxl && props.justifyContentXxl !== undefined
    ? 'justify-content-xxl-' + props.justifyContentXxl
    : ''
]

export const getAlingItemsClasses = (props: AlignItemsProps): Array<string> => [
  props.alignItems && props.alignItems !== undefined
    ? 'align-items-' + props.alignItems
    : '',
  props.alignItemsSm && props.alignItemsSm !== undefined
    ? 'align-items-sm-' + props.alignItemsSm
    : '',
  props.alignItemsMd && props.alignItemsMd !== undefined
    ? 'align-items-md-' + props.alignItemsMd
    : '',
  props.alignItemsLg && props.alignItemsLg !== undefined
    ? 'align-items-lg-' + props.alignItemsLg
    : '',
  props.alignItemsXl && props.alignItemsXl !== undefined
    ? 'align-items-xl-' + props.alignItemsXl
    : '',
  props.alignItemsXxl && props.alignItemsXxl !== undefined
    ? 'align-items-xxl-' + props.alignItemsXxl
    : ''
]

export const getGutterClasses = (props: GutterProps): Array<string> => [
  props.g && props.g !== undefined ? 'g-' + props.g : '',
  props.gSm && props.gSm !== undefined ? 'g-sm-' + props.gSm : '',
  props.gMd && props.gMd !== undefined ? 'g-md-' + props.gMd : '',
  props.gLg && props.gLg !== undefined ? 'g-lg-' + props.gLg : '',
  props.gXl && props.gXl !== undefined ? 'g-xl-' + props.gXl : '',
  props.gXxl && props.gXxl !== undefined ? 'g-xxl-' + props.gXxl : '',
  props.gx && props.gx !== undefined ? 'gx-' + props.gx : '',
  props.gySm && props.gySm !== undefined ? 'gx-sm-' + props.gySm : '',
  props.gyMd && props.gyMd !== undefined ? 'gx-md-' + props.gyMd : '',
  props.gyLg && props.gyLg !== undefined ? 'gx-lg-' + props.gyLg : '',
  props.gyXl && props.gyXl !== undefined ? 'gx-xl-' + props.gyXl : '',
  props.gyXxl && props.gyXxl !== undefined ? 'gx-xxl-' + props.gyXxl : '',
  props.gy && props.gy !== undefined ? 'gy-' + props.gy : '',
  props.gySm && props.gySm !== undefined ? 'gy-sm-' + props.gySm : '',
  props.gyMd && props.gyMd !== undefined ? 'gy-md-' + props.gyMd : '',
  props.gyLg && props.gyLg !== undefined ? 'gy-lg-' + props.gyLg : '',
  props.gyXl && props.gyXl !== undefined ? 'gy-xl-' + props.gyXl : '',
  props.gyXxl && props.gyXxl !== undefined ? 'gy-xxl-' + props.gyXxl : ''
]

export const getVisibleClasses = (props: VisibleProps): Array<string> => [
  props.visible && props.visible !== undefined ? 'd-block' : '',
  props.visibleSm && props.visibleSm !== undefined ? 'd-sm-block' : '',
  props.visibleMd && props.visibleMd !== undefined ? 'd-md-block' : '',
  props.visibleLg && props.visibleLg !== undefined ? 'd-lg-block' : '',
  props.visibleXl && props.visibleXl !== undefined ? 'd-xl-block' : '',
  props.visibleXll && props.visibleXll !== undefined ? 'd-xll-block' : ''
]

export const getHiddenClasses = (props: HidddenProps): Array<string> => [
  props.hidden && props.hidden !== undefined ? 'd-none' : '',
  props.hiddenSm && props.hiddenSm !== undefined ? 'd-sm-none' : '',
  props.hiddenMd && props.hiddenMd !== undefined ? 'd-md-none' : '',
  props.hiddenLg && props.hiddenLg !== undefined ? 'd-lg-none' : '',
  props.hiddenXl && props.hiddenXl !== undefined ? 'd-xl-none' : '',
  props.hiddenXll && props.hiddenXll !== undefined ? 'd-xll-none' : ''
]

export const getRowClasses = (props: RowProps): Array<string> => [
  'row',
  props.rowCols && props.rowCols !== undefined
    ? 'row-cols-' + props.rowCols
    : '',
  props.rowColsSm && props.rowColsSm !== undefined
    ? 'row-cols-sm-' + props.rowColsSm
    : '',
  props.rowColsMd && props.rowColsMd !== undefined
    ? 'row-cols-md-' + props.rowColsMd
    : '',
  props.rowColsLg && props.rowColsLg !== undefined
    ? 'row-cols-lg-' + props.rowColsLg
    : '',
  props.rowColsXl && props.rowColsXl !== undefined
    ? 'row-cols-xl-' + props.rowColsXl
    : '',
  props.rowColsXxl && props.rowColsXxl !== undefined
    ? 'row-cols-xll-' + props.rowColsXxl
    : ''
]

export const rowClasses = (
  rowProps: RowProps,
  justifyContentProps: JustifyContentProps,
  alignItemsProps: AlignItemsProps,
  marginProps: MarginProps,
  gutterProps: GutterProps,
  paddingProps: PaddingProps
): string =>
  cs(
    getRowClasses(rowProps),
    getJustifyContentClasses(justifyContentProps),
    getAlingItemsClasses(alignItemsProps),
    getMarginClasses(marginProps),
    getGutterClasses(gutterProps),
    getPaddingClasses(paddingProps)
  )

const getOrderClasses = (props: OrderProps): Array<string> => [
  props.order ? 'order-' + props.order : '',
  props.orderSm ? 'order-sm-' + props.orderSm : '',
  props.orderMd ? 'order-md-' + props.orderMd : '',
  props.orderLg ? 'order-lg-' + props.orderLg : '',
  props.orderXl ? 'order-xl-' + props.orderXl : '',
  props.orderXxl ? 'order-xxl-' + props.orderXxl : ''
]

const getOffsetClasses = (props: OffsetProps): Array<string> => [
  props.offset ? 'offset-' + props.offset : '',
  props.offsetSm ? 'offset-sm-' + props.offsetSm : '',
  props.offsetMd ? 'offset-md-' + props.offsetMd : '',
  props.offsetLg ? 'offset-lg-' + props.offsetLg : '',
  props.offsetXl ? 'offset-xl-' + props.offsetXl : '',
  props.offsetXxl ? 'offset-xxl-' + props.offsetXxl : ''
]

const getColClasses = (props: ColProps): Array<string> => [
  props.col === true ? 'col' : '',
  props.sm === true ? 'col-sm' : '',
  props.md === true ? 'col-md' : '',
  props.lg === true ? 'col-lg' : '',
  props.xl === true ? 'col-xl' : '',
  props.xxl === true ? 'col-xxl' : '',
  props.col !== true && props.col !== undefined ? 'col-' + props.col : '',
  props.sm !== true && props.sm !== undefined ? 'col-sm-' + props.sm : '',
  props.md !== true && props.md !== undefined ? 'col-md-' + props.md : '',
  props.lg !== true && props.lg !== undefined ? 'col-lg-' + props.lg : '',
  props.xl !== true && props.xl !== undefined ? 'col-xl-' + props.xl : '',
  props.xxl !== true && props.xxl !== undefined ? 'col-xxl-' + props.xxl : ''
]

export const colClasses = (
  colProps: ColProps,
  orderProps: OrderProps,
  offsetProps: OffsetProps,
  marginProps: MarginProps,
  paddingProps: PaddingProps,
  visibleProps: VisibleProps,
  hiddenProps: HidddenProps
): string =>
  cs(
    getColClasses(colProps),
    getOrderClasses(orderProps),
    getOffsetClasses(offsetProps),
    getMarginClasses(marginProps),
    getPaddingClasses(paddingProps),
    getVisibleClasses(visibleProps),
    getHiddenClasses(hiddenProps)
  )

const getContainerClasses = (props: ContainerPropsTypes): Array<string> => [
  props.fluid ? 'container-fluid' : 'container',
  props.sm ? 'container-sm' : '',
  props.md ? 'container-md' : '',
  props.lg ? 'container-lg' : '',
  props.xl ? 'container-xl' : '',
  props.xxl ? 'container-xxl' : ''
]

export const containerClasses = (containerProps: ContainerPropsTypes): string =>
  cs(getContainerClasses(containerProps))
