const express = require('express');
const router = express.Router();
//JSON availale from this link https://valley-raisin-52e.notion.site/Assignment-for-MERN-Stack-Developer-Role-bb6987eb6b614a28bae069b220e5711f
const data = require('./formData.json');

//get form data route
router.get('/formdata', (req, res) => {
  res.json(data);
});

module.exports = router;
