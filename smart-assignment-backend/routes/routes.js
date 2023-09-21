const express = require('express');

const authController = require('../auth/authController');
const studentSubmitController = require('../student-submit/studentSubmitController')
const router = express.Router();


router.post('/login', authController.loginAuthControllerFn);
router.post('/register', authController.createAuthControllerFn);
router.get('/users', authController.getAllUsersControllerFn);
router.delete('/user/:id', authController.deleteUserByIdControllerFn);

router.post('/student/submit', studentSubmitController.createSubmitControllerFn)
router.get('/student/get', studentSubmitController.getSubmitControllerFn)
router.patch('/student/update/:id',studentSubmitController.updateSubmitControllerFn)
router.delete('/student/delete/:id',studentSubmitController.deleteSubmitControllerFn)


module.exports = router;