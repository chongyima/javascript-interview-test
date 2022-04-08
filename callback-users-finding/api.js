const USER_NOT_FOUND_ERR = new Error('User not found')

const findUser = (firstName) => {
  if (firstName.toLowerCase() === 'bruce') {
        return {
          firstName: 'Bruce',
          lastName: 'Wayne',
          occupation: 'Business man',
          secretIdentity: 'Batman'
        }
      } else if (firstName.toLowerCase() === 'clark') {
        return {
          firstName: 'Clark',
          lastName: 'Kent',
          occupation: 'Reporter',
          secretIdentity: 'Superman'
        }
      } else {
        return null
      }
}


/**
 PART 1:
 */
const getUserCb = (firstName, cb) => {
  setTimeout(() => {
    const user = findUser(firstName)
    user ?
      cb(null, user) :
      cb(USER_NOT_FOUND_ERR)
  }, 1000)
}


/**
 PART 2:

 getUser should function exactly like getUserCb
 the only difference should be asynchronicity should be handled
 using a promise instead of a callback
 */
const getUser = (firstName) => {
  // ...
}

module.exports = { getUserCb }