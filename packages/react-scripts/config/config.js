/**
 * common config used in dev and prod config.
 */
module.exports = {
  babel: {
    babelrc: false,
    presets: ['react-app'],
    // @remove-on-eject-end
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    cacheDirectory: true,
    plugins: [
      ['import', [{ libraryName: 'antd', style: true }]]
    ]
  }
}
