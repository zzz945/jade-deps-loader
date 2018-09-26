A pre-loader to add jade template dependencies as loader's deps without changing anything of the input.

Use it like below:

```javascript
{
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    preLoaders: {
      jade: 'jade-deps-loader'
    }
  }
}
```

Reference: https://github.com/vuejs/vue-loader/issues/1122