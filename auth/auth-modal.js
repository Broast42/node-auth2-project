const db = require("../data/config")
const crypt = require("bcryptjs")


function findBy(filter){
    return db("users").where(filter)
}

function findById(id){
    return db("users").select("id", "username", "department").where("id", id).first()
}

async function add(user){
    user.password = await crypt.hashSync(user.password, 10)

    const [id] = await db("users").insert(user)
    return findById(id)
}

module.exports = {
    findBy,
    findById,
    add,
}