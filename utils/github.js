const axios = require("axios");
function getUser(githubUserName){

    const url = `https://api.github.com/users/${githubUserName}`;
    return axios.get(url)
    .catch(err => {
        console.log(`User not found`);
        process.exit(1);
    });
}
module.exports = {
    getUser,
}