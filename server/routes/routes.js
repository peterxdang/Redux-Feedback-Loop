const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('Post /api/info', req.body);
    const feel = req.body.feel
    const comprehend = req.body.comprehend
    const support = req.body.support
    const comment = req.body.comment
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;

    pool.query(sqlText, [feel, comprehend, support, comment])
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/info', error)
        res.sendStatus(500);
    });
})

module.exports = router;