/*const express = require('express');
const router = express.Router();
const userController = require("../controllers/userControllers")

router.post('/checkEmail', (req, res) => {
	userController.checkEmailExists(req.body)
	.then(result => res.end(result.toString()))
	;
})

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseControllers')


router.post('/checkEmail', (req, res) => {
	courseController.checkEmailExists(req.body)
	.then(resultfromController => res.send(resultfromController))
	.catch(error => {
    	console.error('Error checking email:', error);
    	res.status(500).send('An error occurred while checking the email.');
    }); 
});

module.exports = router;