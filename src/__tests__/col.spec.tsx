import { render, screen } from '@testing-library/react'
import Col from '../col'

describe('Col', () => {
  test('render Col component', () => {
    render(
      <Col>
        <h1>COL</h1>
      </Col>
    )
    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toHaveClass('col')
    expect(col).toMatchSnapshot()
  })

  test('render Col component with col boolean props', () => {
    render(
      <Col col sm md lg xl xxl>
        <h1>COL</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toMatchSnapshot()
    expect(col).toHaveClass('col')
    expect(col).toHaveClass('col-sm')
    expect(col).toHaveClass('col-md')
    expect(col).toHaveClass('col-lg')
    expect(col).toHaveClass('col-xl')
    expect(col).toHaveClass('col-xxl')
  })

  test('render Col component with col props', () => {
    render(
      <Col col='6' sm='7' md='8' lg='9' xl='10' xxl='11'>
        <h1>COL</h1>
      </Col>
    )
    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toMatchSnapshot()
    expect(col).toHaveClass('col-6')
    expect(col).toHaveClass('col-sm-7')
    expect(col).toHaveClass('col-md-8')
    expect(col).toHaveClass('col-lg-9')
    expect(col).toHaveClass('col-xl-10')
    expect(col).toHaveClass('col-xxl-11')
  })

  test('render Col component with order props', () => {
    render(
      <Col
        order='0'
        orderSm='1'
        orderMd='2'
        orderLg='3'
        orderXl='4'
        orderXxl='5'
      >
        <h1>COL</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toMatchSnapshot()
    expect(col).toHaveClass('order-0')
    expect(col).toHaveClass('order-sm-1')
    expect(col).toHaveClass('order-md-2')
    expect(col).toHaveClass('order-lg-3')
    expect(col).toHaveClass('order-xl-4')
    expect(col).toHaveClass('order-xxl-5')
  })

  test('render Col component with offset props', () => {
    render(
      <Col
        offset='1'
        offsetSm='2'
        offsetMd='3'
        offsetLg='4'
        offsetXl='5'
        offsetXxl='6'
      >
        <h1>COL</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toMatchSnapshot()
    expect(col).toHaveClass('offset-1')
    expect(col).toHaveClass('offset-sm-2')
    expect(col).toHaveClass('offset-md-3')
    expect(col).toHaveClass('offset-lg-4')
    expect(col).toHaveClass('offset-xl-5')
    expect(col).toHaveClass('offset-xxl-6')
  })

  test('render Col with margin props', () => {
    render(
      <Col
        m='1'
        mSm='1'
        mMd='1'
        mLg='1'
        mXl='1'
        mXxl='1'
        mx='1'
        mxSm='1'
        mxMd='1'
        mxLg='1'
        mxXl='1'
        mxXxl='1'
        my='1'
        mySm='1'
        myMd='1'
        myLg='1'
        myXl='1'
        myXxl='1'
        mb='1'
        mbSm='1'
        mbMd='1'
        mbLg='1'
        mbXl='1'
        mbXxl='1'
        mt='1'
        mtSm='1'
        mtMd='1'
        mtLg='1'
        mtXl='1'
        mtXxl='1'
        ms='1'
        msSm='1'
        msMd='1'
        msLg='1'
        msXl='1'
        msXxl='1'
        me='1'
        meSm='1'
        meMd='1'
        meLg='1'
        meXl='1'
        meXxl='1'
      >
        <h1>COL</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toMatchSnapshot()
    expect(col).toHaveClass('m-1')
    expect(col).toHaveClass('m-sm-1')
    expect(col).toHaveClass('m-md-1')
    expect(col).toHaveClass('m-lg-1')
    expect(col).toHaveClass('m-xl-1')
    expect(col).toHaveClass('m-xxl-1')
    expect(col).toHaveClass('mx-1')
    expect(col).toHaveClass('mx-sm-1')
    expect(col).toHaveClass('mx-md-1')
    expect(col).toHaveClass('mx-lg-1')
    expect(col).toHaveClass('mx-xl-1')
    expect(col).toHaveClass('mx-xxl-1')
    expect(col).toHaveClass('my-1')
    expect(col).toHaveClass('my-sm-1')
    expect(col).toHaveClass('my-md-1')
    expect(col).toHaveClass('my-lg-1')
    expect(col).toHaveClass('my-xl-1')
    expect(col).toHaveClass('my-xxl-1')
    expect(col).toHaveClass('mb-1')
    expect(col).toHaveClass('mb-sm-1')
    expect(col).toHaveClass('mb-md-1')
    expect(col).toHaveClass('mb-lg-1')
    expect(col).toHaveClass('mb-xl-1')
    expect(col).toHaveClass('mb-xxl-1')
    expect(col).toHaveClass('mt-1')
    expect(col).toHaveClass('mt-sm-1')
    expect(col).toHaveClass('mt-md-1')
    expect(col).toHaveClass('mt-lg-1')
    expect(col).toHaveClass('mt-xl-1')
    expect(col).toHaveClass('mt-xxl-1')
    expect(col).toHaveClass('ms-1')
    expect(col).toHaveClass('ms-sm-1')
    expect(col).toHaveClass('ms-md-1')
    expect(col).toHaveClass('ms-lg-1')
    expect(col).toHaveClass('ms-xl-1')
    expect(col).toHaveClass('ms-xxl-1')
    expect(col).toHaveClass('me-1')
    expect(col).toHaveClass('me-sm-1')
    expect(col).toHaveClass('me-md-1')
    expect(col).toHaveClass('me-lg-1')
    expect(col).toHaveClass('me-xl-1')
    expect(col).toHaveClass('me-xxl-1')
  })

  test('render Col with padding props', () => {
    render(
      <Col
        p='0'
        pSm='1'
        pMd='2'
        pLg='3'
        pXl='4'
        pXxl='5'
        px='0'
        pxSm='1'
        pxMd='2'
        pxLg='3'
        pxXl='4'
        pxXxl='5'
        py='0'
        pySm='1'
        pyMd='2'
        pyLg='3'
        pyXl='4'
        pyXxl='5'
        pb='0'
        pbSm='1'
        pbMd='2'
        pbLg='3'
        pbXl='4'
        pbXxl='5'
        pt='0'
        ptSm='1'
        ptMd='2'
        ptLg='3'
        ptXl='4'
        ptXxl='5'
        ps='0'
        psSm='1'
        psMd='2'
        psLg='3'
        psXl='4'
        psXxl='5'
        pe='0'
        peSm='1'
        peMd='2'
        peLg='3'
        peXl='4'
        peXxl='5'
      >
        <h1>COL</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toMatchSnapshot()
    expect(col).toHaveClass('p-0')
    expect(col).toHaveClass('p-sm-1')
    expect(col).toHaveClass('p-md-2')
    expect(col).toHaveClass('p-lg-3')
    expect(col).toHaveClass('p-xl-4')
    expect(col).toHaveClass('p-xxl-5')
    expect(col).toHaveClass('px-0')
    expect(col).toHaveClass('px-sm-1')
    expect(col).toHaveClass('px-md-2')
    expect(col).toHaveClass('px-lg-3')
    expect(col).toHaveClass('px-xl-4')
    expect(col).toHaveClass('px-xxl-5')
    expect(col).toHaveClass('py-0')
    expect(col).toHaveClass('py-sm-1')
    expect(col).toHaveClass('py-md-2')
    expect(col).toHaveClass('py-lg-3')
    expect(col).toHaveClass('py-xl-4')
    expect(col).toHaveClass('py-xxl-5')
    expect(col).toHaveClass('pb-0')
    expect(col).toHaveClass('pb-sm-1')
    expect(col).toHaveClass('pb-md-2')
    expect(col).toHaveClass('pb-lg-3')
    expect(col).toHaveClass('pb-xl-4')
    expect(col).toHaveClass('pb-xxl-5')
    expect(col).toHaveClass('pt-0')
    expect(col).toHaveClass('pt-sm-1')
    expect(col).toHaveClass('pt-md-2')
    expect(col).toHaveClass('pt-lg-3')
    expect(col).toHaveClass('pt-xl-4')
    expect(col).toHaveClass('pt-xxl-5')
    expect(col).toHaveClass('ps-0')
    expect(col).toHaveClass('ps-sm-1')
    expect(col).toHaveClass('ps-md-2')
    expect(col).toHaveClass('ps-lg-3')
    expect(col).toHaveClass('ps-xl-4')
    expect(col).toHaveClass('ps-xxl-5')
    expect(col).toHaveClass('pe-0')
    expect(col).toHaveClass('pe-sm-1')
    expect(col).toHaveClass('pe-md-2')
    expect(col).toHaveClass('pe-lg-3')
    expect(col).toHaveClass('pe-xl-4')
    expect(col).toHaveClass('pe-xxl-5')
  })

  test('remder Col with visible props', () => {
    render(
      <Col visible visibleSm visibleMd visibleLg visibleXl visibleXll>
        <h1>COL</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toMatchSnapshot()
    expect(col).toHaveClass('d-block')
    expect(col).toHaveClass('d-sm-block')
    expect(col).toHaveClass('d-md-block')
    expect(col).toHaveClass('d-lg-block')
    expect(col).toHaveClass('d-xl-block')
    expect(col).toHaveClass('d-xll-block')
  })

  test('remder Col with hidden props', () => {
    render(
      <Col hidden hiddenSm hiddenMd hiddenLg hiddenXl hiddenXll>
        <h1>COL</h1>
      </Col>
    )

    const col = screen.getByTestId('col')
    expect(col).toBeInTheDocument()
    expect(col).toHaveTextContent('COL')
    expect(col).toMatchSnapshot()
    expect(col).toHaveClass('d-none')
    expect(col).toHaveClass('d-sm-none')
    expect(col).toHaveClass('d-md-none')
    expect(col).toHaveClass('d-lg-none')
    expect(col).toHaveClass('d-xl-none')
    expect(col).toHaveClass('d-xll-none')
  })
})
