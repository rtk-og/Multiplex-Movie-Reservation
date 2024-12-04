const mongoose = require("mongoose");

const theaterData = new mongoose.Schema({
  theaterimageurl: {
    type: String,
    required: true
  },
  theatername: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  }
});
//userdetail is the modelname.using these userdetail we can able to create,read,update,delete datas in userdetails collection
const theatermodel = mongoose.model("theaters", theaterData);

module.exports = theatermodel;
