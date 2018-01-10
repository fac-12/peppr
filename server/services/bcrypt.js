const bcrypt = require('bcrypt-nodejs');

const comparePassword = (candidatePassword, user) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) reject(err.message);
      resolve({isMatch: isMatch, user: user});
    })
  }) 
}

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) { reject(err.message) }
      bcrypt.hash(password, salt, null, (err, hash) => {
        if (err) { reject(err.message) }
        resolve(hash);
      })
    });
  });
};

module.exports = {
  comparePassword,
  hashPassword
}