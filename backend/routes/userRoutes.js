const express = require('express');
const { protectRoute } = require('../middleware/protectRoute');
const { getUsersForSidebar,getSearchedUser } = require('../controllers/userController');

const router = express.Router();

router.get('/',protectRoute,getUsersForSidebar);
router.post('/search-users',protectRoute,getSearchedUser);


module.exports = router;