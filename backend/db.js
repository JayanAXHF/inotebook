const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://Jayan:dalda2728@inotebook.kyn9a.mongodb.net/INoteBook?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to MongoDB");
  });
};

module.exports = connectToMongo;
