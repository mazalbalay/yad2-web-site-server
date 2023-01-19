const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/yad2",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to Database1");
  },
);
