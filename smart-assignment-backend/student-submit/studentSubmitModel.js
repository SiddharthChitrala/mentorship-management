const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSubmitSchema = new Schema({
    fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      comments: {
        type: String,
        required: true,
      },
      gitLink: {
        type: String,
        required: true,
      },
      videoLink: {
        type: String,
        required: true,
      },
      marks:{
        type:String,
      }
});

module.exports = mongoose.model("Form_details", UserSubmitSchema);