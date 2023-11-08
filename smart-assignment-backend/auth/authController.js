const authService = require('../auth/authService');

const loginAuthControllerFn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await authService.getAuthByEmail(email);

        if (!user) {
            throw new Error('User not found');
        }

        if (user.password !== password) {
            throw new Error('Invalid password');
        }

        let roleMessage = '';
        // Check the user's role
        if (user.role === 0) {
            roleMessage = 'Student';
            // Added logic for student here
        } else if (user.role === 1) {
            roleMessage = 'Teacher';
            // Added logic for teacher here
        } else if (user.role === 2) {
            roleMessage = 'Admin';
            // Added logic for admin here
        } else {
            // Handle other roles or invalid roles here
        }

        res.send({
            "status": true,
            "message": `${roleMessage} login successful`,
            'role':user.role
        });
    } catch (error) {
        console.error(error);
        res.status(400).send({
            "status": false,
            "message": "Error during login"
        });
    }
};

// Create user Controller Function
const createAuthControllerFn = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        const authDetails = {
            username: username,
            email: email,
            password: password,
            role: role // 0 for student, 1 for teacher, 2 for admin
        };

        console.log("authDetails:", authDetails);
        const status = await authService.createAuthDBService(authDetails);

        if (status) {
            res.send({
                "status": true,
                "message": " created successfully",
                'role':user.role
            });
        } else {
            throw new Error('Error in creating');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send({
            "status": false,
            "message": "Error during Hr signup"
        });
    }
};


const getAllUsersControllerFn = async (req, res) => {
    try {
        const users = await authService.getAllUsers();

        res.send({
            status: true,
            users,
        });
    } catch (error) {
        console.error(error);
        res.status(400).send({
            status: false,
            message: 'Error retrieving users',
        });
    }
};

const deleteUserByIdControllerFn = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await authService.deleteAuthById(userId);

        if (!deletedUser) {
            return res.status(404).send({
                status: false,
                message: 'User not found',
            });
        }

        res.send({
            status: true,
            message: 'User deleted successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            status: false,
            message: 'Error deleting user',
        });
    }
};


module.exports = {
    loginAuthControllerFn,
    createAuthControllerFn,
    getAllUsersControllerFn,
    deleteUserByIdControllerFn
};
