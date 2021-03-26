import { getMarginClasses } from '../../utils/get-classes'

describe('get-classes utils functions', () => {
  test('getMarginClasses', () => {
    const res = getMarginClasses({ m: '1' })
    expect(res.find((r) => r === 'm-1')).toBeTruthy()
  })
})
