import antfu from '@antfu/eslint-config'

const item1 = {
  name: 'item1', // lose
  rules: {
    'no-console': 'off'
  }
}

const item2 = {
  name: 'item2',
  rules: {
    'no-used': 'off'
  }
}

export default antfu(item1, item2)