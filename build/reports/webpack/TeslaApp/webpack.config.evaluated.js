{
  mode: 'production',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/mobiledeveloper/Documents/Shared/TeslaApp/build/js/packages/TeslaApp/kotlin/TeslaApp.js'
    ]
  },
  output: {
    path: '/Users/mobiledeveloper/Documents/Shared/TeslaApp/build/distributions',
    filename: [Function: filename],
    library: 'TeslaApp',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/Users/mobiledeveloper/Documents/Shared/TeslaApp/build/processedResources/js/main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}