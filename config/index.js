const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isBuildComponent = process.env.TARO_BUILD_TYPE === 'component'

const config = {
  projectName: 'taro-wi-ui',
  date: '2021-7-20',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: isBuildComponent ? 'dist' : `demo/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {
  },
    alias: {
        'hosjoy-wi-ui': path.resolve(__dirname, '../src/ui.js'),
    },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

/*if (isBuildComponent) {
    Object.assign(config.h5, {
        enableSourceMap: false,
        enableExtract: false,
        enableDll: false
    })
    config.h5.webpackChain = chain => {
        chain.plugins.delete('htmlWebpackPlugin')
        chain.plugins.delete('addAssetHtmlWebpackPlugin')
        chain.merge({
            output: {
                path: path.join(process.cwd(), 'dist', 'h5'),
                filename: 'index.js',
                libraryTarget: 'umd',
                library: 'hosjoy-wi-ui'
            },
            externals: {
                nervjs: 'commonjs2 nervjs',
                classnames: 'commonjs2 classnames',
                '@tarojs/components': 'commonjs2 @tarojs/components',
                '@tarojs/taro-h5': 'commonjs2 @tarojs/taro-h5',
                'weui': 'commonjs2 weui'
            },
            plugin: {
                extractCSS: {
                    plugin: MiniCssExtractPlugin,
                    args: [{
                        filename: 'css/index.css',
                        chunkFilename: 'css/[id].css'
                    }]
                }
            }
        })
    }
}*/

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
