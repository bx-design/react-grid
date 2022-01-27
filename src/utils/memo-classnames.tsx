import { useMemo } from 'react'

type MemoFnType<T extends undefined | object> = (props: T) => string

export function createMemoClass<Y extends undefined | object>(
  func: MemoFnType<Y>
) {
  return function useMemoClass(args?: any) {
    return useMemo(() => func(args), [args])
  }
}
