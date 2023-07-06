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


router.post('/courseCode', (req, res) => {
	courseController.checkCourseCodeExists(req.body)
	.then(resultfromController => res.send(resultfromController))
	.catch(error => {
    	console.error('Error checking course code:', error);
    	res.status(500).send('An error occurred while checking the course code.');
    }); 
});

module.exports = router;