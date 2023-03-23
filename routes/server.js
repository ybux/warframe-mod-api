const {Router} = require('express')
const router = Router();

router.get('/', (req,res)=>{res.send('Api Warframe mod')});

module.exports = router;