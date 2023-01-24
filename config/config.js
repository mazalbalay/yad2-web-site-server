const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://yad2:yad2@cluster0.amdm7nt.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    mongoose.set("strictQuery", false),
  )
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));