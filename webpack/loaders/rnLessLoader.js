const less = require('less');
const path = require('path');
const cssToReactNative = require('css-to-react-native-transform').default;

module.exports = function rnLessLoader(source) {
  const callback = this.async();
  less
    .render(source, {
      paths: [path.dirname(this.resourcePath), process.cwd()],
      filename: this.resourcePath
    })
    .then(result => {
      const styleObject = cssToReactNative(result.css, { parseMediaQueries: true });
      callback(null, `module.exports = ${JSON.stringify(styleObject)};`);
    })
    .catch(err => callback(err));
};

