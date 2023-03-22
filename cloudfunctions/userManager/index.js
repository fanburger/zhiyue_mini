const userLogin = require('./login/index')


exports.main = async (event, context) => {
  switch (event.type) {
    case 'login':
      return await userLogin.main(event, context);
    default:
      return {
        code: 1,
        msg: 'Invalid cloud function name.'
      }
  }
}