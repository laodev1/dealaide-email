
import express from 'express';
var router = express.Router();

/* GET log files page. */
router.get('/', (req, res, next)=> {
     
res.send({hi:"there", path:"/api"})
});
export default router;