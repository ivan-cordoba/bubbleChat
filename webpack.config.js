module.exports = {
    entry: __dirname + '/client/index.jsx',
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react'],
            plugins: [
              [
                "babel-plugin-styled-components"
              ]
            ]
          }
        }
      ]
    },
     output: {
      filename: 'bubble.js',
      path: __dirname + '/public',
    }
};
