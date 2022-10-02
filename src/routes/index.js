const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/dashboard');
});

module.exports = router;
