const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  userName2: String,
  userEmail: String,
  userName: String,
  fName: String,
  lName: String,
  address: String,
  phoneNumber: String,
  model: String,
  year: Number,
  horseoower: Number,
  description: String,
  price: Number,
  imgUrl: String,
  idPost: String,
  likes:[String]
});

const carModel = mongoose.model("cars", carSchema);

const furnitureSchema = new mongoose.Schema({
  userName2: String,
  userEmail: String,
  userName: String,
  fName: String,
  lName: String,
  address: String,
  phoneNumber: String,
  type: String,
  description: String,
  price: Number,
  imgUrl: String,
  idPost: String,
  likes:[String]
});

const furnitureModel = mongoose.model("furnitures", furnitureSchema);

const otherSchema = new mongoose.Schema({
  userName2: String,
  userEmail: String,
  userName: String,
  fName: String,
  lName: String,
  address: String,
  phoneNumber: String,
  type: String,
  description: String,
  price: Number,
  imgUrl: String,
  idPost: String,
  likes:[String]
});

const otherModel = mongoose.model("other", otherSchema);

const userSchema = new mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: String,
});
const userModel = mongoose.model("user", userSchema);

module.exports = { carModel, furnitureModel, otherModel, userModel };
