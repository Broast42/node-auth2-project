const router = require("express").Router()
const db = require("./users-model")
const restrict = require("../middleware/restrict")

router.get("/", restrict(), async(req, res, next) => {
    try{
        console.log(req.token)
        res.json(await db.getUsers(req.token.department))

    }catch(err){
        next(err)
    }
})


module.exports = router