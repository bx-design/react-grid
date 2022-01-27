// eslint-disable-next-line no-undef
module.exports = Container = () => ({
  '.bx-container': {
    '@apply w-full pr-3 pl-3 mx-auto': {},
    '&, &-sm': {
      '@apply sm:max-w-[540px]': {}
    },
    '&, &-sm, &-md': {
      '@apply md:max-w-[720px]': {}
    },
    '&, &-sm, &-md, &-lg': {
      '@apply md:max-w-[960px]': {}
    },
    '&, &-sm, &-md, &-xl': {
      '@apply xl:max-w-[1140px]': {}
    },
    '&, &-sm, &-md, &-xl, &-xxl': {
      '@apply 2xl:max-w-[1320px]': {}
    },
    '&-fluid, &-sm, &-md, &-lg, &-xl, &-xxl': {
      '@apply w-full pr-3 pl-3 mx-auto': {}
    }
  }
})
