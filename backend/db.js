const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://Jayan:dalda2728@inotebook.kyn9a.mongodb.net/INoteBook?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to MongoDB");
  });
};

// mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false
module.exports = connectToMongo;
