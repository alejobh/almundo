
module.exports = {
  getHotels: function() {
    // Request File System Module
    const {promisify} = require('util')
    const fs = require('fs')
    const readFileAsync = promisify(fs.readFile)

    return readFileAsync(`${__dirname}/mock/data.json`, {encoding: 'utf8'})
    .then(contents => {
      return JSON.parse(contents)
    })
    .catch(error => {
      throw error
    })
  }
}
