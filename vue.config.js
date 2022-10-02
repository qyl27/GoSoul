module.exports = {
    outputDir: './dist/client',
    lintOnSave: false,
    pages: {
        index: {
            entry: 'src/client/main.ts'
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true
            }
        }
    }
}
