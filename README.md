# Common frontend tasks with modern bundlers

The idea behind this project is to compare [Webpack](https://webpack.github.io/) and [Browserify](http://browserify.org/) as two most popular module builders for JS. We've put both setups side by side and configured them up for simple yet common workflow. Take a look and compare different approaches and make your next descidion consiously.

We think about it as a TodoMVC for module bundlers if you will.

### How-to

TODO

### More bundlers?

We do accept pull requests.

### Troubleshooting Webpack

1. Sometimes when you get...

```
ERROR in Entry module not found: Error: Cannot resolve 'file' or 'directory'
```

...this probably means you have a mistake somewhere else — for example in `package.json`. [Read here](https://github.com/webpack/karma-webpack/issues/33) for detail, that might save you shitload of time.

2. If your `webpack-dev-server shows you content of folder instead of rendered `index.html` — you might need to make sure that you stated proper `contentBase` in `server.js` (hell yes, you have to be explicit!)