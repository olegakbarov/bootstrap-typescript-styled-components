# Common frontend tasks with modern bundlers

brought to you by [olegakbarov](https://github.com/olegakbarov) and [faergeek](https://github.com/faergeek)

#### tl;dr Hot-reloadable React app with both Webpack and Browswerify build side by side

The idea behind this project is to compare [Webpack](https://webpack.github.io/) and [Browserify](http://browserify.org/) as two most popular module bundlers for JS. We've put both setups side by side and configured them up for simple yet common workflow including React app with hot reload. Take a look and compare different approaches and make your next descidion consiously.

We think about it as a TodoMVC for module bundlers if you will.

### How-to

Install the dependencies (common as well specified to each bundler).

```sh
$ npm i
```

to run the browserify example go to `/example-browserify` and `npm start`, then navigate to `http://192.168.0.102:9966/`

for webpack example go to `/example-webpack`, `npm run start` and go to `http://localhost:8080`

### Structure

React app sits in `/src` folder and consists of extremely simple skeleton. You might tweak it just to make sure that hot reloading on both examples work as expected.

`Public` folder is good old place for statics (in our case just a html template).

`example-webpack` and `example-broweserify` gives you understanding on how to achieve this workflow with each bundler.

### More bundlers?

We do accept pull requests.

### Ideas, suggestions, fixes?

You're welcome to let us know about anything in issues.

### PS: Troubleshooting Webpack

- Sometimes when you get...

```
ERROR in Entry module not found: Error: Cannot resolve 'file' or 'directory'
```

...this probably means you have a mistake somewhere else — for example in `package.json`. [Read here](https://github.com/webpack/karma-webpack/issues/33) for detail, that might save you shitload of time.

- If your `webpack-dev-server shows you content of folder instead of rendered `index.html` — you might need to make sure that you stated proper `contentBase` in `server.js` (hell yes, you have to be explicit!)

