# react-grid

BX Grid System for React.

## Installation (for standard modern project)
`yarn add @bx-design/react-grid`

Or

`npm install @bx-design/react-grid`

## Example usage

First add bx-grid.min.css for styles.

For CRA add in `index`, for Next.js add in `_app`

```jsx
import '@bx-design/react-grid/dist/styles/bx-grid.min.css'
```

Using grid

```jsx
import { Container, Row, Col } from '@bx-design/react-grid'

const SomeComponent = () => {
  return (
    <Container>
      <Row>
         <Col col='12'>
           <h1>BX Grid</h1>
         </Col>
      </Row>
    </Container>
  )
}
```

## Props

### Container

| Prop | Type |  Default  | Breakpoint |
| ------------ | ------------ | ------------ | ------------ |
| fluid | boolean  | false | all |
| sm | boolean  | undefined | sm |
| md | boolean  | undefined | md |
| lg | boolean  | undefined | lg |
| xl | boolean  | undefined | xl |
| xxl | boolean  | undefined | xxl |

### Row

| Prop | Type |  Default  | Breakpoint |
| ------------ | ------------ | ------------ | ------------ |
| rowCols | boolean, "auto", "1", "2", "3", "4", "5", "6" | false | all |
| rowColsSm | boolean, "auto", "1", "2", "3", "4", "5", "6" | false | sm |
| rowColsMd | boolean, "auto", "1", "2", "3", "4", "5", "6" | false | md |
| rowColsLg | boolean, "auto", "1", "2", "3", "4", "5", "6" | false | lg |
| rowColsXl | boolean, "auto", "1", "2", "3", "4", "5", "6" | false | xl |
| rowColsXxl | boolean, "auto", "1", "2", "3", "4", "5", "6" | false | xxl |
| justifyContent | "start", "end", "center", "between", "around", "evenly" | undefined | all |
| justifyContentSm | "start", "end", "center", "between", "around", "evenly" | undefined | sm |
| justifyContentMd | "start", "end", "center", "between", "around", "evenly" | undefined | md |
| justifyContentLg | "start", "end", "center", "between", "around", "evenly" | undefined | lg |
| justifyContentXl | "start", "end", "center", "between", "around", "evenly" | undefined | xl |
| justifyContentXxl | "start", "end", "center", "between", "around", "evenly" | undefined | xxl |
| alignItems | "start", "end", "center", "baseline", "stretch" | undefined | all |
| alignItemsSm | "start", "end", "center", "baseline", "stretch" | undefined | sm |
| alignItemsMd | "start", "end", "center", "baseline", "stretch" | undefined | md |
| alignItemsLg | "start", "end", "center", "baseline", "stretch" | undefined | lg |
| alignItemsXl | "start", "end", "center", "baseline", "stretch" | undefined | xl |
| alignItemsXxl | "start", "end", "center", "baseline", "stretch" | undefined | xxl |
| m | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| mSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| mMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| mLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| mXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| mXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| mx | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| mxSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| mxMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| mxLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| mxXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| mxXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| my | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| mySm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| myMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| myLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| myXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| myXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| mb | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| mbSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| mbMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| mbLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| mbXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| mbXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| mt | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| mtSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| mtMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| mtLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| mtXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| mtXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| ms | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| msSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| msMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| msLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| msXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| msXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| me | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| meSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| meMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| meLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| meXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| meXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| g | "1", "2", "3", "4", "5", "0" | undefined | all |
| gSm | "1", "2", "3", "4", "5", "0" | undefined | sm |
| gMd | "1", "2", "3", "4", "5", "0" | undefined | md |
| gLg | "1", "2", "3", "4", "5", "0" | undefined | lg |
| gXl | "1", "2", "3", "4", "5", "0" | undefined | xl |
| gXxl | "1", "2", "3", "4", "5", "0" | undefined | xxl |
| gx | "1", "2", "3", "4", "5", "0" | undefined | all |
| gxSm | "1", "2", "3", "4", "5", "0" | undefined | sm |
| gxMd | "1", "2", "3", "4", "5", "0" | undefined | md |
| gxLg | "1", "2", "3", "4", "5", "0" | undefined | lg |
| gxXl | "1", "2", "3", "4", "5", "0" | undefined | xl |
| gxXxl | "1", "2", "3", "4", "5", "0" | undefined | xxl |
| gy | "1", "2", "3", "4", "5", "0" | undefined | all |
| gySm | "1", "2", "3", "4", "5", "0" | undefined | sm |
| gyMd | "1", "2", "3", "4", "5", "0" | undefined | md |
| gyLg | "1", "2", "3", "4", "5", "0" | undefined | lg |
| gyXl | "1", "2", "3", "4", "5", "0" | undefined | xl |
| gyXxl | "1", "2", "3", "4", "5", "0" | undefined | xxl |
| p | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| pSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| pMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| pLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| pXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| pXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| px | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| pxSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| pxMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| pxLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| pxXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| pxXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| py | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| pySm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| pyMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| pyLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| pyXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| pyXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| pb | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| pbSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| pbMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| pbLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| pbXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| pbXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| pt | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| ptSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| ptMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| ptLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| ptXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| ptXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| ps | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| psSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| psMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| psLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| psXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| psXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| pe | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| peSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| peMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| peLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| peXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| peXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |

