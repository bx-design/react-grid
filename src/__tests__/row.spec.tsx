import { render, screen } from '@testing-library/react'
import Row from '../row'
import type { RowPropsTypes } from '../types'

const customRender = (props?: RowPropsTypes) => {
  return render(<Row {...props} />)
}

describe('Row', () => {
  test('render Row component', () => {
    customRender()
    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toHaveClass('row')
    expect(row).toMatchSnapshot()
  })

  test('render Row with row props', () => {
    customRender({
      rowCols: '1',
      rowColsSm: '2',
      rowColsMd: '3',
      rowColsLg: '4',
      rowColsXl: '5',
      rowColsXxl: '6'
    })
    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toMatchSnapshot()
    expect(row).toHaveClass('row-cols-1')
    expect(row).toHaveClass('row-cols-sm-2')
    expect(row).toHaveClass('row-cols-md-3')
    expect(row).toHaveClass('row-cols-lg-4')
    expect(row).toHaveClass('row-cols-xl-5')
    expect(row).toHaveClass('row-cols-xll-6')
  })

  test('render Row with justify-content props', () => {
    customRender({
      justifyContent: 'around',
      justifyContentSm: 'between',
      justifyContentMd: 'center',
      justifyContentLg: 'end',
      justifyContentXl: 'evenly',
      justifyContentXxl: 'start'
    })
    const row = screen.getByTestId('row')
    expect(row).toMatchSnapshot()
    expect(row).toHaveClass('justify-content-around')
    expect(row).toHaveClass('justify-content-sm-between')
    expect(row).toHaveClass('justify-content-md-center')
    expect(row).toHaveClass('justify-content-lg-end')
    expect(row).toHaveClass('justify-content-xl-evenly')
    expect(row).toHaveClass('justify-content-xxl-start')
  })

  test('render Row with align items props', () => {
    customRender({
      alignItems: 'start',
      alignItemsSm: 'stretch',
      alignItemsMd: 'baseline',
      alignItemsLg: 'center',
      alignItemsXl: 'end',
      alignItemsXxl: 'end'
    })
    const row = screen.getByTestId('row')
    expect(row).toMatchSnapshot()
    expect(row).toHaveClass('align-items-start')
    expect(row).toHaveClass('align-items-sm-stretch')
    expect(row).toHaveClass('align-items-md-baseline')
    expect(row).toHaveClass('align-items-lg-center')
    expect(row).toHaveClass('align-items-xl-end')
    expect(row).toHaveClass('align-items-xxl-end')
  })

  test('render Row with margin props', () => {
    customRender({
      m: '1',
      mSm: '1',
      mMd: '1',
      mLg: '1',
      mXl: '1',
      mXxl: '1',
      mx: '1',
      mxSm: '1',
      mxMd: '1',
      mxLg: '1',
      mxXl: '1',
      mxXxl: '1',
      my: '1',
      mySm: '1',
      myMd: '1',
      myLg: '1',
      myXl: '1',
      myXxl: '1',
      mb: '1',
      mbSm: '1',
      mbMd: '1',
      mbLg: '1',
      mbXl: '1',
      mbXxl: '1',
      mt: '1',
      mtSm: '1',
      mtMd: '1',
      mtLg: '1',
      mtXl: '1',
      mtXxl: '1',
      ms: '1',
      msSm: '1',
      msMd: '1',
      msLg: '1',
      msXl: '1',
      msXxl: '1',
      me: '1',
      meSm: '1',
      meMd: '1',
      meLg: '1',
      meXl: '1',
      meXxl: '1'
    })
    const row = screen.getByTestId('row')
    expect(row).toBeInTheDocument()
    expect(row).toMatchSnapshot()
    expect(row).toHaveClass('row')
    expect(row).toHaveClass('m-1')
    expect(row).toHaveClass('m-sm-1')
    expect(row).toHaveClass('m-md-1')
    expect(row).toHaveClass('m-lg-1')
    expect(row).toHaveClass('m-xl-1')
    expect(row).toHaveClass('m-xxl-1')
    expect(row).toHaveClass('mx-1')
    expect(row).toHaveClass('mx-sm-1')
    expect(row).toHaveClass('mx-md-1')
    expect(row).toHaveClass('mx-lg-1')
    expect(row).toHaveClass('mx-xl-1')
    expect(row).toHaveClass('mx-xxl-1')
    expect(row).toHaveClass('my-1')
    expect(row).toHaveClass('my-sm-1')
    expect(row).toHaveClass('my-md-1')
    expect(row).toHaveClass('my-lg-1')
    expect(row).toHaveClass('my-xl-1')
    expect(row).toHaveClass('my-xxl-1')
    expect(row).toHaveClass('mb-1')
    expect(row).toHaveClass('mb-sm-1')
    expect(row).toHaveClass('mb-md-1')
    expect(row).toHaveClass('mb-lg-1')
    expect(row).toHaveClass('mb-xl-1')
    expect(row).toHaveClass('mb-xxl-1')
    expect(row).toHaveClass('mt-1')
    expect(row).toHaveClass('mt-sm-1')
    expect(row).toHaveClass('mt-md-1')
    expect(row).toHaveClass('mt-lg-1')
    expect(row).toHaveClass('mt-xl-1')
    expect(row).toHaveClass('mt-xxl-1')
    expect(row).toHaveClass('ms-1')
    expect(row).toHaveClass('ms-sm-1')
    expect(row).toHaveClass('ms-md-1')
    expect(row).toHaveClass('ms-lg-1')
    expect(row).toHaveClass('ms-xl-1')
    expect(row).toHaveClass('ms-xxl-1')
    expect(row).toHaveClass('me-1')
    expect(row).toHaveClass('me-sm-1')
    expect(row).toHaveClass('me-md-1')
    expect(row).toHaveClass('me-lg-1')
    expect(row).toHaveClass('me-xl-1')
    expect(row).toHaveClass('me-xxl-1')
  })

  test('render Row with gutter props', () => {
    customRender({
      g: '0',
      gSm: '1',
      gMd: '2',
      gLg: '3',
      gXl: '4',
      gXxl: '5',
      gx: '0',
      gxSm: '1',
      gxMd: '2',
      gxLg: '3',
      gxXl: '4',
      gxXxl: '5',
      gy: '0',
      gySm: '1',
      gyMd: '2',
      gyLg: '3',
      gyXl: '4',
      gyXxl: '5'
    })
    const row = screen.getByTestId('row')
    expect(row).toMatchSnapshot()
    expect(row).toHaveClass('g-0')
    expect(row).toHaveClass('g-sm-1')
    expect(row).toHaveClass('g-md-2')
    expect(row).toHaveClass('g-lg-3')
    expect(row).toHaveClass('g-xl-4')
    expect(row).toHaveClass('g-xxl-5')
    expect(row).toHaveClass('gx-0')
    expect(row).toHaveClass('gx-sm-1')
    expect(row).toHaveClass('gx-md-2')
    expect(row).toHaveClass('gx-lg-3')
    expect(row).toHaveClass('gx-xl-4')
    expect(row).toHaveClass('gx-xxl-5')
    expect(row).toHaveClass('gy-0')
    expect(row).toHaveClass('gy-sm-1')
    expect(row).toHaveClass('gy-md-2')
    expect(row).toHaveClass('gy-lg-3')
    expect(row).toHaveClass('gy-xl-4')
    expect(row).toHaveClass('gy-xxl-5')
  })

  test('render Row with padding props', () => {
    customRender({
      p: '0',
      pSm: '1',
      pMd: '2',
      pLg: '3',
      pXl: '4',
      pXxl: '5',
      px: '0',
      pxSm: '1',
      pxMd: '2',
      pxLg: '3',
      pxXl: '4',
      pxXxl: '5',
      py: '0',
      pySm: '1',
      pyMd: '2',
      pyLg: '3',
      pyXl: '4',
      pyXxl: '5',
      pb: '0',
      pbSm: '1',
      pbMd: '2',
      pbLg: '3',
      pbXl: '4',
      pbXxl: '5',
      pt: '0',
      ptSm: '1',
      ptMd: '2',
      ptLg: '3',
      ptXl: '4',
      ptXxl: '5',
      ps: '0',
      psSm: '1',
      psMd: '2',
      psLg: '3',
      psXl: '4',
      psXxl: '5',
      pe: '0',
      peSm: '1',
      peMd: '2',
      peLg: '3',
      peXl: '4',
      peXxl: '5'
    })
    const row = screen.getByTestId('row')
    expect(row).toMatchSnapshot()
    expect(row).toHaveClass('p-0')
    expect(row).toHaveClass('p-sm-1')
    expect(row).toHaveClass('p-md-2')
    expect(row).toHaveClass('p-lg-3')
    expect(row).toHaveClass('p-xl-4')
    expect(row).toHaveClass('p-xxl-5')
    expect(row).toHaveClass('px-0')
    expect(row).toHaveClass('px-sm-1')
    expect(row).toHaveClass('px-md-2')
    expect(row).toHaveClass('px-lg-3')
    expect(row).toHaveClass('px-xl-4')
    expect(row).toHaveClass('px-xxl-5')
    expect(row).toHaveClass('py-0')
    expect(row).toHaveClass('py-sm-1')
    expect(row).toHaveClass('py-md-2')
    expect(row).toHaveClass('py-lg-3')
    expect(row).toHaveClass('py-xl-4')
    expect(row).toHaveClass('py-xxl-5')
    expect(row).toHaveClass('pb-0')
    expect(row).toHaveClass('pb-sm-1')
    expect(row).toHaveClass('pb-md-2')
    expect(row).toHaveClass('pb-lg-3')
    expect(row).toHaveClass('pb-xl-4')
    expect(row).toHaveClass('pb-xxl-5')
    expect(row).toHaveClass('pt-0')
    expect(row).toHaveClass('pt-sm-1')
    expect(row).toHaveClass('pt-md-2')
    expect(row).toHaveClass('pt-lg-3')
    expect(row).toHaveClass('pt-xl-4')
    expect(row).toHaveClass('pt-xxl-5')
    expect(row).toHaveClass('ps-0')
    expect(row).toHaveClass('ps-sm-1')
    expect(row).toHaveClass('ps-md-2')
    expect(row).toHaveClass('ps-lg-3')
    expect(row).toHaveClass('ps-xl-4')
    expect(row).toHaveClass('ps-xxl-5')
    expect(row).toHaveClass('pe-0')
    expect(row).toHaveClass('pe-sm-1')
    expect(row).toHaveClass('pe-md-2')
    expect(row).toHaveClass('pe-lg-3')
    expect(row).toHaveClass('pe-xl-4')
    expect(row).toHaveClass('pe-xxl-5')
  })
})