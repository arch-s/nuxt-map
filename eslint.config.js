import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
  },
  rules: {
    'prefer-arrow-callback': 'error',
  },
});
