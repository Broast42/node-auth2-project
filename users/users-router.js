const router = require("express").Router()
const db = require("./users-model")
const restrict = require("../middleware/restrict")

router.get("/", restrict(), async(req, res, next) => {
    try{
        res.json(await db.getUsers())

    }catch(err){
        next(err)
    }
})


module.exports = router