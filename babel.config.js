module.exports = {
    presets: [
        [
            'taro',
            {
                spec: true,
                useBuiltIns: false,
                framework: 'react',
                ts: false
            },
        ],
    ],
    plugins: [
        '@babel/plugin-transform-react-jsx'
    ]
}