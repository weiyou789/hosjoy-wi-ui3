import NodePath from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupCopy from 'rollup-plugin-copy'
import RollupSass from 'rollup-plugin-sass'
import babel from 'rollup-plugin-babel'
import Package from './package.json'

const resolveFile = path => NodePath.resolve(__dirname, path)

const externalPackages = [
    'react',
    'react-dom',
    '@tarojs/components',
    '@tarojs/runtime',
    '@tarojs/taro',
    '@tarojs/react',
]

export default {
    input: resolveFile(Package.source),
    output: [
        {
            file: resolveFile(Package.main),
            format: 'cjs',
            sourcemap: false,
        },
        {
            file: resolveFile(Package.module),
            format: 'es',
            sourcemap: false,
        }
    ],
    external: externalPackages,
    plugins: [
        RollupSass(),
        RollupNodeResolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules',
            },
        }),
        babel({
            exclude: 'node_modules/**', // 只编译我们的源代码
            runtimeHelpers: true
        }),
        RollupCommonjs({
            include: /\/node_modules\//,
        }),
        RollupJson(),
        RollupCopy({
            targets: [
                {
                    src: ['src/style','src/entry/index.js'],
                    dest: 'dist',
                },
                {
                    src:['src/common','src/components','src/index.js'],
                    dest:'dist/weapp'
                }
            ],
        }),
    ],
}