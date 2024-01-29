const express = require('express');
const {loginUser, currentUser, registerUser} = require('../controllers/userController');

const router = express.Router();


router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', currentUser);

module.exports = router;