const authModel = require('../auth/authModel');

module.exports = {
    createAuthDBService: async (authDetails) => {
        try {
            const authModelData = new authModel({
                username: authDetails.username,
                email: authDetails.email,
                password: authDetails.password,
                role: authDetails.role // Store the role as an integer
            });

            const savedEmp = await authModelData.save();

            return savedEmp ? true : false;
        } catch (error) {
            return false;
        }
    },
    getAuthByEmail: async (email) => {
        try {
            const user = await authModel.findOne({ email });
            return user;
        } catch (error) {
            return null;
        }
    },

    getAllUsers: async () => {
        try {
            const users = await authModel.find();
            return users;
        } catch (error) {
            return [];
        }
    },

    deleteAuthById: async (userId) => {
        try {
            const deletedUser = await authModel.findByIdAndDelete(userId);
            if (!deletedUser) {
                throw new Error('User not found');
            }
            return deletedUser;
        } catch (error) {
            console.error(error);
            throw error; // Rethrow the error so that it can be handled by the controller
        }
    }

};

