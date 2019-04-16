const { resolve } = require('path');

module.exports = (context) => {
  return {
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        '@layouts': resolve(__dirname, 'src/layouts/'),
        '@components': resolve(__dirname, 'src/components/'),
        '@utils': resolve(__dirname, 'src/utils/'),
      },
    },
  };
};
