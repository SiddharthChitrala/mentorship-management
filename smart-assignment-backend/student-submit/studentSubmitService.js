const { model } = require('mongoose');
var userSubmitModel = require('./studentSubmitModel')

const path = require('path');

module.exports.getSubmitFromDBService = () => {
    return new Promise((resolve, reject) => {
        userSubmitModel.find({})
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.createSubmitDetailsDBService = (userSubmitDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userSubmitModelData = new userSubmitModel(userSubmitDetails);
        userSubmitModelData.save()
            .then(result => {
                resolve(true);
            })
            .catch(error => {
                reject(false);
            });
    });
}

module.exports.updateSubmitService = async (id, userSubmitDetails) => {
    try {
        console.log(userSubmitDetails);
        const result = await userSubmitModel.findByIdAndUpdate(id, userSubmitDetails);
        if (result) {
            return result; // Resolve with the updated document
        } else {
            throw new Error("Not found"); // Reject 
        }
    } catch (error) {
        throw error; // Rethrow the error
    }
};

module.exports.deleteSubmitDBService = async (id) => {
    try {
        const result = await userSubmitModel.findByIdAndDelete(id);
        if (result) {
            return result; // Resolve with the deleted document
        } else {
            throw new Error("Not found"); // Reject 
        }
    } catch (error) {
        throw error; // Rethrow the error
    }
};