### Col

| Prop | Type |  Default  | Breakpoint |
| ------------ | ------------ | ------------ | ------------ |
| col | true , 'auto' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' , '12' | all |
| colSm | true , 'auto' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' , '12' | all |
| colMd | true , 'auto' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' , '12' | all |
| colLg | true , 'auto' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' , '12' | all |
| colXl | true , 'auto' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' , '12' | all |
| colXll | true , 'auto' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' , '12' | all |
| hidden | boolean | undefined | all |
| hiddenSm | boolean | undefined | sm |
| hiddenMd | boolean | undefined | md |
| hiddenLg | boolean | undefined | lg |
| hiddenXl | boolean | undefined | xl |
| hiddenXll | boolean | undefined | xxl |
| visible | boolean | undefined | all |
| visibleSm | boolean | undefined | sm |
| visibleMd | boolean | undefined | md |
| visibleLg | boolean | undefined | lg |
| visibleXl | boolean | undefined | xl |
| visibleXll | boolean | undefined | xxl |
| order | 'first' , '0' , '1' , '2' , '3' , '4' , '5' , 'last' | undefined | all |
| orderSm | 'first' , '0' , '1' , '2' , '3' , '4' , '5' , 'last' | undefined | sm |
| orderMd | 'first' , '0' , '1' , '2' , '3' , '4' , '5' , 'last' | undefined | md |
| orderLg | 'first' , '0' , '1' , '2' , '3' , '4' , '5' , 'last' | undefined | lg |
| orderXl | 'first' , '0' , '1' , '2' , '3' , '4' , '5' , 'last' | undefined | xl |
| orderXll | 'first' , '0' , '1' , '2' , '3' , '4' , '5' , 'last' | undefined | xxl |
| offset | '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' | undefined | all |
| offsetSm | '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' | undefined | sm |
| offsetMd | '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' | undefined | md |
| offsetLg | '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' | undefined | lg |
| offsetXl | '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' | undefined | xl |
| offsetXll | '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' | undefined | xxl |
| m | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| mSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| mMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| mLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| mXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| mXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| mx | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| mxSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| mxMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| mxLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| mxXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| mxXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| my | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| mySm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| myMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| myLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| myXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| myXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| mb | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| mbSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| mbMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| mbLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| mbXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| mbXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| mt | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| mtSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| mtMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| mtLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| mtXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| mtXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| ms | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| msSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| msMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| msLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| msXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| msXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| me | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| meSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| meMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| meLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| meXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| meXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| g | "1", "2", "3", "4", "5", "0" | undefined | all |
| gSm | "1", "2", "3", "4", "5", "0" | undefined | sm |
| gMd | "1", "2", "3", "4", "5", "0" | undefined | md |
| gLg | "1", "2", "3", "4", "5", "0" | undefined | lg |
| gXl | "1", "2", "3", "4", "5", "0" | undefined | xl |
| gXxl | "1", "2", "3", "4", "5", "0" | undefined | xxl |
| gx | "1", "2", "3", "4", "5", "0" | undefined | all |
| gxSm | "1", "2", "3", "4", "5", "0" | undefined | sm |
| gxMd | "1", "2", "3", "4", "5", "0" | undefined | md |
| gxLg | "1", "2", "3", "4", "5", "0" | undefined | lg |
| gxXl | "1", "2", "3", "4", "5", "0" | undefined | xl |
| gxXxl | "1", "2", "3", "4", "5", "0" | undefined | xxl |
| gy | "1", "2", "3", "4", "5", "0" | undefined | all |
| gySm | "1", "2", "3", "4", "5", "0" | undefined | sm |
| gyMd | "1", "2", "3", "4", "5", "0" | undefined | md |
| gyLg | "1", "2", "3", "4", "5", "0" | undefined | lg |
| gyXl | "1", "2", "3", "4", "5", "0" | undefined | xl |
| gyXxl | "1", "2", "3", "4", "5", "0" | undefined | xxl |
| p | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| pSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| pMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| pLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| pXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| pXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| px | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| pxSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| pxMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| pxLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| pxXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| pxXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| py | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| pySm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| pyMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| pyLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| pyXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| pyXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| pb | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| pbSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| pbMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| pbLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| pbXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| pbXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| pt | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| ptSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| ptMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| ptLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| ptXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| ptXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| ps | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| psSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| psMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| psLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| psXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| psXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |
| pe | "auto", "1", "2", "3", "4", "5", "0" | undefined | all |
| peSm | "auto", "1", "2", "3", "4", "5", "0" | undefined | sm |
| peMd | "auto", "1", "2", "3", "4", "5", "0" | undefined | md |
| peLg | "auto", "1", "2", "3", "4", "5", "0" | undefined | lg |
| peXl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xl |
| peXxl | "auto", "1", "2", "3", "4", "5", "0" | undefined | xxl |