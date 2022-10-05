
import express from 'express';
import Database from 'better-sqlite3'
var router = express.Router();
var db = new Database('./routes/submissions.sqlite',{fileMustExist:true});
    db.exec(
        `CREATE TABLE IF NOT EXISTS submissions(ID INTEGER PRIMARY KEY AUTOINCREMENT,Datetime,Submission,Email)`
      );
/* GET log files page. */
router.get('/', (req, res, next)=> {
     
res.send({hi:"there", path:"/api"})
});
router.post('/submissions', async(req, res, next)=> {

    
    let insert = db.prepare(`INSERT INTO submissions(Datetime,Submission,Email) VALUES(@Datetime,@Submission,@Email)`)

     let body = req.body;
     console.log(body);
     insert.run({Datetime:body.datetime,Submission:body.suggestion,Email:body.email ? body.email : "Anonymous"})
    res.status(200).send({success:true});
    })
export default router;