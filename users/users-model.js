const db = require("../data/config")

function getUsers() {
    return db("users").select("id", "username")
}

module.exports = {
    getUsers,
}