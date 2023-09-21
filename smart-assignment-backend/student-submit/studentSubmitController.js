var userSubmitService = require('./studentSubmitService');

var getSubmitControllerFn = async (req, res) => {
    try {
        var userSubmitDetails = await userSubmitService.getSubmitFromDBService();
        res.send({ "status": true, 'data': userSubmitDetails });
    } catch (error) {
        console.error('Error getting data:', error);
        res.status(500).json({ error: 'Error getting data' });
    }
};

var createSubmitControllerFn = async (req, res) => {
    try {
        var status = await userSubmitService.createSubmitDetailsDBService(req.body);
        if (status) {
            res.send({ "status": true, "message": "Successfully Applied" });
        } else {
            res.send({ "status": false, "message": "Error while Applying" });
        }
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(500).json({ error: 'Error creating  data' });
    }
};

var updateSubmitControllerFn = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    var result = await userSubmitService.updateSubmitService(req.params.id, req.body);
    if (result) {
        res.send({ 'status': true, "message": "Status updated" })
    }
    else {
        res.send({ "status": false, "message": "Status Pending" })
    }
}

var deleteSubmitControllerFn=async(req,res)=>{
    console.log(req.params.id);
   
    var result=await userSubmitService.deleteSubmitDBService(req.params.id);
    if(result){
        res.send({"status":true,"message":"Rejected"})
    }
    else{
        res.send({"status":false,"message":"Not Rejected"})
    }
    console.log('done')
}

module.exports = {

    getSubmitControllerFn,
    createSubmitControllerFn,
    updateSubmitControllerFn,
    deleteSubmitControllerFn
};