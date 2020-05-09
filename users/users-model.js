const db = require("../data/config")

function getUsers(department) {
    return db("users").select("id", "username").where("department", department)
}

module.exports = {
    getUsers,
}