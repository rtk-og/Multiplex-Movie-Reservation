const mongoose = require("mongoose");

const screenData = new mongoose.Schema({
  screenname: {
    type: String,
    required: true
  },

  theateremail: {
    type: String,
    required: true
  }
});
//userdetail is the modelname.using these userdetail we can able to create,read,update,delete datas in userdetails collection
const screenmodel = mongoose.model("screens", screenData);

module.exports = screenmodel;
