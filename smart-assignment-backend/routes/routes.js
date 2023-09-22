const express = require('express');

const authController = require('../auth/authController');
const studentSubmitController = require('../student-submit/studentSubmitController')
const router = express.Router();

//  Role based login and register
router.post('/login', authController.loginAuthControllerFn);
router.post('/register', authController.createAuthControllerFn);

// Getting or deleting any user / admin / mentor
router.get('/users', authController.getAllUsersControllerFn);
router.delete('/user/:id', authController.deleteUserByIdControllerFn);

//Submiting Form for Mentor

router.post('/student/submit', studentSubmitController.createSubmitControllerFn)

// Get , Update , delete Student Assignments

router.get('/student/get', studentSubmitController.getSubmitControllerFn)
router.patch('/student/update/:id',studentSubmitController.updateSubmitControllerFn)
router.delete('/student/delete/:id',studentSubmitController.deleteSubmitControllerFn)


module.exports = router;