const router = require("express").Router()

const MongoDB = require("mongodb")
const DBClient = MongoDB.MongoClient

//IF test locally
// const DBURL = "mongodb://locahost:27017/"
//IF deploy on docker
const DBURL = "mongodb://host.docker.internal:27000/"

const DBNAME = "final"
const collection = "DTAC"

router.get("/getAll", (req, res) => {
    DBClient.connect(DBURL, async (err, db) => {
        if(err){
            console.log(err)
            return res.status(400).send("ERROR")
        }
        const testDB = db.db(DBNAME)

        testDB.collection(collection).find().toArray((err, result) => {
            if(err){
                console.log(err)
            }
            
            res.send(result)
            console.log(result)
            db.close()
        })

        console.log("Database connected")
        
    })
})

router.get("/getOne", (req, res) => {
    const data = req.query.name

    DBClient.connect(DBURL, async (err, db) => {
        if(err){
            console.log(err)
            return res.status(400).send("ERROR")
        }
        const testDB = db.db(DBNAME)

        testDB.collection(collection).findOne({ fullname: data }).then(result => {
            if(err){
                console.log(err)
            }
            
            res.send(result)
            db.close()
        })

        console.log("Database connected")
        
    })
})

module.exports = router