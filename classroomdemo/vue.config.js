// 静态资源打包上传
// module.exports = {
//   publicPath: './'

// } 
// 上传到git
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/aaausername/':
    '/'
}