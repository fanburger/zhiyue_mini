const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

exports.main = async (event, context) => {
  const {
    phone,
    password
  } = event
  const user = await db.collection('users').where({
    phone,
    password
  }).get()
  if (user.data.length === 0) {
    return {
      code: 1,
      message: '用户不存在或密码错误'
    }
  }
  return {
    code: 0,
    message: '登录成功',
    data: user.data[0]
  }
}